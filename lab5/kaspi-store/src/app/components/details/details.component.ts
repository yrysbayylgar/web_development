import { CommonModule } from '@angular/common';
import { Component , inject , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInfo } from '../../model/product-info';
import { ProductService } from '../../services/product.service';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-details',
  imports: [CommonModule],
  template: `
    <article *ngIf="productInfo">
      <img class="listing-photo" [src]="productInfo.photoURL">
      <section class="listing-description">
        <h2 class="listing-heading">Name of product : {{productInfo.name}}</h2>
        <p class="listing-category">Category : {{productInfo.category}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this product</h2>
          <ul>
            <li>Rate : {{productInfo.rating}}</li>
          </ul>
      </section>
      <div class="like-section">
        <button (click)="toggleLike()">
          {{ productInfo.like ? 'Unlike' : 'Like'}}
        </button>
        <span>Status : {{productInfo.like ? 'Liked' : 'Not liked' }}</span> 
      </div>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute); 
  productService = inject(ProductService)
  productInfo : ProductInfo | undefined ; 
  
  ngOnInit() : void {
    const detailsId = Number(this.route.snapshot.params['id']);
    this.productInfo = this.productService.getProductsById(detailsId)
  }
  
  toggleLike():void {
    if(this.productInfo){
      this.productInfo.like = !this.productInfo.like; 
      this.productService.updateLikes(); 
    }
  }
}
