// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { FieldComponent } from './components/field/field.component';
import { MarkosoftDevComponent } from './components/markosoft-dev/markosoft-dev.component'; 

export const routes: Routes = [
  { path: '', component: FieldComponent }, // Default route
  { path: 'markosoft-dev', component: MarkosoftDevComponent }, // Route for Markosoft Dev
  { path: '**', redirectTo: '' } // Om en okänd väg anges, gå till startsidan
];
