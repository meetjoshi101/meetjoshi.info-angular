import '@angular/compiler'; // Critical for JIT
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, Routes } from '@angular/router';
import { AppComponent } from './src/app.component';
import { HomeComponent } from './src/pages/home.component';
import { PortfolioComponent } from './src/pages/portfolio.component';
import { BlogComponent } from './src/pages/blog.component';
import { ContactComponent } from './src/pages/contact.component';
import { AdminComponent } from './src/pages/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation())
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.