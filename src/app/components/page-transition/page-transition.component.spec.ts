import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTransitionComponent } from './page-transition.component';

describe('PageTransitionComponent', () => {
  let component: PageTransitionComponent;
  let fixture: ComponentFixture<PageTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTransitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
