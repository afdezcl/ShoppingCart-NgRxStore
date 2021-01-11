import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { FilterCategoryPipe } from './filterCategory.pipe';


@NgModule({
  declarations:[FilterCategoryPipe],
  imports:[CommonModule],
  exports:[FilterCategoryPipe] 
})

export class PipesModule {}