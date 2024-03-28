import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  checkusername(un:string):Observable{
    //API call
    const isAvailable= un==='available'
    return isAvailable

  }
}
