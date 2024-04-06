import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToroApiService } from './toro-api.service';
import { Stock } from '../interfaces/stock.interface';
import { Order } from '../interfaces/order.interface';
import { Transfer } from '../interfaces/transfer.interface';


describe('ToroApiService', () => {
  let service: ToroApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ToroApiService]
    });
    service = TestBed.inject(ToroApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return stocks from API', () => {
    const mockStocks: Stock[] = [{ symbol: 'AAPL', currentPrice: 150.25 }];
    service.getStocks().subscribe(stocks => {
      expect(stocks).toEqual(mockStocks);
    });
    const req = httpMock.expectOne(`${service.apiUrl}/trends`);
    expect(req.request.method).toBe('GET');
    req.flush(mockStocks);
  });

  it('should send buy order to API', () => {
    const mockOrder: Order = { symbol: 'TORO4', amount: 10, customerId: "660d9bc631d2a55b5db5083a" };
    service.buyStock(mockOrder).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const req = httpMock.expectOne(`${service.apiUrl}/orders`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockOrder);
    req.flush({});
  });

  it('should transfer funds to API', () => {
    const mockTransfer: Transfer = {
      amount: 1000,
      event: "PIX",
      origin: {
        bank: "122",
        branch: "0001",
        account: "3789824",
      },
      target: {
        bank: '352',
        branch: '0001',
        account: '300123',
      },
    }
    service.transfer(mockTransfer).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const req = httpMock.expectOne(`${service.apiUrl}/spb/events`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockTransfer);
    req.flush({});
  });

});
