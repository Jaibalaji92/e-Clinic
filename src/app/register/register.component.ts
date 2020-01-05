import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegisterService } from './register.service';
import Person, {} from "../shared/Person.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService) { }

  ngOnInit() {
  }

  onRegister(form:NgForm){
    const formdata = form.value;
    let person = new Person(formdata.username, formdata.dob, formdata.gender, formdata.address, formdata.password, formdata.email);
    this.registerService.adduser(person);
  }

}
