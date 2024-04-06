import { Component, OnInit } from '@angular/core';
import { Stock } from './interfaces/stock.interface';
import { ToroApiService } from './services/toro-api.service';
import { Order, ResponseOrder } from './interfaces/order.interface';
import { AccountInfo, Transfer } from './interfaces/transfer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  message: string = ""
  messages: any = {
    "your request has been successfully processed.": "Order processada com sucesso 🎉!",
    "invalid customer ID or stock symbol.": "Usuário ou nome da ação inválido🤦!",
    "insufficient balance. Purchase cannot be made.": "Saldo insuficiente 😢!",
    "internal Server Error": "Error interno ⚙️",
    "processed By transfer": "Transferência realizada com sucesso 🎉!",
    "processed By pix": "Transferência realizada com sucesso 🎉!",
    "transaction rejected because the CPF does not match the registered account.": "Transferência recusada 😢!",
    "error_stocks": "Erro ao buscar ações ⚙️!"
  }

  isOpen: boolean = false;
  isOpenToast: boolean = false;
  isOpenTransfer: boolean = false;

  quantity: number = 1;
  orderPrice: number = 0.0

  target = {
    bank: '352',
    branch: '0001',
    account: '300123',
  };

  stock: Stock | any = {};
  stocks: Stock[] = []

  constructor(private toroApiService: ToroApiService) {}

  ngOnInit() {
    this.toroApiService.getStocks().subscribe({
      next: (data: Stock[]) => {
        this.stocks = data;
      },
      error: () => {
        this.message = this.messages.error_stocks
        this.isOpenToast = true
        setTimeout(() => this.isOpenToast = false, 4000)
      }
    });
  }

  closeModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.isOpen = false;
      this.stock = {}
      this.orderPrice = 0.00
      this.quantity = 1
    }
  }

  incrementQuantity() {
    this.quantity++;
    this.orderPrice = this.stock.currentPrice * this.quantity
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.orderPrice = this.stock.currentPrice * this.quantity
    } else {
      this.orderPrice = this.stock.currentPrice * this.quantity
    }
  }

  selectStock(stock: Stock) {
    this.stock = stock
    this.orderPrice = stock.currentPrice
    this.quantity = 1
    this.isOpen = true
  }
  
  buyStock() {
    const payload: Order = {
      amount: this.quantity,
      symbol: this.stock.symbol,
      customerId: "660d9bc631d2a55b5db5083a",
    }

    this.toroApiService.buyStock(payload)
      .subscribe({
        next: (data: ResponseOrder) => {
          this.message = this.messages[data.message]
          this.isOpenToast = true
          setTimeout(() => this.isOpenToast = false, 4000)
        },
        error: error => {
          this.message = this.messages[error.error.message]
          this.isOpenToast = true
          setTimeout(() => this.isOpenToast = false, 4000)
        },
        complete: () => {
          this.isOpen = false;
          this.stock = {}
          this.orderPrice = 0.00
          this.quantity = 1
        }
      })
  }

  newTransfer() {
    this.isOpenTransfer = true;
  }

  closeModalTransfer(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.isOpenTransfer = false;
    }
  }

  handleTransfer(formData: AccountInfo) {
    const payload: Transfer = {
      amount: formData.amount || 0,
      event: formData.event || "",
      origin: {
        bank: formData.bank,
        branch: formData.branch,
        account: formData.account,
      },
      target: this.target,
    }

    this.toroApiService.transfer(payload)
      .subscribe({
        next: (data: ResponseOrder) => {
          this.isOpenTransfer = false;
          this.message = this.messages[data.message]
          this.isOpenToast = true
          setTimeout(() => this.isOpenToast = false, 4000)
        },
        error: (error) => {
          this.isOpenTransfer = false;
          this.message = this.messages[error.error.message]
          this.isOpenToast = true
          setTimeout(() => this.isOpenToast = false, 4000)
        },
      })
  }
}
