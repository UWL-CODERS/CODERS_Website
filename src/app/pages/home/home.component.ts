// main.component.ts
import { Component, AfterViewInit, viewChild } from '@angular/core';
import { LogoCubeComponent } from '../../components/logo-cube/logo-cube.component';

@Component({
  selector: 'app-home',
  imports: [LogoCubeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  readonly logoCubeComponent = viewChild.required(LogoCubeComponent);

  ngAfterViewInit(): void {
    // Call the startAnimation function of the LogoCubeComponent
    this.logoCubeComponent().startAnimation();
  }
}