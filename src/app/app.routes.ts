import { Routes } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';

export const routes: Routes = [
    {
       
        path: 'items/:id',
        
        component: ItemDetailComponent
    }
];
