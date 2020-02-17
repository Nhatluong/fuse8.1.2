import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    // public object: any = {};
    model: any = {};
  constructor() { }

  ngOnInit() {
  }

    onSubmit(form): void {
      console.log(form.value);
      console.log(form.form.valid);
      console.log(form.submitted);
    }

}
