import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { ShopService } from './core/services/shop.service';

import { Product } from './shared/models/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private shopService = inject(ShopService);
  title = 'Skinet';
  products: Product[] = [];

  ngOnInit(): void {
   this.shopService.getProducts().subscribe({
      next: response => this.products = response.data,
      error: error => console.log(error),
    })
  }
}
