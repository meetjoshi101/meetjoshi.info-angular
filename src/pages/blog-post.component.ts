import { Component, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentService, BlogPost } from '../services/content.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <article class="animate-fade-in-up pb-32">
      @if (post(); as p) {
        
        <!-- Back Navigation -->
        <div class="mb-12 md:mb-16">
          <a routerLink="/blog" class="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#a8a29e] hover:text-[#D97706] transition-colors">
            <span class="text-lg leading-none">←</span> Journal
          </a>
        </div>

        <!-- Header -->
        <header class="max-w-3xl mx-auto mb-16">
           <div class="flex items-center gap-3 mb-6">
              <span class="px-3 py-1 bg-[#FFFBEB] text-[#92400E] font-mono text-[10px] font-bold uppercase tracking-widest rounded-full">{{p.category}}</span>
              <span class="text-[#d6d3d1]">•</span>
              <span class="font-serif italic text-[#78716c]">{{p.date}}</span>
           </div>
           
           <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1c1917] mb-8 leading-[1.1]">
              {{p.title}}
           </h1>
           
           <div class="flex items-center justify-between border-t border-b border-[#e7e5e4] py-6 mt-12">
              <div class="flex items-center gap-3">
                 <div class="w-10 h-10 bg-[#1c1917] rounded-full flex items-center justify-center text-white font-serif italic font-bold text-sm">M</div>
                 <div>
                    <div class="text-xs font-bold text-[#1c1917]">Meet Joshi</div>
                    <div class="text-[10px] text-[#a8a29e] uppercase tracking-widest">{{p.readTime}} read</div>
                 </div>
              </div>
              <div class="flex gap-4">
                 <button class="text-[#a8a29e] hover:text-[#1c1917] transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg></button>
              </div>
           </div>
        </header>

        <!-- Cover Image (Optional) -->
        @if (p.image) {
           <div class="w-full aspect-[21/9] bg-[#f5f5f4] mb-20 overflow-hidden relative rounded-sm">
               <img [ngSrc]="p.image" fill priority class="object-cover" [alt]="p.title">
           </div>
        }

        <!-- Content -->
        <div class="max-w-3xl mx-auto">
           @if (p.blocks) {
             @for (block of p.blocks; track $index) {
                
                @if (block.type === 'p') {
                   <p class="font-serif text-xl text-[#292524] leading-[1.8] mb-8">
                      {{block.content}}
                   </p>
                }

                @if (block.type === 'h2') {
                   <h2 class="font-serif text-3xl font-bold text-[#1c1917] mt-16 mb-6">
                      {{block.content}}
                   </h2>
                }

                @if (block.type === 'image') {
                   <figure class="my-12 -mx-6 md:-mx-12">
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
                   <blockquote class="my-12 pl-6 border-l-4 border-[#D97706]">
                      <p class="font-serif text-2xl md:text-3xl italic text-[#1c1917] leading-relaxed">
                         "{{block.content}}"
                      </p>
                   </blockquote>
                }
                
                @if (block.type === 'code') {
                   <div class="my-8 bg-[#1c1917] text-[#d6d3d1] p-6 rounded-lg font-mono text-sm overflow-x-auto shadow-xl">
                      <pre><code>{{block.content}}</code></pre>
                   </div>
                }
             }
           } @else {
             <!-- Fallback for legacy text -->
             <p class="font-serif text-xl text-[#292524] leading-[1.8]">{{p.content}}</p>
           }
        </div>

        <!-- Footer -->
        <div class="max-w-3xl mx-auto mt-24 pt-12 border-t border-[#e7e5e4]">
           <h4 class="font-mono text-xs font-bold uppercase tracking-widest text-[#a8a29e] mb-6">Written By</h4>
           <div class="flex items-start gap-6">
              <div class="w-16 h-16 bg-[#1c1917] rounded-full flex-shrink-0 flex items-center justify-center text-white font-serif text-2xl italic">M</div>
              <div>
                 <h3 class="font-serif text-xl font-bold text-[#1c1917] mb-2">Meet Joshi</h3>
                 <p class="text-[#57534e] font-light leading-relaxed">
                    Senior Full Stack Engineer & Digital Creative. Writing about the intersection of design, code, and artificial intelligence.
                 </p>
              </div>
           </div>
        </div>

      } @else {
        <div class="py-32 text-center">
           <p class="font-serif text-2xl text-[#a8a29e]">Article not found.</p>
           <a routerLink="/blog" class="inline-block mt-4 text-[#D97706] hover:underline">Return to Journal</a>
        </div>
      }
    </article>
  `
})
export class BlogPostComponent {
  private route = inject(ActivatedRoute);
  private cs = inject(ContentService);
  
  post = signal<BlogPost | undefined>(undefined);

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.post.set(this.cs.getBlogById(id));
      }
    });
  }
}