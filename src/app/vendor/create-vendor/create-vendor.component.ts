import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, ValidationErrors, Validators} from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validator } from '@angular/forms';
import {ValidateRegex, forbiddenNameValidator} from '../../validates/validate-regex';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.scss']
})
export class CreateVendorComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  submitted = false;

  vendor = this.fb.group({
      code: ['', [Validators.required, forbiddenNameValidator(/bob/i)]],
      company_name: [''],
      main_items: [''],
      email: [''],
      address: [''],
      products: this.fb.array([
          this.fb.control('')
      ])
  });

  ngOnInit() {

  }



    validatePhone(control: AbstractControl): ValidationErrors | null {
        const regex = '/(09|01[2|6|8|9])+([0-9]{8})\b/';
        console.log(control.value)
        console.log(control.value.match(regex))
        if (control.value.match(regex)) {
            return null;
        } else {
            return {validatePhone: true};
        }
    }

    onSubmit() {
        this.submitted = true;
    }

    addProduct() {
        this.products.push(this.fb.control(''));
    }

    get products() {
        return this.vendor.get('products') as FormArray;
    }
    get formValidate() {
        return this.vendor.controls;
    }

}
