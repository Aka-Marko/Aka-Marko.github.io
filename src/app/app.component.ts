import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FieldComponent } from './components/field/field.component';
import { BallComponent } from './components/ball/ball.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FieldComponent, BallComponent ],  // Add FieldComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inboard';
}
