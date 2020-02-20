import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class ValidateRegex {

    regex = '/(09|01[2|6|8|9])+([0-9]{8})\b/';
    validatePhone(control: AbstractControl): ValidationErrors | null {
        console.log('ZZZZZZ')
        if (this.regex.match(control.value)) {
            return null;
        } else {
            return {validatePhone: true};
        }
    }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    const regex = '/(09|01[2|6|8|9])+([0-9]{8})/';
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = this.regex.test(control.value);
        return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
}
