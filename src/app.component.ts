import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <div class="min-h-screen bg-[#FFFEFA] text-[#57534e] font-light selection:bg-[#FDE68A] selection:text-[#78350F]">
      <!-- Sidebar Component (Responsive) -->
      <app-sidebar />
      
      <!-- Main Content Area -->
      <main class="md:ml-[280px] min-h-screen transition-all duration-300">
        <!-- Layout System: px-8(32px) md:px-16(64px) lg:px-24(96px) -->
        <div class="px-8 py-12 md:px-16 md:py-24 lg:px-24 lg:py-24 max-w-[1600px]">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `
})
export class AppComponent {}