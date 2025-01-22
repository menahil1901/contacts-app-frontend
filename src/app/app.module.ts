import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [
    { provide: 'ContactsComponent', useClass: ContactsComponent },
    HttpClientModule, // Include HttpClientModule for API calls
  ]
});
