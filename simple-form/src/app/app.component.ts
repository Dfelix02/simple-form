import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'simple-form';
  loginform = new FormGroup({
    email: new FormControl ('', Validators.required),
    fname: new FormControl ('',Validators.required),
    lname: new FormControl ('',Validators.required),
    password: new FormControl <number | string>('', [Validators.minLength(8),Validators.nullValidator,Validators.required]),
  })
  get email() {
    return this.loginform.get('email')
  }
  get fname() {
    return this.loginform.get('fname')
  }
  get lname() {
    return this.loginform.get('lname')
  }
  get age() {
    return this.loginform.get('age')
  }
  get password() {
    return this.loginform.get('password')
  }
}

