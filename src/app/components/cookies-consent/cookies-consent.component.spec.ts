import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesConsentComponent } from './cookies-consent.component';

describe('CookiesConsentComponent', () => {
  let component: CookiesConsentComponent;
  let fixture: ComponentFixture<CookiesConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiesConsentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookiesConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
