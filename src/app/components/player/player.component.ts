import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

//import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  imports: [CommonModule]  // Add CommonModule here
})
export class PlayerComponent {
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


/*

import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  imports: [CommonModule]  // Add CommonModule here
})
export class PlayerComponent {
  @Input() position!: { x: number; y: number };
  @Output() positionChange = new EventEmitter<{ x: number; y: number }>();

  private isDragging = false;
  private offsetX = 0;
  private offsetY = 0;

  constructor(private elementRef: ElementRef) {}

  // When mouse is pressed down, start dragging
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;

    const elementRect = this.elementRef.nativeElement.getBoundingClientRect();
    this.offsetX = event.clientX - elementRect.left;
    this.offsetY = event.clientY - elementRect.top;

    event.preventDefault(); // Prevent text selection or other browser defaults
  }

  // When mouse is moved, update position if dragging
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const newX = event.clientX - this.offsetX;
      const newY = event.clientY - this.offsetY;
      this.positionChange.emit({ x: newX, y: newY });

      event.preventDefault(); // Prevent browser default behavior
    }
  }

  // When mouse is released, stop dragging
  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }
}
*/