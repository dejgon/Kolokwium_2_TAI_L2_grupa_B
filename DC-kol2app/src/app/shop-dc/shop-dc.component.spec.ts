import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDCComponent } from './shop-dc.component';

describe('ShopDCComponent', () => {
  let component: ShopDCComponent;
  let fixture: ComponentFixture<ShopDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
