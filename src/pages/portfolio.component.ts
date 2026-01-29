import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  template: `
    <section class="animate-fade-in-up">
      <div class="grid md:grid-cols-12 mb-20 items-end">
        <div class="md:col-span-8">
          <h1 class="text-5xl md:text-7xl font-serif font-bold text-[#1c1917] mb-6">Selected Works</h1>
          <p class="text-xl text-[#57534e] font-light leading-relaxed">
            An archive of experiments, products, and systems designed at the edge of possibility.
          </p>
        </div>
        <div class="md:col-span-4 text-right hidden md:block">
           <span class="text-[#D97706] font-serif italic text-2xl">2016 — 2024</span>
        </div>
      </div>

      <!-- Filter -->
      <div class="flex gap-8 mb-16 border-b border-[#e7e5e4] pb-4 overflow-x-auto">
        <button class="text-xs font-bold uppercase tracking-widest text-[#1c1917] border-b-2 border-[#1c1917] pb-4">All</button>
        <button class="text-xs font-bold uppercase tracking-widest text-[#78716c] hover:text-[#D97706] transition-colors pb-4">AI Models</button>
        <button class="text-xs font-bold uppercase tracking-widest text-[#78716c] hover:text-[#D97706] transition-colors pb-4">Interfaces</button>
        <button class="text-xs font-bold uppercase tracking-widest text-[#78716c] hover:text-[#D97706] transition-colors pb-4">Systems</button>
      </div>

      <div class="space-y-32">
        @for (project of projects(); track project.id; let i = $index) {
          <div class="group grid md:grid-cols-2 gap-12 items-center">
            
            <!-- Image Side -->
            <a [routerLink]="['/work', project.id]" [class.order-last]="i % 2 !== 0" class="block relative overflow-hidden aspect-video shadow-2xl shadow-[#e7e5e4] cursor-pointer">
               <div class="absolute inset-0 bg-[#1c1917]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
               <img [ngSrc]="project.image" width="800" height="600" class="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-out" [alt]="project.title">
            </a>

            <!-- Text Side -->
            <div class="relative">
               <span class="text-9xl font-serif font-bold text-[#f5f5f4] absolute -top-20 -left-10 -z-10 select-none">{{i + 1}}</span>
               
               <div class="mb-4 flex items-center gap-4">
                  <div class="h-[1px] w-8 bg-[#D97706]"></div>
                  <span class="text-xs font-bold uppercase tracking-widest text-[#D97706]">{{project.category}}</span>
               </div>
               
               <h2 class="text-4xl font-serif font-bold text-[#1c1917] mb-6 group-hover:translate-x-2 transition-transform duration-300">
                 <a [routerLink]="['/work', project.id]" class="hover:text-[#57534e] transition-colors">{{project.title}}</a>
               </h2>
               <p class="text-[#57534e] font-light leading-relaxed mb-8 max-w-md">
                 {{project.description}}
               </p>
               
               <a [routerLink]="['/work', project.id]" class="text-sm font-bold uppercase tracking-widest text-[#1c1917] hover:text-[#D97706] transition-colors flex items-center gap-2 cursor-pointer">
                 View Case Study
                 <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
               </a>
            </div>
            
          </div>
        }
      </div>
    </section>
  `
})
export class PortfolioComponent {
  private cs = inject(ContentService);
  projects = this.cs.projects;
}