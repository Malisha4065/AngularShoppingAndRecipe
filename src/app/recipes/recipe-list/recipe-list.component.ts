import {Component, EventEmitter, Output} from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://www.century-foods.com/wp-content/uploads/2023/01/px653047-image-kwvxn16x.jpg'),
    new Recipe('Another Test Recipe', 'This is also a test',
      'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0033-quick-pasta-to-go.jpg?w=1200&h=1200&fit=clip&crop=default&dpr=1&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=66e7cea6b7919fb9e923049341a67c3e')
  ];
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipeSelected(selected: Recipe): void {
    this.selectedRecipe.emit(selected);
  }
}
