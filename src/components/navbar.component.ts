import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <!-- Mobile Header -->
    <div class="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#FFFEFA]/90 backdrop-blur-sm border-b border-[#FEF3C7] z-50 flex items-center justify-between px-6">
      <div class="flex items-center gap-3">
        <div class="w-6 h-6 bg-[#F59E0B] rounded shadow-sm"></div>
        <span class="font-serif font-black text-xl text-[#292524] tracking-tighter">Meet Joshi.</span>
      </div>
      <button (click)="toggleMenu()" class="p-2 text-[#78716c] hover:text-[#D97706] focus:outline-none transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          @if (!isMenuOpen()) {
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
          } @else {
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
          }
        </svg>
      </button>
    </div>

    <!-- Sidebar Overlay for Mobile -->
    @if (isMenuOpen()) {
      <div class="md:hidden fixed inset-0 z-40 bg-[#1c1917]/20 backdrop-blur-sm" (click)="toggleMenu()"></div>
    }

    <!-- Sidebar Container -->
    <nav [class.translate-x-0]="isMenuOpen()" [class.-translate-x-full]="!isMenuOpen()" 
         class="fixed top-0 left-0 bottom-0 w-[280px] bg-[#FFFEFA]/95 md:bg-transparent z-50 transition-transform duration-300 md:translate-x-0 overflow-y-auto flex flex-col justify-between pl-8 md:pl-12 py-12 md:py-16 border-r border-[#FEF3C7]">
      
      <!-- Top Section: Logo -->
      <div>
        <a routerLink="/" (click)="closeMenu()" class="group block mb-16">
          <div class="w-10 h-10 bg-[#F59E0B] rounded-lg mb-5 shadow-lg shadow-[#FDE68A] opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-12"></div>
          <!-- Brand Typography: Playfair Display Black (900), 30px, tracking-tighter (-0.05em) -->
          <h1 class="font-serif font-black text-3xl text-[#292524] tracking-tighter group-hover:text-[#D97706] transition-colors">Meet Joshi.</h1>
        </a>

        <!-- Navigation -->
        <ul class="space-y-6">
          <li>
            <a routerLink="/" (click)="closeMenu()" 
               routerLinkActive="text-[#D97706] font-bold" 
               [routerLinkActiveOptions]="{exact: true}" 
               class="block font-serif text-lg font-medium tracking-tight text-[#78716c] hover:text-[#292524] transition-colors duration-300">
              Overview
            </a>
          </li>
          <li>
            <a routerLink="/work" (click)="closeMenu()" 
               routerLinkActive="text-[#D97706] font-bold" 
               class="block font-serif text-lg font-medium tracking-tight text-[#78716c] hover:text-[#292524] transition-colors duration-300">
              Selected Works
            </a>
          </li>
          <li>
            <a routerLink="/blog" (click)="closeMenu()" 
               routerLinkActive="text-[#D97706] font-bold" 
               class="block font-serif text-lg font-medium tracking-tight text-[#78716c] hover:text-[#292524] transition-colors duration-300">
              Journal
            </a>
          </li>
          <li>
            <!-- Placeholder for Profile -->
            <a routerLink="/" fragment="profile" (click)="closeMenu()" 
               class="block font-serif text-lg font-medium tracking-tight text-[#78716c] hover:text-[#292524] transition-colors duration-300">
              Profile
            </a>
          </li>
          <li>
            <a routerLink="/contact" (click)="closeMenu()" 
               routerLinkActive="text-[#D97706] font-bold" 
               class="block font-serif text-lg font-medium tracking-tight text-[#78716c] hover:text-[#292524] transition-colors duration-300">
              Inquiries
            </a>
          </li>
        </ul>
      </div>

      <!-- Bottom Section: Footer -->
      <div class="pr-8">
        <div class="w-12 h-[2px] bg-[#FEF3C7] mb-8"></div>
        
        <!-- Socials -->
        <div class="flex gap-6 mb-8 font-sans text-base">
           <a href="#" class="opacity-60 hover:opacity-100 hover:text-[#D97706] transition-all duration-300">Li</a>
           <a href="#" class="opacity-60 hover:opacity-100 hover:text-[#D97706] transition-all duration-300">Tw</a>
           <a href="#" class="opacity-60 hover:opacity-100 hover:text-[#D97706] transition-all duration-300">Gh</a>
        </div>
        
        <p class="text-xs text-[#a8a29e] font-mono">
          &copy; 2024 Meet Joshi
        </p>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(prev => !prev);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}