import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemDCComponent } from './shop-item-dc.component';

describe('ShopItemDCComponent', () => {
  let component: ShopItemDCComponent;
  let fixture: ComponentFixture<ShopItemDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
