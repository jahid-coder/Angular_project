import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error : string = null;

    constructor(private AuthService : AuthService){

    }

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form:NgForm){
        if(!form.valid){
            return;

        }

        const email = form.value.email;
        const password  = form.value.password;

        let authobs: Observable<AuthResponseData>;

        this.isLoading = true;

        if(this.isLoginMode){
           authobs = this.AuthService.login(email, password);
        }else{
            authobs = this.AuthService.signup(email, password)
        }

       authobs.subscribe( resData =>{
        console.log(resData)
        this.isLoading = false;
        },
            errorMessage =>{
                console.log(errorMessage);
            this.error = errorMessage
                this.isLoading = false;
        });

    form.reset();
        
    }
}
