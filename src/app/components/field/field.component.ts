import { Component } from '@angular/core';
import { BallComponent } from '../ball/ball.component';
import { PlayerComponent } from '../player/player.component';
import { MovementService } from '../../services/movement.service';
import { CommonModule } from '@angular/common';  // Import CommonModule

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [Component],
  imports: [
    BrowserModule,
    DragDropModule,
    // other modules
  ],
  bootstrap: [Component]
})
export class AppModule {}


@Component({
  selector: 'app-field',
  standalone: true,
  imports: [ BallComponent, PlayerComponent, CommonModule ],
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})



export class FieldComponent {
  // Field component logic here
  ballPosition = { x: 50, y: 50 };
  
  players = [
    { id: 'player1', position: { x: 50, y: 50 }, imageUrl: 'assets/images/iksatra.png' },
    { id: 'player2', position: { x: 50, y: 100 }, imageUrl: 'assets/images/iksatra.png' },
    { id: 'player3', position: { x: 50, y: 150 }, imageUrl: 'assets/images/iksatra.png' },
    { id: 'player4', position: { x: 50, y: 200 }, imageUrl: 'assets/images/iksatra.png' },
    { id: 'player5', position: { x: 50, y: 250 },  imageUrl: 'assets/images/iksatra.png' }
    // More players as needed
  ];

  constructor(private movementService: MovementService) {}

  onBallPositionChange(position: { x: number; y: number }): void {
    this.ballPosition = position;
    this.movementService.updateBallPosition(position);

    // Print the new position to the console
    console.log('Ball position:', position);
  }


  onPlayerPositionChange(id: string, position: { x: number; y: number }): void {
    const player = this.players.find(p => p.id === id);
    if (player) {
      player.position = { ...position }; // Ensure the position update is isolated
    }
  }
}