import { Component } from '@angular/core';
import { MovementService } from '../../services/movement.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent {
  recording: boolean = false;

  constructor(private movementService: MovementService) {}

  startRecording(): void {
    this.recording = true;
    this.movementService.startRecording();
  }

  stopRecording(): void {
    this.recording = false;
    this.movementService.recordFrame();
  }

  playback(): void {
    const sequence = this.movementService.getRecordedSequence();
    // You can visualize the playback using a SequencePlaybackComponent.
    console.log(sequence);
  }
}
