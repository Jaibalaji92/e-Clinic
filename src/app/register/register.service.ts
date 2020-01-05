import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import Person from '../shared/Person.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  adduser(person:Person){
    //add person http request goes here
    console.log(person);
  }
}

