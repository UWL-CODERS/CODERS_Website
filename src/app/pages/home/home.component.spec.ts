import { type ComponentFixture, TestBed } from "@angular/core/testing"

import { HomeComponent } from "./home.component"

describe("HomeComponent", () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should have banner slides", () => {
    expect(component.bannerSlides.length).toBeGreaterThan(0)
  })

  it("should have features", () => {
    expect(component.features.length).toBeGreaterThan(0)
  })

  it("should have activities", () => {
    expect(component.activities.length).toBeGreaterThan(0)
  })

  it("should have events", () => {
    expect(component.events.length).toBeGreaterThan(0)
  })
})
