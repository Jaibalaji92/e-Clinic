import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import Person from '../shared/Person.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  adduser(person: Person) {
    return this.http.put('https://e-clinic-e25c7.firebaseio.com/register.json', person);
  }
}

