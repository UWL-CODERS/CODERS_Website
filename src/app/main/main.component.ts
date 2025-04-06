// main.component.ts
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { LogoCubeComponent } from '../logo-cube/logo-cube.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, LogoCubeComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild(LogoCubeComponent) logoCubeComponent!: LogoCubeComponent;

  ngAfterViewInit(): void {
    // Call the startAnimation function of the LogoCubeComponent
    this.logoCubeComponent.startAnimation();
  }
}