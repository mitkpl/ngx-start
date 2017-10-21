import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPublicComponent } from './app-public.component';

describe('AppPublicComponent', () => {
  let component: AppPublicComponent;
  let fixture: ComponentFixture<AppPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
