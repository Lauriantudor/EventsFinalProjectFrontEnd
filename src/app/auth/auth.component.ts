import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  reTypePasswordFormControl = new FormControl('', [Validators.required]);
  viewType: string = 'login';
  constructor(private authService:AuthService, private router:Router){}
  onLogin(){
    let email=this.emailFormControl.getRawValue()!;
    let password=this.passwordFormControl.getRawValue()!;
    this.authService.login(email,password).subscribe((response: any) => {
      console.log(response);
      alert(response.message);
      this.router.navigate(["/events"]);
    })

  }
  public onRegister(): void {
    let firstName = this.firstNameFormControl.getRawValue()!;
    let lastName = this.lastNameFormControl.getRawValue()!;
    let email = this.emailFormControl.getRawValue()!;
    let password = this.passwordFormControl.getRawValue()!;
    let reTypePassword = this.reTypePasswordFormControl.getRawValue()!;
    if (password == reTypePassword) {
      this.authService.register(firstName, lastName,email,password).subscribe((response: any) => {
        console.log(response);
        alert(response.message);
        this.viewType = "login";
      })
    } else {
      alert("Parolele nu se potrivesc");
    }
  }
  public onViewChange(): void {
    if (this.viewType == 'login') {
      this.viewType = 'register';
    } else {
      this.viewType = 'login';
    }
  }
}
