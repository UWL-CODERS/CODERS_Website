import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCubeComponent } from './logo-cube.component';

describe('LogoCubeComponent', () => {
  let component: LogoCubeComponent;
  let fixture: ComponentFixture<LogoCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoCubeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
