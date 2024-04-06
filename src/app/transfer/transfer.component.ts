import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountInfo } from '../interfaces/transfer.interface';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss'
})
export class TransferComponent {
  modalForm: FormGroup;
  @Input() isOpenTransfer: boolean = false;
  @Output() handleTransfer: EventEmitter<AccountInfo> = new EventEmitter<AccountInfo>();
  @Output() closeModalTransfer: EventEmitter<MouseEvent> =  new EventEmitter<MouseEvent>();

  constructor(private formBuilder: FormBuilder) {
    this.modalForm = this.formBuilder.group({
      branch: ['', [Validators.required]],
      account: ['', Validators.required],
      bank: ['', [Validators.required]],
      cpf: ['98765432101', Validators.required],
      event: ['PIX'],
      amount: [0, [Validators.required]],
    });
  }

  handleSave() {
    this.handleTransfer.emit(this.modalForm.value)
    this.modalForm.reset()
  }
}