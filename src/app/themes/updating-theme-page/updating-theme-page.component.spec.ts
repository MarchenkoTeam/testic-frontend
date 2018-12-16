import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingThemePageComponent } from './updating-theme-page.component';

describe('UpdatingThemePageComponent', () => {
  let component: UpdatingThemePageComponent;
  let fixture: ComponentFixture<UpdatingThemePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatingThemePageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatingThemePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
