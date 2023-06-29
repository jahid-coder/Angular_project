import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { outputAst } from '@angular/compiler';
import { RecipeService } from '../recipe.servicce';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit, OnDestroy{
  subscription : Subscription;

  recipes: Recipe[];

  constructor( private recipeService : RecipeService,
    private router: Router,
    private route : ActivatedRoute) { 

    }

  ngOnInit() {
   this.subscription = this.recipeService.recipesChanged.subscribe(
          (recipes:Recipe[])=>{
              this.recipes = recipes;
          }
        );

    this.recipes = this.recipeService.getRecipes();
    }

    onNewRecipe(){
        this.router.navigate(['new'],{relativeTo: this.route});
    }
    
    ngOnDestroy(): void {
      if(this.subscription){
        this.subscription.unsubscribe();
      }
    }

}


