import { Component , OnInit , inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  productService : ProductService = inject(ProductService);
  totalLikes : number = 0 ; 
  likesSubscription! : Subscription; 
  ngOnInit() : void {
    this.likesSubscription = this.productService.totalLikes$.subscribe(total => this.totalLikes = total) 
  }; 
  ngOnDestroy(): void{
    this.likesSubscription.unsubscribe(); 
  }
}
