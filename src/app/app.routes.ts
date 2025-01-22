import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' }, // Default route
  { path: 'contacts', component: ContactsComponent },      // Route to ContactsComponent
];
