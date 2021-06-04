import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCepsComponent } from './card-ceps.component';

describe('CardCepsComponent', () => {
  let component: CardCepsComponent;
  let fixture: ComponentFixture<CardCepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
