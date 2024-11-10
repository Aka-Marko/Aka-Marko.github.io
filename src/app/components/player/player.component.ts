import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

//import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  imports: [CommonModule]  // Add CommonModule here
})
export class PlayerComponent {
  @Input() position!: { x: number; y: number }; // Position input
  @Input() imageUrl!: string; // Input picture
  @Output() positionChange = new EventEmitter<{ x: number; y: number }>(); // Emit new position

  private dragging = false; // Indicates if the player is being dragged
  private offsetX = 0; // X offset for dragging
  private offsetY = 0; // Y offset for dragging

  // Initiate dragging
  onMouseDown(event: MouseEvent): void {
    this.dragging = true; // Set dragging to true
    this.offsetX = event.clientX - this.position.x; // Calculate offset
    this.offsetY = event.clientY - this.position.y; // Calculate offset
    event.preventDefault(); // Prevent text selection during drag
  }

  // Stop dragging when mouse is released
  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.dragging = false; // Set dragging to false
  }

  // Handle mouse movement for dragging
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.dragging) {
      // Update position based on mouse movement
      this.position.x = event.clientX - this.offsetX;
      this.position.y = event.clientY - this.offsetY;
      this.positionChange.emit({ x: this.position.x, y: this.position.y }); // Emit new position
    }
  }
}