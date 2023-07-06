import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.servicce";

@Injectable({providedIn:'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService : RecipeService){

    }


    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.post('https://ng-course-recipe-book-3118a-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe(Response =>{
            console.log(Response);
        });
    }

    fetchRecipes(){
        this.http.get('https://ng-course-recipe-book-3118a-default-rtdb.firebaseio.com/recipes.json')
        .subscribe(Recipes=>{
            console.log(Recipes);
        })
    }

}