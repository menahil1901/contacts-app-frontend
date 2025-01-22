import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core'; // Import this to use `importProvidersFrom`
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), // Add HttpClientModule here
  ],
});
