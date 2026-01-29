import { Component, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentService, Project } from '../services/content.service';

@Component({
  selector: 'app-full-case-study',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <article class="animate-fade-in-up pb-32">
      @if (project(); as p) {
        
        <!-- Navbar Minimal -->
        <div class="flex justify-between items-center mb-16 md:mb-24 border-b border-[#e7e5e4] pb-6">
           <a [routerLink]="['/work', p.id]" class="group flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-[#f5f5f4] flex items-center justify-center group-hover:bg-[#1c1917] group-hover:text-white transition-colors">
                 <span class="text-lg leading-none pb-1">←</span>
              </div>
              <div class="flex flex-col">
                 <span class="text-[10px] font-bold uppercase tracking-widest text-[#a8a29e] group-hover:text-[#1c1917] transition-colors">Back to Summary</span>
                 <span class="font-serif italic text-[#1c1917]">{{p.title}}</span>
              </div>
           </a>
           <div class="hidden md:flex gap-4">
              <button class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f5f5f4] transition-colors" title="Save">
                 <svg class="w-4 h-4 text-[#78716c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
              </button>
              <button class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f5f5f4] transition-colors" title="Share">
                 <svg class="w-4 h-4 text-[#78716c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
              </button>
           </div>
        </div>

        <!-- Article Header -->
        <header class="max-w-3xl mx-auto mb-16 text-center">
           <div class="mb-6 flex justify-center gap-2">
              <span class="px-3 py-1 bg-[#FFFBEB] text-[#92400E] font-mono text-[10px] font-bold uppercase tracking-widest rounded-full">{{p.category}}</span>
              <span class="px-3 py-1 bg-[#f5f5f4] text-[#78716c] font-mono text-[10px] font-bold uppercase tracking-widest rounded-full">{{p.year}}</span>
           </div>
           <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1c1917] mb-8 leading-[1.1]">
              {{p.title}}
           </h1>
           <p class="font-sans text-xl text-[#57534e] font-light leading-relaxed mb-8">
              {{p.description}}
           </p>
           
           <div class="flex items-center justify-center gap-3">
              <div class="w-10 h-10 bg-[#1c1917] rounded-full flex items-center justify-center text-white font-serif italic font-bold text-sm">M</div>
              <div class="text-left">
                 <div class="text-xs font-bold text-[#1c1917]">Meet Joshi</div>
                 <div class="text-[10px] text-[#a8a29e] uppercase tracking-widest">5 min read</div>
              </div>
           </div>
        </header>

        <!-- Main Content -->
        <div class="max-w-4xl mx-auto">
           @for (block of p.fullStory; track $index) {
              
              @if (block.type === 'p') {
                 <p class="font-serif text-lg md:text-xl text-[#292524] leading-[1.8] mb-8 max-w-2xl mx-auto">
                    {{block.content}}
                 </p>
              }

              @if (block.type === 'h2') {
                 <h2 class="font-serif text-3xl font-bold text-[#1c1917] mt-12 mb-6 max-w-2xl mx-auto relative">
                    <span class="absolute -left-8 top-1 hidden md:block text-[#D97706] text-lg">#</span>
                    {{block.content}}
                 </h2>
              }

              @if (block.type === 'image') {
                 <figure class="my-12 w-full">
                    <div class="relative aspect-video bg-[#f5f5f4] overflow-hidden rounded-sm">
                       <img [src]="block.content" class="object-cover w-full h-full" [alt]="block.caption">
                    </div>
                    @if (block.caption) {
                       <figcaption class="text-center mt-4 text-xs font-mono text-[#78716c] italic">
                          {{block.caption}}
                       </figcaption>
                    }
                 </figure>
              }

              @if (block.type === 'quote') {
                 <blockquote class="my-12 pl-6 border-l-4 border-[#D97706] max-w-3xl mx-auto">
                    <p class="font-serif text-2xl md:text-3xl italic text-[#1c1917] leading-relaxed">
                       "{{block.content}}"
                    </p>
                 </blockquote>
              }

              @if (block.type === 'code') {
                 <div class="my-8 max-w-3xl mx-auto bg-[#1c1917] text-[#d6d3d1] p-6 rounded-lg font-mono text-sm overflow-x-auto shadow-xl">
                    <div class="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                       <span class="text-xs uppercase tracking-widest text-[#FCD34D]">{{block.language}}</span>
                       <div class="flex gap-1.5">
                          <div class="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                          <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                          <div class="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                       </div>
                    </div>
                    <pre><code>{{block.content}}</code></pre>
                 </div>
              }

           }
        </div>

        <!-- Footer / Read More -->
        <div class="mt-24 pt-16 border-t border-[#e7e5e4] max-w-3xl mx-auto text-center">
           <div class="mb-8 text-4xl">👏</div>
           <h3 class="font-serif text-2xl font-bold text-[#1c1917] mb-4">Thanks for reading.</h3>
           <p class="text-[#57534e] mb-8">If you enjoyed this deep dive, check out my other work.</p>
           <a routerLink="/work" class="inline-block px-8 py-3 border border-[#1c1917] text-[#1c1917] hover:bg-[#1c1917] hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
              View Portfolio
           </a>
        </div>

      } @else {
        <div class="py-32 text-center">
           <p class="font-serif text-2xl text-[#a8a29e]">Story not found.</p>
           <a routerLink="/work" class="inline-block mt-4 text-[#D97706] hover:underline">Return to Portfolio</a>
        </div>
      }
    </article>
  `
})
export class FullCaseStudyComponent {
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