import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegisterService } from './register.service';
import Person, {} from "../shared/Person.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, Person {
  name: string;
  dob: Date;
  gender: string;
  address: string;
  password: string;
  email: string;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    const formdata = form.value;
    const person: Person = {
      name : formdata.username,
      dob: formdata.dob,
      gender : formdata.gender,
      address: formdata.address,
      password : formdata.password,
      email: formdata.email};
    this.registerService.adduser(person).subscribe(res =>{
      console.log(res);
    });
  }

}
