import { Component,  OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { outputAst } from '@angular/compiler';
import { RecipeService } from '../recipe.servicce';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit{
  

  recipes: Recipe[];

  constructor( private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    }

}


