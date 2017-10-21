import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrivateComponent } from './app-private.component';

describe('AppPrivateComponent', () => {
  let component: AppPrivateComponent;
  let fixture: ComponentFixture<AppPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
