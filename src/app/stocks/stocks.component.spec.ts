import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksComponent } from './stocks.component';

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    component.stocks = [
      {
        currentPrice:115.98,
        symbol:"TORO4"
      },
      {
        currentPrice:40.77,
        symbol:"SANB11"
      }
    ];
    fixture.detectChanges();
  });

  it('should create the stocks component', () => {
    expect(component).toBeTruthy();
  });

  it('should render stock symbol correctly', () => {
    const symbolElements: NodeListOf<Element> = fixture.nativeElement.querySelectorAll('.stocks__symbol');
    expect(symbolElements.length).toEqual(component.stocks.length);
    expect(symbolElements[0].textContent).toContain('TORO4');
    expect(symbolElements[1].textContent).toContain('SANB11');
  });

  it('should render stock price correctly', () => {
    const priceElements: NodeListOf<Element> = fixture.nativeElement.querySelectorAll('.stocks__price');
    expect(priceElements.length).toEqual(component.stocks.length);
    expect(priceElements[0].textContent).toContain('R$115.98');
    expect(priceElements[1].textContent).toContain('R$40.77');
  });

  it('should emit stockSelected event when stock item is clicked', () => {
    spyOn(component.stockSelected, 'emit');
    const stockItem: HTMLElement = fixture.nativeElement.querySelector('.stocks__item');
    stockItem.click();
    expect(component.stockSelected.emit).toHaveBeenCalledWith(component.stocks[0]);
  });
});
