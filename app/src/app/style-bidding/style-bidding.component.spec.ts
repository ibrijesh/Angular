import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBiddingComponent } from './style-bidding.component';

describe('StyleBiddingComponent', () => {
  let component: StyleBiddingComponent;
  let fixture: ComponentFixture<StyleBiddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleBiddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
