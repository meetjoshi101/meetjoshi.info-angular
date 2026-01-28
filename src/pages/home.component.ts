import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <!-- Vertical Rhythm: space-y-32 (128px) -->
    <div class="space-y-32 animate-fade-in-up">
      
      <!-- HERO SECTION -->
      <section>
        <!-- Badge -->
        <div class="mb-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFBEB] rounded-sm">
             <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
             <span class="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#92400E]">Available for hire</span>
          </div>
        </div>

        <!-- Headline -->
        <!-- Size: 60px(mobile) / 96px(tablet) / 128px(desktop) -->
        <h1 class="font-serif font-medium text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-[#292524] mb-12">
          <span class="block">Digital</span>
          <span class="block">
            <span class="italic text-[#a8a29e] font-normal">Creator</span> &
          </span>
          <span class="block">Problem Solver.</span>
        </h1>

        <!-- Divider Type A: Narrative Break -->
        <!-- Border-t gold-200, pt-10 -->
        <div class="border-t border-[#FDE68A] pt-10 max-w-4xl">
           <div class="grid md:grid-cols-12 gap-12 items-start">
              
              <!-- Intro Paragraph -->
              <div class="md:col-span-7">
                <p class="font-sans text-xl md:text-2xl font-light text-[#57534e] leading-[1.625]">
                  Hi, I’m <span class="font-medium text-[#1c1917]">Meet Joshi</span>. I craft high-performance digital experiences with a focus on soft aesthetics and robust architecture.
                </p>
              </div>

              <!-- CTA Buttons -->
              <div class="md:col-span-5 flex flex-col md:flex-row items-start md:items-center gap-8 justify-end pt-2">
                 <a routerLink="/contact" class="px-8 py-4 bg-[#FFFEFA] border border-[#1c1917] text-[#1c1917] hover:bg-[#1c1917] hover:text-white transition-colors duration-300 font-sans text-sm font-bold uppercase tracking-[0.1em]">
                   Start a Project
                 </a>
                 <a routerLink="/work" class="group flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-[0.1em] text-[#78716c] hover:text-[#1c1917] transition-colors">
                   View Work
                   <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                 </a>
              </div>
           </div>
        </div>
      </section>

      <!-- SELECTED WORKS GALLERY -->
      <section>
        <!-- Header -->
        <div class="flex items-end gap-8 mb-16">
           <!-- Section Title -->
           <h2 class="font-serif text-3xl md:text-4xl italic font-medium text-[#292524] flex-shrink-0">
             Selected Works
           </h2>
           
           <!-- Divider Type B: Flexible Connector -->
           <!-- Hidden on mobile, block desktop, gold-200 -->
           <div class="hidden md:block flex-1 h-px bg-[#FDE68A] mb-3"></div>
           
           <!-- Label -->
           <span class="font-mono text-xs text-[#a8a29e] uppercase tracking-widest mb-2 flex-shrink-0">
             Recent / 2024
           </span>
        </div>

        <!-- Project Grid -->
        <div class="grid md:grid-cols-2 gap-x-12 gap-y-20">
           @for (project of featuredProjects(); track project.id) {
              <div class="group cursor-pointer block">
                 <!-- Image -->
                 <div class="relative overflow-hidden aspect-[4/3] bg-[#f5f5f4] mb-6">
                    <div class="absolute inset-0 bg-[#1c1917]/0 group-hover:bg-[#1c1917]/5 transition-colors duration-500 z-10"></div>
                    <img [ngSrc]="project.image" width="800" height="600" [alt]="project.title" class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                 </div>
                 
                 <!-- Content -->
                 <div class="flex flex-col">
                    <h3 class="font-serif text-2xl font-medium text-[#292524] group-hover:text-[#57534e] transition-colors mb-4">
                      {{project.title}}
                    </h3>
                    
                    <!-- Divider Type D: Item Separator -->
                    <!-- Border-b stone-100, hover gold-300 -->
                    <div class="border-b border-[#f5f5f4] group-hover:border-[#FCD34D] pb-4 mb-4 transition-colors duration-300"></div>
                    
                    <div class="flex justify-between items-center">
                       <span class="font-sans text-sm text-[#78716c]">{{project.category}}</span>
                       <span class="font-mono text-xs text-[#a8a29e]">0{{$index + 1}}</span>
                    </div>
                 </div>
              </div>
           }
        </div>
        
        <div class="mt-16 text-center">
           <a routerLink="/work" class="inline-block border-b border-[#D97706] pb-1 text-[#D97706] font-serif italic text-lg hover:text-[#B45309] hover:border-[#B45309] transition-colors">
              View Complete Archive →
           </a>
        </div>
      </section>

      <!-- SKILLS SECTION -->
      <section>
         <!-- Divider Type C: Section Containment -->
         <!-- Border-y gold-100, py-16 -->
         <div class="border-y border-[#FEF3C7] py-16">
            <div class="grid md:grid-cols-4 gap-8">
               <div class="md:col-span-1">
                  <h4 class="font-mono text-xs font-bold uppercase tracking-widest text-[#a8a29e] mb-4">Core Competencies</h4>
               </div>
               <div class="md:col-span-3">
                  <div class="flex flex-wrap gap-x-12 gap-y-6">
                     @for (skill of skills; track skill) {
                       <span class="font-serif text-2xl md:text-3xl text-[#d6d3d1] hover:text-[#F59E0B] transition-colors cursor-default select-none">
                         {{skill}}
                       </span>
                     }
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- FOOTER -->
      <footer class="pb-16">
        <div class="grid md:grid-cols-2 gap-12">
           <div>
              <h4 class="font-serif text-2xl font-bold text-[#1c1917] mb-6">Let's build something specific.</h4>
              <a routerLink="/contact" class="inline-block text-[#D97706] font-serif text-lg italic hover:underline decoration-[#D97706] underline-offset-4">
                 Get in touch for collaboration →
              </a>
           </div>
           <div class="flex md:justify-end items-end">
              <p class="font-mono text-xs text-[#a8a29e]">
                 © 2024 Meet Joshi. Designed with intent.
              </p>
           </div>
        </div>
      </footer>

    </div>
  `
})
export class HomeComponent {
  private cs = inject(ContentService);
  featuredProjects = this.cs.featuredProjects;
  
  skills = [
    'Angular', 'TypeScript', 'Tailwind CSS', 'Node.js', 
    'UI Architecture', 'Design Systems', 'Gemini AI', 
    'Performance', 'Accessibility', 'Clean Code'
  ];
}