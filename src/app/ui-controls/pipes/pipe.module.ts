import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterCategoryPipe } from './filterCategory.pipe';
import { FilterOrderPipe } from './filterOrder.pipe';


@NgModule({
    declarations: [
        FilterCategoryPipe,
        FilterOrderPipe
    ],
    imports: [CommonModule],
    exports: [
        FilterCategoryPipe,
        FilterOrderPipe
    ]
})

export class PipesModule { }
