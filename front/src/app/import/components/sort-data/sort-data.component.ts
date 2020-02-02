import { Component, OnInit } from '@angular/core';
import {DataParseService, FormattedData} from '../../services/data-parse.service';
import {Category, CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-sort-data',
  templateUrl: './sort-data.component.html',
  styleUrls: ['./sort-data.component.scss']
})
export class SortDataComponent implements OnInit {
  showAll = false;

  constructor(
    private dataParseService: DataParseService,
    private categoryService: CategoryService
  ) { }

  get categories(): Category[] {
    return this.categoryService.categories;
  }

  get formattedData(): FormattedData[] {
    return this.dataParseService.formattedData;
  }

  ngOnInit() {
  }

  showEntry(entry: FormattedData): boolean {
    return this.showAll ? this.showAll : entry.category === null;
  }

}
