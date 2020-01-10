import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  private id_user = new BehaviorSubject('');
  id_user_as = this.id_user.asObservable();

  changeIdUser(obj) {
    this.id_user.next(obj);
  }


  private user = new BehaviorSubject({});
  user_as = this.user.asObservable();

  changeUser(obj) {
    if (obj.username) {
      this.user.next(obj);     
      return
    }
    this.user.next({ username: 'guest' });
  }

  

}