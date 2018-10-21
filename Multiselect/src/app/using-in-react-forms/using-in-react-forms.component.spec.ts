import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingInReactFormsComponent } from './using-in-react-forms.component';

describe('UsingInReactFormsComponent', () => {
  let component: UsingInReactFormsComponent;
  let fixture: ComponentFixture<UsingInReactFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingInReactFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingInReactFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
