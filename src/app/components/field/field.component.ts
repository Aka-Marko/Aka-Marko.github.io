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
  //playerPosition = { x: 100, y: 100 };
  players = [  // Array of player positions
    { x: 100, y: 100 }, // Add more players here
    { x: 150, y: 150 },  
    { x: 200, y: 250 },
    { x: 200, y: 200 },
    { x: 200, y: 300 }
  ];

  constructor(private movementService: MovementService) {}

  onBallPositionChange(position: { x: number; y: number }): void {
    this.ballPosition = position;
    this.movementService.updateBallPosition(position);

    // Print the new position to the console
    console.log('Ball position:', position);
  }


  // Update individual player position
  onPlayerPositionChange(index: number, position: { x: number; y: number }): void {
    this.players[index] = position;
    this.movementService.updatePlayerPosition(index, position);  // Pass player index to movement service
    console.log(`Player ${index} position:`, position);
  }

  //onPlayerPositionChange(position: { x: number; y: number }): void {
  //  this.playerPosition = position;
  //  this.movementService.updatePlayerPosition(position);

    // Print the new position to the console
  //  console.log('Player position:', position);
  //}
}



/**

import { Component, OnInit } from '@angular/core';
import { MovementService } from '../../services/movement.service';
// import { Player } from '../../models/player.model';
import { BallComponent } from '../ball/ball.component';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-field',
  standalone: true,
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
 // players: Player[] = [];
  ballPosition = { x: 50, y: 50 };

  constructor(private movementService: MovementService) {}

  ngOnInit(): void {
    // Initialize players
  this.players = [
      { id: 1, name: 'Player 1', position: { x: 10, y: 10 } },
      { id: 2, name: 'Player 2', position: { x: 30, y: 10 } },
      { id: 3, name: 'Player 3', position: { x: 50, y: 10 } },
      { id: 4, name: 'Player 4', position: { x: 70, y: 10 } },
      { id: 5, name: 'Player 5', position: { x: 90, y: 10 } }
    ];
  }

  onPlayerPositionChange(updatedPlayer: Player): void {
    this.movementService.updatePlayerPosition(updatedPlayer);
  }

  onBallPositionChange(position: { x: number; y: number }): void {
    this.ballPosition = position;
    this.movementService.updateBallPosition(position);
  }
}


*/