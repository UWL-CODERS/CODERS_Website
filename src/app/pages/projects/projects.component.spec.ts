// Research-projects spec: Testing component logic and functionality

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProjectsComponent } from './projects.component';

describe('ResearchProjectsComponent', () => {
  let component: ResearchProjectsComponent;
  let fixture: ComponentFixture<ResearchProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
