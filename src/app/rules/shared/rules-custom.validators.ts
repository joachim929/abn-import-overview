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
    if (thatHasValue || thisHasValue) {
      thatArray.setErrors(null);
      return null;
    } else {
      thatArray.setErrors({error: 'Can\'t be empty'});
      return {error: 'Can\'t be empty'};
    }
  };
}

