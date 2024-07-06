import { Component ,OnInit} from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss',
  inputs: ["item"]
})
export class ItemDetailComponent {
  item: any;
  show:boolean = false;
  showData(){
    this.show=!this.show;
  }

//   soloitem:any;
//   userId:number=1;
//   constructor(private itemService: ItemService,private route: ActivatedRoute) { 
    
//   }
  

//   ngOnInit(): void {
    
//     const id= this.route.snapshot.params['id'];
//     if (id !== null && id !== undefined) {
//       this.userId = +id;
//       console.log(id)
//     }
//     else{
//       console.log(id)
//     }
//     this.onSelectItem();
//   }
//   onSelectItem(): void {
//     console.log("HIiiii")
    
//     this.itemService.getItem(this.userId).subscribe(item => {
     
//       this.soloitem = item;
//       console.log(this.soloitem)
//     });


// }
}
