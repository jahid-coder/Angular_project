import {Component, OnDestroy, OnInit } from'@angular/core'
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';


@Component({
 selector : 'app-header',
 templateUrl: './header.component.html'
})

export class HearderComponent implements OnInit, OnDestroy{
   public isAuthenticated = false;
    private userSub : Subscription;

    constructor(private dataStorageService: DataStorageService, private authService : AuthService){

    }
    ngOnInit() {
        console.log(this.isAuthenticated);
    
        this.userSub = this.authService.user.subscribe(testUser =>{
            this.isAuthenticated = !!testUser;
            console.log(!testUser );
            console.log( !!testUser);
           
        });
      
        // this.dataStorageService.fetchRecipes().subscribe( recipes =>{
        //     console.log(recipes);
        // });
       
       }



    onSaveData(){
            this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe( recipes =>{
            console.log(recipes);
        });
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}