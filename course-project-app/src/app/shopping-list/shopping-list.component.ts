import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
  ingredients: Ingredient[];
  private igChangeSub : Subscription;

  constructor(private slService : ShoppingListService, private loggingService : LoggingService) {
   
  }
  
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged
      .subscribe(
        (ingredients : Ingredient[])=>{
            this.ingredients = ingredients;
        }
      );

      this.loggingService.printLog(" Hello From shoppingListComponent ngONInit!")
  }

  onEditItem(index:number){
    this.slService.startedediting.next(index);
  }
  ngOnDestroy(): void {
    if(this.igChangeSub){
      this.igChangeSub.unsubscribe();
    }
  }
 
}
