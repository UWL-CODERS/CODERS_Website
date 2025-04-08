import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTransitionComponent } from './logo-transition.component';

describe('LogoTransitionComponent', () => {
  let component: LogoTransitionComponent;
  let fixture: ComponentFixture<LogoTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoTransitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
