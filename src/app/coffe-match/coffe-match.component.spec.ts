import { TitleCasePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeMatchComponent } from './coffe-match.component';

describe('CoffeMatchComponent', () => {
  let component: CoffeMatchComponent;
  let fixture: ComponentFixture<CoffeMatchComponent>;

  const pipe = new TitleCasePipe();

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CoffeMatchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('transforms abc to Abc', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('should convert answerSetOne to TitleCase',() => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input');
    const nameDisplay: HTMLElement = hostElement.querySelector('span');
    nameInput.value = 'quick BROWN  fOx';
    nameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(nameDisplay.textContent).toBe('Quick Brown  Fox');
  })
});
