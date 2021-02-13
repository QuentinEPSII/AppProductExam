import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageDetailComponent } from './product-page-detail.component';

describe('ProductPageDetailComponent', () => {
  let component: ProductPageDetailComponent;
  let fixture: ComponentFixture<ProductPageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
