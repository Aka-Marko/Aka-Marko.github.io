import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';  // Importera MatListModule
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-top-menu',
  standalone: true,
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatMenuModule, RouterModule ]
})

export class TopMenuComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
}