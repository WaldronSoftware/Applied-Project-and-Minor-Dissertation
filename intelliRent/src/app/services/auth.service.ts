import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 isLoggedIn: boolean = true; // FALSE for correct function | TRUE to disable modal popup for testing

 login(username: string, password: string): boolean 
 {
  if(username === 'sampleuser' && password === 'samplepassword') {
    this.isLoggedIn = true;
    return true;
  } else {
    return false;
  }
 }

 logout() : void
 {
  // logout logic
  this.isLoggedIn = false;
 }




}//auth
