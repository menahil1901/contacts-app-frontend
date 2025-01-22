import { Component } from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to the Contacts App!</h1>
    <app-contacts></app-contacts> <!-- Include your contacts component here -->
  `,
  standalone: true,
  imports: [ContactsComponent]  // Ensure you import the ContactsComponent
})
export class AppComponent {}
