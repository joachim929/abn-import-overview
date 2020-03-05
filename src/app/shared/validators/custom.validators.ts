import {Injectable} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';


export function lessThanValidator(compareControl: FormControl): ValidatorFn {
  return (control: FormControl): { [key: string]: any } | null => {
    let forbidden = false;
    if (compareControl.value && control.value) {
      forbidden = control.value < compareControl.value;
    }
    return forbidden ? {lessThan: {value: control.value}} : null;
  };
}

