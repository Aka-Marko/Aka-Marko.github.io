import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-ball',
  standalone: true,
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css'],
  imports: [CommonModule],  // Add CommonModule here
})
export class BallComponent {
  @Input() position!: { x: number; y: number };
  @Output() positionChange = new EventEmitter<{ x: number; y: number }>();

  private isDragging = false;  // Track if the ball is currently being dragged
  private offsetX = 0;  // Track the offset from the click position
  private offsetY = 0;

  // Start dragging on mousedown
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;

    // Calculate offset from the top-left corner of the ball
    this.offsetX = event.clientX - this.position.x;
    this.offsetY = event.clientY - this.position.y;
  }

  // Track mouse movement when dragging
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      // Calculate new position
      const newX = event.clientX - this.offsetX;
      const newY = event.clientY - this.offsetY;

      // Update position and emit the changes
      this.positionChange.emit({ x: newX, y: newY });
    }
  }

  // Stop dragging on mouseup
  @HostListener('window:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }
}