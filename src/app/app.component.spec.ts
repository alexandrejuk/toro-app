import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountInfoComponent } from './account-info/account-info.component';
import { BankLogoComponent } from './bank-logo/bank-logo.component';
import { HeaderComponent } from './header/header.component';
import { StocksComponent } from './stocks/stocks.component';
import { ModalComponent } from './modal/modal.component';
import { ToastComponent } from './toast/toast.component';
import { TransferComponent } from './transfer/transfer.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        AppComponent,
        AccountInfoComponent,
        BankLogoComponent,
        HeaderComponent,
        StocksComponent,
        ModalComponent,
        ToastComponent,
        TransferComponent,
      ],
      providers: []
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
