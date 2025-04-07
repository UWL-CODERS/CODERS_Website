// main.component.ts
import { Component, AfterViewInit, viewChild } from '@angular/core';
import { LogoCubeComponent } from '../logo-cube/logo-cube.component';


@Component({
  selector: 'app-main',
  imports: [LogoCubeComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  readonly logoCubeComponent = viewChild.required(LogoCubeComponent);

  ngAfterViewInit(): void {
    // Call the startAnimation function of the LogoCubeComponent
    this.logoCubeComponent().startAnimation();
  }
}