// Opportunities spec: Testing component logic and functionality

// Import necessary testing utilities from Angular core testing module
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the component to be tested
import { OpportunitiesComponent } from './opportunities.component';

// Main test suite for OpportunitiesComponent
describe('OpportunitiesComponent', () => {
  // Declare variables for component and fixture
  let component: OpportunitiesComponent;
  let fixture: ComponentFixture<OpportunitiesComponent>;

  // beforeEach function runs before each test in this suite
  beforeEach(async () => {
    // Configure the testing module
    await TestBed.configureTestingModule({
      imports: [OpportunitiesComponent]
    })
    .compileComponents(); // Compile the component

    // Create a fixture for the OpportunitiesComponent
    fixture = TestBed.createComponent(OpportunitiesComponent);
    // Get the component instance
    component = fixture.componentInstance;
    // Trigger change detection
    fixture.detectChanges();
  });

  // Test case: check if the component is created successfully
  it('should create', () => {
    // Assert that the component exists
    expect(component).toBeTruthy();
  });
});
