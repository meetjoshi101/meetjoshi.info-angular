import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <!-- Hero / Statement -->
    <section class="min-h-[85vh] flex flex-col justify-center mb-24 animate-fade-in-up">
      <div class="relative mb-16">
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-[#43302b] leading-[0.9] tracking-tighter relative z-20">
          Artificial <br>
          <span class="italic text-[#e67e22] ml-12 md:ml-32">Visionary</span>
        </h1>
        
        <!-- Decorative subtle background element -->
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#e67e22]/10 rounded-full blur-3xl opacity-50 -z-10"></div>
      </div>

      <div class="grid md:grid-cols-12 gap-12 items-start">
        <!-- Description & CTA -->
        <div class="md:col-span-6 lg:col-span-5 relative z-10 pt-4">
           <div class="border-l-2 border-[#e67e22] pl-8">
             <p class="text-lg md:text-xl text-[#8c7b75] font-light leading-relaxed mb-8">
               Crafting the cognitive architecture of tomorrow. I bridge the gap between human intuition and machine intelligence, building systems that don't just calculate, but <span class="text-[#43302b] font-medium">comprehend</span>.
             </p>
             <div class="flex gap-6 items-center">
               <!-- Added CTA (CAT) Button -->
               <a routerLink="/contact" class="px-7 py-3 bg-[#e67e22] text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-[#d35400] transition-colors shadow-lg shadow-orange-200">
                  Start a Project
               </a>

               <a routerLink="/work" class="group flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#43302b] hover:text-[#e67e22] transition-colors">
                 Selected Works
                 <span class="w-8 h-[1px] bg-[#43302b] group-hover:bg-[#e67e22] transition-colors"></span>
               </a>
             </div>
           </div>
        </div>

        <!-- Abstract Image -->
        <div class="md:col-span-6 lg:col-span-6 md:col-start-7 lg:col-start-7 relative">
            <div class="aspect-[4/3] overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700">
              <img ngSrc="https://picsum.photos/800/600" priority width="800" height="600" class="object-cover w-full h-full" alt="Abstract Architecture">
            </div>
            <div class="absolute -bottom-6 -left-6 w-full h-full border border-[#e5e0d8] -z-10 hidden md:block"></div>
        </div>
      </div>
    </section>

    <!-- Featured Work (Asymmetrical) -->
    <section class="mb-32">
      <div class="flex items-end justify-between mb-16 border-b border-[#e5e0d8] pb-6">
        <h2 class="text-xs font-bold text-[#8c7b75] uppercase tracking-[0.3em]">Featured Projects</h2>
        <a routerLink="/work" class="text-xs font-serif italic text-[#8c7b75] hover:text-[#e67e22]">View all</a>
      </div>

      <div class="grid md:grid-cols-2 gap-12 lg:gap-24">
        @for (project of featuredProjects(); track project.id; let i = $index) {
          <div class="group cursor-pointer" [class.md:mt-24]="i % 2 !== 0">
            <div class="relative overflow-hidden aspect-[3/4] mb-6">
               <img [ngSrc]="project.image" width="800" height="1000" class="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105" [alt]="project.title">
               
               <!-- Overlay Info -->
               <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#43302b]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  <span class="text-[#e67e22] text-xs font-bold uppercase tracking-widest mb-2 block">{{project.category}}</span>
                  <p class="text-white font-light text-sm">{{project.description}}</p>
               </div>
            </div>
            
            <h3 class="text-3xl font-serif font-bold text-[#43302b] group-hover:text-[#e67e22] transition-colors mb-2">{{project.title}}</h3>
            <div class="h-[1px] w-12 bg-[#d6d3cd] group-hover:w-full transition-all duration-700 ease-out"></div>
          </div>
        }
      </div>
    </section>

    <!-- Capabilities / Services -->
    <section class="bg-[#f0ede6] -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 py-24 mb-24 relative overflow-hidden">
       <!-- Abstract BG Element -->
       <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

       <div class="grid md:grid-cols-2 gap-16">
          <div>
            <h2 class="text-5xl font-serif font-bold text-[#43302b] mb-8 leading-tight">
              Engineering <br>
              <span class="italic text-[#8c7b75]">Intelligence.</span>
            </h2>
            <p class="text-[#8c7b75] leading-relaxed max-w-md">
              My approach combines rigorous software engineering with experimental AI research. I don't just use APIs; I design the systems that power them.
            </p>
          </div>
          
          <div class="grid gap-8">
             <div class="border-t border-[#d6d3cd] pt-6">
                <h4 class="text-xl font-bold text-[#43302b] mb-2">Generative UI Systems</h4>
                <p class="text-sm text-[#8c7b75]">Dynamic interfaces that adapt to user intent in real-time.</p>
             </div>
             <div class="border-t border-[#d6d3cd] pt-6">
                <h4 class="text-xl font-bold text-[#43302b] mb-2">LLM Architecture</h4>
                <p class="text-sm text-[#8c7b75]">Fine-tuning and RAG implementation for enterprise knowledge bases.</p>
             </div>
             <div class="border-t border-[#d6d3cd] pt-6">
                <h4 class="text-xl font-bold text-[#43302b] mb-2">Strategic Leadership</h4>
                <p class="text-sm text-[#8c7b75]">Guiding teams through the chaotic landscape of rapid AI advancement.</p>
             </div>
          </div>
       </div>
    </section>
  `
})
export class HomeComponent {
  private cs = inject(ContentService);
  featuredProjects = this.cs.featuredProjects;
}