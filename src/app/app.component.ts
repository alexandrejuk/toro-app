import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isOpen = false;
  quantity: number = 1;
  orderPrice: number = 0.0

  target = {
    bank: '352',
    branch: '0001',
    account: '300123',
  };

  stock: any = {};

  stocks = [
    {
    "_id": "660d97e431d2a55b5db50835",
    "currentPrice": 28.44,
    "symbol": "PETR4"
    },
    {
    "_id": "660d983b31d2a55b5db50836",
    "currentPrice": 25.91,
    "symbol": "MGLU3"
    },
    {
    "_id": "660d985131d2a55b5db50837",
    "currentPrice": 25.91,
    "symbol": "VVAR3"
    },
    {
    "_id": "660d986d31d2a55b5db50839",
    "currentPrice": 115.98,
    "symbol": "TORO4"
    },
    {
    "_id": "660d985e31d2a55b5db50838",
    "currentPrice": 40.77,
    "symbol": "SANB11"
    }
  ]

  closeModal(event: any) {
    if (event.target === event.currentTarget) {
      this.isOpen = false;
      this.isOpen = false;
      this.stock = {}
      this.orderPrice = 0.00
      this.quantity = 1
    }
  
  }

  incrementQuantity(event: any) {
    event.stopPropagation()
    this.quantity++;
    this.orderPrice = this.stock.currentPrice * this.quantity
  }

  decrementQuantity(event: any) {
    event.stopPropagation()
    if (this.quantity > 1) {
      this.quantity--;
      this.orderPrice = this.stock.currentPrice * this.quantity
    } else {
      this.orderPrice = this.stock.currentPrice * this.quantity
    }
  }

  selectStock(stock: any) {
    this.stock = stock
    this.orderPrice = stock.currentPrice
    this.quantity = 1
    this.isOpen = true
    console.log(stock, this.isOpen)
  }
  
  buyStock(event: any) {
    event.stopPropagation()
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
