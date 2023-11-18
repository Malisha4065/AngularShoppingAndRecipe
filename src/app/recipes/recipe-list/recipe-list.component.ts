import {Component} from '@angular/core';

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
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://www.century-foods.com/wp-content/uploads/2023/01/px653047-image-kwvxn16x.jpg')
  ];
}
