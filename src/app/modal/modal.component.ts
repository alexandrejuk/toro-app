import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() stock: { symbol: string, currentPrice: number } = { symbol: '', currentPrice: 0 };
  @Input() quantity: number = 0;
  @Input() orderPrice: number = 0;

  @Output() closeModal: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() decrementQuantity: EventEmitter<void> = new EventEmitter<void>();
  @Output() incrementQuantity: EventEmitter<void> = new EventEmitter<void>();
  @Output() buyStock: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
