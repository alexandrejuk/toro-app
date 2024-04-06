import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss'
})
export class AccountInfoComponent {
  @Input() target!: { bank: string, branch: string, account: string };
  @Output() newTransfer: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() { }
}
