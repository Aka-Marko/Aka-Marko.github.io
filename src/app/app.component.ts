// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FieldComponent } from './components/field/field.component';
import { BallComponent } from './components/ball/ball.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

/* Add material modules */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { routes } from './app.routes'; // Import your routes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // This is needed for routing
    RouterModule, // This is just the module, not .forRoot()
    FieldComponent,
    BallComponent,
    ControlPanelComponent,
    TopMenuComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inboard';
}