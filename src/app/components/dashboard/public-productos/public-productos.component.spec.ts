import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProductosComponent } from './public-productos.component';

describe('PublicProductosComponent', () => {
  let component: PublicProductosComponent;
  let fixture: ComponentFixture<PublicProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
