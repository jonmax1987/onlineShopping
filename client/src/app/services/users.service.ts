import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  
  private id_user = new BehaviorSubject('');
  id_user_as = this.id_user.asObservable();

  changeIdUser(obj){
    this.id_user.next(obj);
  }
}