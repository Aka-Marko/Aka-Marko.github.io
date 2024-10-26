import { Injectable } from '@angular/core';
//import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  //private playerPosition = { x: 0, y: 0 };
  private playerPositions: { x: number, y: number }[] = [];
  private ballPosition = { x: 0, y: 0 };
  private recordedSequence: any[] = [];

 /* updatePlayerPosition(player: Player): void {
    const index = this.playerPositions.findIndex(p => p.id === player.id);
    if (index >= 0) {
      this.playerPositions[index] = player;
    }
  }*/

  // Update a specific player's position by index
  updatePlayerPosition(index: number, position: { x: number; y: number }): void {
      this.playerPositions[index] = position;
  }

  //updatePlayerPosition(index: number, position: { x: number; y: number }): void {
  //  this.playerPosition = position;
  //}

  updateBallPosition(position: { x: number; y: number }): void {
    this.ballPosition = position;
  }

  startRecording(): void {
    this.recordedSequence = [];
  }

  recordFrame(): void {
    this.recordedSequence.push({
     // players: JSON.parse(JSON.stringify(this.playerPositions)),
      ball: { ...this.ballPosition }
    });
  }

  getRecordedSequence(): any[] {
    return this.recordedSequence;
  }
}
