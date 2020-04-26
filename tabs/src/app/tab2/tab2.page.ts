import { Component } from '@angular/core';
import {FormGroup, FormControl,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  profileForm = new FormGroup({
    FirstName : new FormControl(''),
    LastName : new FormControl(''),
    Address : new FormControl(''),
    Address2 : new FormControl(''),
    city : new FormControl(''),
    state : new FormControl(''),
    zip : new FormControl(''),
    check : new FormControl(''),
  });
  constructor() {}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
