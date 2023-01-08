import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem!: Recipe;

  constructor() { }

  ngOnInit() {}

}
