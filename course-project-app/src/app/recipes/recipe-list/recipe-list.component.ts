import { Component,  OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { outputAst } from '@angular/compiler';
import { RecipeService } from '../recipe.servicce';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit{
  

  recipes: Recipe[];

  constructor( private recipeService : RecipeService,
    private router: Router,
    private route : ActivatedRoute) { 

    }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    }

    onNewRecipe(){
        this.router.navigate(['new'],{relativeTo: this.route});
    }

}


