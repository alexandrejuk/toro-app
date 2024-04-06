import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { TransferComponent } from './transfer.component';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the transfer component', () => {
    expect(component).toBeTruthy();
  });

  it('should have "open" class when isOpenTransfer is true', () => {
    component.isOpenTransfer = true;
    fixture.detectChanges();
    const modalContainer: HTMLElement = fixture.nativeElement.querySelector('.modal-container');
    expect(modalContainer.classList.contains('modal-container--open')).toBeTrue();
  });

  it('should emit closeModalTransfer event when modal container is clicked', () => {
    spyOn(component.closeModalTransfer, 'emit');
    const modalContainer: HTMLElement = fixture.nativeElement.querySelector('.modal-container');
    modalContainer.click();
    expect(component.closeModalTransfer.emit).toHaveBeenCalled();
  });

});
