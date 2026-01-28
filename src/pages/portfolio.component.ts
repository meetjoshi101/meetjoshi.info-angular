import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Project {
  title: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section class="animate-fade-in-up">
      <div class="mb-16">
        <h1 class="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Selected Works</h1>
        <p class="text-gray-500 font-light max-w-lg">A collection of projects exploring the intersection of design, technology, and user experience.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-x-10 gap-y-16">
        @for (project of projects; track project.title) {
          <div class="group cursor-pointer">
            <div class="overflow-hidden mb-6 bg-gray-100 relative aspect-[4/3]">
              <img [ngSrc]="project.image" width="600" height="450" class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" [alt]="project.title">
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
            <div class="flex justify-between items-baseline">
              <h3 class="text-xl font-serif font-bold text-slate-900 group-hover:text-[#c5a059] transition-colors duration-300">{{project.title}}</h3>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{{project.category}}</p>
            </div>
          </div>
        }
      </div>
      
      <div class="mt-24 text-center">
        <button class="px-10 py-4 border border-gray-200 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059] transition-all duration-300">
          Load More
        </button>
      </div>
    </section>
  `
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Minimalist Commerce',
      category: 'Web',
      image: 'https://picsum.photos/600/450?random=10'
    },
    {
      title: 'Financial Dashboard',
      category: 'Product',
      image: 'https://picsum.photos/600/450?random=11'
    },
    {
      title: 'Nomad Travel',
      category: 'App',
      image: 'https://picsum.photos/600/450?random=12'
    },
    {
      title: 'Architect Studio',
      category: 'Branding',
      image: 'https://picsum.photos/600/450?random=13'
    },
    {
      title: 'Vitality Health',
      category: 'PWA',
      image: 'https://picsum.photos/600/450?random=14'
    },
    {
      title: 'Urban Estate',
      category: 'Platform',
      image: 'https://picsum.photos/600/450?random=15'
    }
  ];
}
