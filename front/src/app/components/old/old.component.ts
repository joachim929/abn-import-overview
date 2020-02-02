import {Component} from '@angular/core';
// import {DATA2020} from '../../data2020';
// import {DATA2019} from '../../data2019';
// import {DATA2018} from '../../data2018';

@Component({
  selector: 'app-old',
  templateUrl: './old.component.html',
  styleUrls: ['./old.component.scss']
})
export class OldComponent {

  // test = [DATA2020, DATA2019, DATA2018];
  selectedYear: any;
  selectedMonth: any;
  monthSum: number;
  model: any[];

  categorySums = [];
  showChanges = false;

  categories = [
    {name: 'Cat Banking Fee', type: 'Unavoidable'},
    {name: 'Cat Charity', type: 'Charity'},
    {name: 'Cat Cigarettes', type: 'Questionable'},
    {name: 'Cat Clothing', type: 'Unavoidable'},
    {name: 'Cat Computing', type: 'Recreational'},
    {name: 'Cat Groceries', type: 'Questionable'},
    {name: 'Cat Hair dressers', type: 'Unavoidable'},
    {name: 'Cat Health insurance', type: 'Unavoidable'},
    {name: 'Cat Holidays', type: 'Recreation'},
    {name: 'Cat House kitty', type: 'Unavoidable'},
    {name: 'Cat Mobile phone', type: 'Unavoidable'},
    {name: 'Cat Other Travel', type: 'Recreation'},
    {name: 'Cat Rent', type: 'Unavoidable'},
    {name: 'Cat Savings', type: 'Administrative'},
    {name: 'Cat Snack', type: 'Avoidable'},
    {name: 'Cat Sports', type: 'Recreational'},
    {name: 'Cat Spotify', type: 'Recreation'},
    {name: 'Cat Social', type: 'Recreation'},
    {name: 'Cat Takeout', type: 'Recreation'},
    {name: 'Cat Unknown', type: 'Unknown'},
    {name: 'Cat Work travel', type: 'Unavoidable'}
  ];

  constructor() {
    this.calcCategories();
  }

  calcCategories() {
    // for (const year of this.test) {
    //   const sumYear = {
    //     year: year.year,
    //     sum: 0,
    //     months: []
    //   };
    //   const months = Object.keys(year.months);
    //   for (const month of months) {
    //     const sumMonth = {
    //       month,
    //       sum: 0,
    //       categories: []
    //     };
    //
    //     for (const item of year.months[month]) {
    //       if (!item.category) {
    //         continue;
    //       }
    //
    //       if (item.category.name === 'Groceries') {
    //         console.log(sumMonth);
    //       }
    //
    //       sumMonth.sum += Number(item.amount);
    //       sumMonth.sum = Number(sumMonth.sum.toFixed(2));
    //       if (sumMonth.categories[item.category.name]) {
    //         sumMonth.categories[item.category.name] = Number(sumMonth.categories[item.category.name]) + Number(item.amount);
    //         sumMonth.categories[item.category.name] = Number(sumMonth.categories[item.category.name]).toFixed(2);
    //       } else {
    //         sumMonth.categories[item.category.name] = Number(item.amount).toFixed(2);
    //       }
    //     }
    //     sumYear.months.push(sumMonth);
    //   }
    //   this.categorySums.push(sumYear);
    // }

    for (const year of this.categorySums) {
      for (const month of year.months) {
        year.sum += Number(month.sum);
        year.sum = Number(year.sum.toFixed(2));
      }
    }
    console.log(this.categorySums);
  }

  monthToNameMap(input: number) {
    const months = [
      'SHOULDN\'T BE SEEN',
      'january', 'february', 'march',
      'april', 'may', 'june',
      'july', 'august', 'september',
      'october', 'november', 'december'
    ];
    return months[input];
  }

  sumYearSelected(year) {
    this.selectedYear = year;
  }

  sumMonthSelected(month) {
    this.selectedMonth = month;
  }

  yearSelected(year) {
    this.selectedMonth = undefined;
    if (!this.selectedYear) {
      this.selectedYear = year;
    } else {
      if (this.selectedYear.year === year.year) {
        this.selectedYear = undefined;
      } else {
        this.selectedYear = year;
      }
    }
  }

  monthSelected(month) {
    if (!this.selectedMonth) {
      this.calcMonth(month);
    } else {
      if (this.selectedMonth === month) {
        this.selectedMonth = undefined;
      } else {
        this.calcMonth(month);
      }
    }
  }

  calcMonth(month) {
    this.model = [];
    this.selectedMonth = month;
    this.monthSum = 0;
    for (const item of this.selectedMonth) {
      this.monthSum += Number(item.amount);
      this.monthSum = Number(this.monthSum.toFixed(2));
    }
  }

  updateItem(item, value) {
    item.category = value;
  }

  getCssHint(category, item) {
    let hint = false;

    if (category.name === 'Spotify') {
      hint = item.amount === -9.99;
    } else if (category.name === 'Cigarettes') {
      hint = item.amount === -6.50 || item.amount === -13 || item.amount === -6.4;
    } else if (category.name === 'Clothing') {
      hint = item.description.toLowerCase().includes('uniqlo');
    } else if (category.name === 'Groceries') {
      hint = item.description.toLowerCase().includes('albert heijn');
    } else if (category.name === 'Work travel') {
      hint = item.description.toLowerCase().includes('ns');
    } else if (category.name === 'Takeout') {
      hint = item.description.toLowerCase().includes('new york pizza');
    } else if (category.name === 'Banking Fee') {
      hint = item.description.includes('523962118');
    } else if (category.name === 'Sports') {
      hint = item.description.toLowerCase().includes('klimhal amsterdam') && item.amount < -50;
    } else if (category.name === 'Charity') {
      hint = item.description.toLowerCase().includes('hartstichting');
    } else if (category.name === 'Social') {
      hint = item.description.toLowerCase().includes('ome ko') ||
        (item.description.toLowerCase('klimhal amsterdam') && item.amount > -50);
    } else if (category.name === 'Health insurance') {
      hint = item.description.toLowerCase().includes('zorgverzek') && item.amount > -50;
    } else if (category.name === 'Savings') {
      hint = item.amount === -200 && item.description.toLowerCase().includes('urqu');
    } else if (category.name === 'Hair dressers') {
      hint = item.description.toLowerCase().includes('cut throat');
    } else if (category.name === 'Rent') {
      hint = item.amount === -350;
    }

    return hint;
  }
}
