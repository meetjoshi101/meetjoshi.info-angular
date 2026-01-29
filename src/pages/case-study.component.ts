import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ContentService, Project } from '../services/content.service';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <article class="animate-fade-in-up pb-20">
      
      <!-- Back Navigation -->
      <div class="mb-12 md:mb-20">
        <a routerLink="/work" class="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#a8a29e] hover:text-[#D97706] transition-colors">
          <span class="text-lg leading-none">←</span> Archive
        </a>
      </div>

      @if (project(); as p) {
        <!-- Header Section -->
        <header class="mb-16 md:mb-24">
          <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1c1917] mb-12 max-w-4xl leading-[0.9]">
            {{p.title}}
          </h1>

          <!-- Meta Grid -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#D97706] pt-6">
            <div>
              <span class="block font-mono text-[10px] text-[#a8a29e] uppercase tracking-widest mb-1">Client</span>
              <span class="font-serif text-lg text-[#1c1917]">{{p.client || 'Confidential'}}</span>
            </div>
            <div>
              <span class="block font-mono text-[10px] text-[#a8a29e] uppercase tracking-widest mb-1">Year</span>
              <span class="font-serif text-lg text-[#1c1917]">{{p.year || '2024'}}</span>
            </div>
            <div>
              <span class="block font-mono text-[10px] text-[#a8a29e] uppercase tracking-widest mb-1">Category</span>
              <span class="font-serif text-lg text-[#1c1917]">{{p.category}}</span>
            </div>
            <div>
              <span class="block font-mono text-[10px] text-[#a8a29e] uppercase tracking-widest mb-1">Role</span>
              <span class="font-serif text-lg text-[#1c1917]">Lead Engineer</span>
            </div>
          </div>
        </header>

        <!-- Hero Image -->
        <div class="w-full aspect-video bg-[#f5f5f4] mb-20 md:mb-32 overflow-hidden relative">
           <img [ngSrc]="p.image" fill priority [alt]="p.title" class="object-cover">
        </div>

        <!-- Content Section -->
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
           <!-- The Challenge -->
           <div class="lg:col-span-4">
              <h3 class="font-serif text-3xl text-[#1c1917] italic mb-6">The Challenge</h3>
              <div class="w-12 h-[2px] bg-[#D97706] mb-6"></div>
           </div>
           <div class="lg:col-span-8">
              <p class="font-sans text-xl font-light text-[#57534e] leading-relaxed mb-12">
                {{p.challenge || p.description}}
              </p>
           </div>

           <!-- The Solution -->
           <div class="lg:col-span-4">
              <h3 class="font-serif text-3xl text-[#1c1917] italic mb-6">The Solution</h3>
              <div class="w-12 h-[2px] bg-[#D97706] mb-6"></div>
           </div>
           <div class="lg:col-span-8">
              <p class="font-sans text-xl font-light text-[#57534e] leading-relaxed mb-12">
                {{p.solution || 'Detailed solution breakdown unavailable for this project preview.'}}
              </p>

              <!-- CTA to Full Story -->
              @if (p.fullStory) {
                 <div class="mt-8 p-6 bg-[#FFFBEB] border border-[#FDE68A] flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                       <h4 class="font-serif font-bold text-[#92400E] mb-1">Deep Dive Available</h4>
                       <p class="text-sm text-[#92400E]/80">Read the complete engineering story behind this project.</p>
                    </div>
                    <a [routerLink]="['/work', p.id, 'story']" class="px-6 py-3 bg-[#F59E0B] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#D97706] transition-colors text-center whitespace-nowrap">
                       Read Full Story
                    </a>
                 </div>
              }
           </div>
        </div>
        
        <!-- Tech Stack -->
        <div class="bg-[#FDFBF6] border border-[#e7e5e4] p-8 md:p-12 mb-32">
           <h4 class="font-mono text-xs font-bold uppercase tracking-widest text-[#a8a29e] mb-8">Technologies Used</h4>
           <div class="flex flex-wrap gap-4">
              @for (tech of (p.techStack || ['Angular', 'TypeScript', 'Tailwind']); track tech) {
                 <span class="px-4 py-2 bg-white border border-[#e7e5e4] text-[#57534e] font-serif italic text-lg">{{tech}}</span>
              }
           </div>
        </div>

        <!-- Next Project Navigation -->
        <div class="border-t border-[#e7e5e4] pt-20">
           <div class="flex justify-between items-center">
              <span class="font-mono text-xs text-[#a8a29e] uppercase tracking-widest">Next Project</span>
              <a routerLink="/work" class="font-serif text-3xl md:text-5xl text-[#1c1917] hover:text-[#D97706] transition-colors">
                 View All Works →
              </a>
           </div>
        </div>
      } @else {
        <div class="py-20 text-center">
           <p class="font-serif text-2xl text-[#a8a29e]">Project not found.</p>
           <a routerLink="/work" class="inline-block mt-4 text-[#D97706] hover:underline">Return to Portfolio</a>
        </div>
      }
    </article>
  `
})
export class CaseStudyComponent {
  private route = inject(ActivatedRoute);
  private cs = inject(ContentService);
  
  project = signal<Project | undefined>(undefined);

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.project.set(this.cs.getProjectById(id));
      }
    });
  }
}