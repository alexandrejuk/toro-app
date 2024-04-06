import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../interfaces/stock.interface';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.scss'
})
export class StocksComponent {
  @Input() stocks: { symbol: string, currentPrice: number }[] = [];
  @Output() stockSelected: EventEmitter<Stock> = new EventEmitter<Stock>();
  constructor() {}
}
