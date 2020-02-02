import {Component, OnInit} from '@angular/core';
import {DataParseService, FormattedData} from '../../services/data-parse.service';
import {Category, CategoryService} from '../../services/category.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-imports-assign',
  templateUrl: './imports-assign.component.html',
  styleUrls: ['./imports-assign.component.scss']
})
export class ImportsAssignComponent implements OnInit {
  showCategoryMenu = false;
  categoryForm: FormGroup;
  assignIndex = 0;
  selectControl: FormControl;

  constructor(
    private dataParseService: DataParseService,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.selectControl = new FormControl();
    this.categoryForm = new FormGroup({
      category: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      subCategory: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }

  get categories() {
    return this.categoryService.categories;
  }

  get formattedData(): FormattedData[] {
    return this.dataParseService.formattedData;
  }

  toggleCategoryMenu() {
    this.showCategoryMenu = !this.showCategoryMenu;
  }

  assignCategory(index: number, category: Category) {
    this.formattedData[index].category = category;
    this.assignIndex++;
  }

  addCategory() {
    if (this.categoryForm.valid) {
      this.categoryService.addCategory(this.categoryForm.value);
    }
    this.categoryForm.reset();
  }

  addAndAssign(index: number) {
    this.addCategory();
    this.formattedData[index].category = this.categoryForm.value;
    console.log(this.formattedData[index].category);
    this.showCategoryMenu = false;
    this.assignIndex++;
  }
}
