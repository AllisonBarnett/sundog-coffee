import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeMatchComponent } from './coffe-match.component';

describe('CoffeMatchComponent', () => {
  let component: CoffeMatchComponent;
  let fixture: ComponentFixture<CoffeMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
