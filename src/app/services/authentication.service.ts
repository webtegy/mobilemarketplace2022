import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData;
  constructor(private ngFireAuth:AngularFireAuth) { 
    this.ngFireAuth.authState.subscribe(user =>{
      if(user){
        this.userData = user; 
        localStorage.setItem('user', JSON.stringify(this.userData))
      }
      else{
        localStorage.setItem('user', null);
      }
    })
  }

  SignIn(email, password){
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  RegisterUser(email, password){
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  SignOut()
  {
    return this.ngFireAuth.signOut();
  }

  getUser(){
    return this.ngFireAuth.user;
  }
}
