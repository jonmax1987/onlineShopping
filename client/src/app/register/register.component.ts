import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  id
  password
  passwordConfirm
  city
  street
  name
  last_name
  step_1=false;
  step_2=true;
  constructor() { }

  ngOnInit() {
  }

  click(){
    if(!this.step_1){
      this.step_1=true;
      this.step_2=false;
    }else{
      this.step_2=true;
      this.step_1=false;
    }
  }

}
