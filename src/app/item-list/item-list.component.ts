import { HttpClient } from '@angular/common/http';
import { Component,OnInit,inject} from '@angular/core';
import { ItemService } from '../item.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ItemDetailComponent } from '../item-detail/item-detail.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [RouterLink,ItemDetailComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
  providers: [ItemService]
})
export class ItemListComponent implements OnInit {
  
  // items: any[] = [];
  // selectedItemId: number | undefined;
  // soloitem ="";
  // page:number = 1;

  // constructor(private itemService: ItemService) { 
  //   console.log("hiiii");
  // }

  // ngOnInit(): void {
  //   this.loadItems();
  // }

  // loadItems(): void {
  //   this.itemService.getItems().subscribe(item => {
     
  //     this.items = item;
  //     console.log(this.items)
  //   });
  // }
  totalitems:any[]=[]
  items: any[] = [];
  
  currentPage: number = 1;
  itemsPerPage: number = 10; // Number of items to display per page
  totalItems: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getItems().subscribe(items => {
      this.totalitems = items;
      this.totalItems = this.items.length; // Assuming total items count from server-side
      this.paginateItems();
    });
  }

  paginateItems(): void {
    console.log(this.totalItems);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    console.log(startIndex);
    this.items = this.totalitems.slice(startIndex, startIndex + this.itemsPerPage);
    
  }
  incrementPage(){
    console.log('incrementPage');
    this.currentPage++;
    console.log(this.currentPage);
    
    this.paginateItems();
  }
  decrementPage()
{
  console.log('decrementPage');
  this.currentPage--;
  this.paginateItems();
}  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.paginateItems();
  }
 

  


  


}
