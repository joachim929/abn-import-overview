import {FormArray, ValidatorFn} from '@angular/forms';

export function minLengthThisOrThat(thatArray: FormArray): ValidatorFn {
  return (thisArray: FormArray): { [key: string]: any } | null => {
    let thisHasValue = false;
    thisArray.controls.map((control) => {
      if (control.value) {
        thisHasValue = true;
      }
    });
    let thatHasValue = false;
    thatArray.controls.map((control) => {
      if (control.value) {
        thatHasValue = true;
      }
    });
    return (thatHasValue || thisHasValue) ? null : {error: 'Can\'t be empty'};
  };
}

