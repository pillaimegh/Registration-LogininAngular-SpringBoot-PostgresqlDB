import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmainpageComponent } from './loginmainpage.component';

describe('LoginmainpageComponent', () => {
  let component: LoginmainpageComponent;
  let fixture: ComponentFixture<LoginmainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
