import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = ''; 
  password = '';
  errorMessage='';
  constructor(private authenticationSvc:AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form:NgForm){
    if(form.valid){
     //call authentication service method to login
     this.authenticationSvc.SignIn(this.email, this.password).then((results)=>{
       console.log(results);
       if(results.user && results.user.emailVerified){
         console.log(results.user);
         this.router.navigate(['']);
       }
       else{
         this.router.navigateByUrl('/register');
         return false; 
       }

     }).catch((error)=>{
       if(error.code == 'auth/user-not-found'){
         this.errorMessage = 'There is no user record corresponding to this email. Please try again'
       }
       else{
        this.errorMessage = error.message; 
      }
     })
    }

  }


  register(){
    //route to the registration page.
    this.router.navigate(['register']); 
  }

}
