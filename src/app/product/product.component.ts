import { Component, OnInit } from '@angular/core';
import {ProductClass} from '../models/product.model';
import {CdkDragDrop,  moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


 products: ProductClass[] = [
    new ProductClass("Nike","assets/newS1.jpg",  3200.43,1),
    new ProductClass ("Old Skool Vans", "assets/newS2.jpg", 2400.99, 2),
    new ProductClass("Air Max-220", "assets/newS3.jpg", 6980.80,3),
    new ProductClass("Nike Air 2-One","assets/newS4.jpg",  4466.87,4),
   

new ProductClass("Nike","assets/newS1.jpg",  3200.43,5),
    new ProductClass ("Old Skool Vans", "assets/newS2.jpg", 2400.99, 6),
    new ProductClass("Air Max-220", "assets/newS3.jpg", 6980.80,7),
    new ProductClass("Nike Air 2-One","assets/newS4.jpg",  4466.87,8),
  
 new ProductClass("Nike","assets/newS1.jpg",  3200.43,9),
    new ProductClass ("Old Skool Vans", "assets/newS2.jpg", 2400.99, 10),
   
  ];

 drop(event: CdkDragDrop<{p_name: string, p_img: string, p_order: number , p_price: number}[]>) {
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
