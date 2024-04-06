import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the modal component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit decrementQuantity event when "-" button is clicked', () => {
    spyOn(component.decrementQuantity, 'emit');
    const decrementButton = fixture.nativeElement.querySelector('.modal-content__btn-control:first-child');
    decrementButton.dispatchEvent(new Event('click'));
    expect(component.decrementQuantity.emit).toHaveBeenCalled();
  });

  it('should emit incrementQuantity event when "+" button is clicked', () => {
    spyOn(component.incrementQuantity, 'emit');
    const incrementButton = fixture.nativeElement.querySelector('.modal-content__btn-control:last-child');
    incrementButton.dispatchEvent(new Event('click'));
    expect(component.incrementQuantity.emit).toHaveBeenCalled();
  });

  it('should emit buyStock event when "Comprar" button is clicked', () => {
    spyOn(component.buyStock, 'emit');
    const buyButton = fixture.nativeElement.querySelector('.modal-content__control-buy');
    buyButton.dispatchEvent(new Event('click'));
    expect(component.buyStock.emit).toHaveBeenCalled();
  });
});
