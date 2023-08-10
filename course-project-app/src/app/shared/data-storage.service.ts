import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.servicce";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";

@Injectable({providedIn:'root'})

export class DataStorageService {
    constructor(private http: HttpClient, private recipeService : RecipeService, private authService : AuthService){

    }


    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-course-recipe-book-te-560b7-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe(Response =>{
            console.log(Response);
        });
    }

    fetchRecipes(){
       return this.authService.user.pipe(take(1),exhaustMap(user=>{
            return   this.http.get<Recipe[]>('https://ng-course-recipe-book-te-560b7-default-rtdb.firebaseio.com/recipes.json',
           
            
            ).pipe(
                map(recipes =>{
                return recipes.map(recipe=>{
                return {
                    ...recipe,
                     ingredients: recipe.ingredients? recipe .ingredients : []
                    };
            });
        }),
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
        })
    );
      
    }));
}
}