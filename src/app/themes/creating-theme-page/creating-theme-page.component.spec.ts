import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingThemePageComponent } from './creating-theme-page.component';

describe('CreatingThemePageComponent', () => {
  let component: CreatingThemePageComponent;
  let fixture: ComponentFixture<CreatingThemePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingThemePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingThemePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
