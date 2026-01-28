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
    <section class="min-h-[80vh] flex flex-col justify-center mb-24 animate-fade-in-up">
      <div class="relative">
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-stone-900 leading-[0.9] tracking-tighter mb-12">
          Artificial <br>
          <span class="italic text-[#c5a059] ml-12 md:ml-32">Visionary</span>
        </h1>
        
        <!-- Decorative Line -->
        <div class="absolute top-0 right-0 h-full w-[1px] bg-stone-200 hidden lg:block"></div>
        <div class="absolute top-1/2 right-0 w-32 h-[1px] bg-stone-200 hidden lg:block"></div>
      </div>

      <div class="grid md:grid-cols-12 gap-12 items-end">
        <div class="md:col-span-5 md:col-start-8">
           <p class="text-lg md:text-xl text-stone-500 font-light leading-relaxed mb-8">
             Crafting the cognitive architecture of tomorrow. I bridge the gap between human intuition and machine intelligence, building systems that don't just calculate, but <span class="text-stone-900 font-medium">comprehend</span>.
           </p>
           <div class="flex gap-6 items-center">
             <a routerLink="/work" class="group flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-stone-900 hover:text-[#c5a059] transition-colors">
               Selected Works
               <span class="w-8 h-[1px] bg-stone-900 group-hover:bg-[#c5a059] transition-colors"></span>
             </a>
           </div>
        </div>
      </div>
    </section>

    <!-- Featured Work (Asymmetrical) -->
    <section class="mb-32">
      <div class="flex items-end justify-between mb-16 border-b border-stone-200 pb-6">
        <h2 class="text-xs font-bold text-stone-400 uppercase tracking-[0.3em]">Featured Projects</h2>
        <a routerLink="/work" class="text-xs font-serif italic text-stone-500 hover:text-[#c5a059]">View all</a>
      </div>

      <div class="grid md:grid-cols-2 gap-12 lg:gap-24">
        @for (project of featuredProjects(); track project.id; let i = $index) {
          <div class="group cursor-pointer" [class.md:mt-24]="i % 2 !== 0">
            <div class="relative overflow-hidden aspect-[3/4] mb-6">
               <img [ngSrc]="project.image" width="800" height="1000" class="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105" [alt]="project.title">
               
               <!-- Overlay Info -->
               <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-stone-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  <span class="text-[#c5a059] text-xs font-bold uppercase tracking-widest mb-2 block">{{project.category}}</span>
                  <p class="text-white font-light text-sm">{{project.description}}</p>
               </div>
            </div>
            
            <h3 class="text-3xl font-serif font-bold text-stone-900 group-hover:text-[#c5a059] transition-colors mb-2">{{project.title}}</h3>
            <div class="h-[1px] w-12 bg-stone-300 group-hover:w-full transition-all duration-700 ease-out"></div>
          </div>
        }
      </div>
    </section>

    <!-- Capabilities / Services -->
    <section class="bg-stone-100 -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 py-24 mb-24 relative overflow-hidden">
       <!-- Abstract BG Element -->
       <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

       <div class="grid md:grid-cols-2 gap-16">
          <div>
            <h2 class="text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
              Engineering <br>
              <span class="italic text-stone-400">Intelligence.</span>
            </h2>
            <p class="text-stone-600 leading-relaxed max-w-md">
              My approach combines rigorous software engineering with experimental AI research. I don't just use APIs; I design the systems that power them.
            </p>
          </div>
          
          <div class="grid gap-8">
             <div class="border-t border-stone-300 pt-6">
                <h4 class="text-xl font-bold text-stone-900 mb-2">Generative UI Systems</h4>
                <p class="text-sm text-stone-500">Dynamic interfaces that adapt to user intent in real-time.</p>
             </div>
             <div class="border-t border-stone-300 pt-6">
                <h4 class="text-xl font-bold text-stone-900 mb-2">LLM Architecture</h4>
                <p class="text-sm text-stone-500">Fine-tuning and RAG implementation for enterprise knowledge bases.</p>
             </div>
             <div class="border-t border-stone-300 pt-6">
                <h4 class="text-xl font-bold text-stone-900 mb-2">Strategic Leadership</h4>
                <p class="text-sm text-stone-500">Guiding teams through the chaotic landscape of rapid AI advancement.</p>
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