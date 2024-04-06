import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoComponent } from './account-info.component';
import { BankLogoComponent } from '../bank-logo/bank-logo.component';

describe('AccountInfoComponent', () => {
  let component: AccountInfoComponent;
  let fixture: ComponentFixture<AccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AccountInfoComponent,
        BankLogoComponent,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountInfoComponent);
    component = fixture.componentInstance;
    component.target = {
      bank: '352',
      branch: '0001',
      account: '300123',
    }
    fixture.detectChanges();
  });

  it('should create the account component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit newTransfer event when transfer button is clicked', () => {
    spyOn(component.newTransfer, 'emit');
    const transferButton: HTMLButtonElement = fixture.nativeElement.querySelector('.account__btn');
    transferButton.click();
    expect(component.newTransfer.emit).toHaveBeenCalled();
  });
});
