import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the toast component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the message correctly', () => {
    component.message = 'Order processada com sucesso 🎉!';
    fixture.detectChanges();
    const toastElement: HTMLElement = fixture.nativeElement.querySelector('.toast');
    expect(toastElement?.textContent?.trim()).toEqual('Order processada com sucesso 🎉!');
  });
});
