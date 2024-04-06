import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankLogoComponent } from './bank-logo.component';

describe('BankLogoComponent', () => {
  let component: BankLogoComponent;
  let fixture: ComponentFixture<BankLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the svg component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the SVG with the correct width and height', () => {
    const svgElement: HTMLElement = fixture.nativeElement.querySelector('svg');
    expect(svgElement.getAttribute('width')).toBe('134');
    expect(svgElement.getAttribute('height')).toBe('26');
  });
});
