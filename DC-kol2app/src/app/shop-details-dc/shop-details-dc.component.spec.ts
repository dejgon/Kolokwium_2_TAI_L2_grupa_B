import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsDCComponent } from './shop-details-dc.component';

describe('ShopDetailsDCComponent', () => {
  let component: ShopDetailsDCComponent;
  let fixture: ComponentFixture<ShopDetailsDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
