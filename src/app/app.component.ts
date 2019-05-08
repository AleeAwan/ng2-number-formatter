import { Component } from '@angular/core';
import { Validators, FormArray, FormBuilder, ValidatorFn, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency';
  form: FormGroup;
  constructor() {
  	this.form = new FormGroup({
  		net_debt: new FormControl
    });
    this.form.patchValue({net_debt: 678000});
  }
  ngModelChange(event) {
  	console.log(' event ', event);
  }
  onSubmit(event) {
  	console.log(' submitted value ', event, this.form.value.net_debt);
  }
  myBlur(event) {
    console.log('this is my blur', event);
  }
  changeNetDebtInternally() {
    this.form.patchValue({net_debt: 60000});
  }
}
