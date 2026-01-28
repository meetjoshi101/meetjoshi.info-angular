import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <div class="min-h-screen bg-white text-gray-700 font-light">
      <!-- Sidebar Component (Responsive) -->
      <app-sidebar />
      
      <!-- Main Content Area -->
      <main class="md:ml-[300px] min-h-screen transition-all duration-300 bg-white">
        <div class="px-6 py-10 md:px-12 md:py-16 lg:px-20 lg:py-20 max-w-5xl">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `
})
export class AppComponent {}