import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appIsNumberEven]',
    providers: [
        {
            provide: NG_VALIDATORS, useExisting: IsNumberEvenDirective, multi: true
        }
    ]
})
export class IsNumberEvenDirective implements Validator{

  constructor() { }

    validate(control: AbstractControl): ValidationErrors | null{
      const remainder = control.value % 2;
      if (remainder === 0) {
          return null;
      } else {
          return { appIsNumberEven: true };
      }
  }

}
