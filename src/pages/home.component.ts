import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <!-- Vertical Rhythm: space-y-20 (mobile) / space-y-32 (desktop) -->
    <div class="space-y-20 md:space-y-32 animate-fade-in-up">
      
      <!-- HERO SECTION -->
      <section class="relative">
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
        <h1 class="font-serif font-medium text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-[#292524] mb-12 break-words relative z-10">
          <span class="block">Digital</span>
          <span class="block">
            <span class="italic text-[#a8a29e] font-normal">Creator</span> &
          </span>
          <span class="block">Problem Solver.</span>
        </h1>
        
        <!-- Desktop Infographic (Top Right) -->
        <div class="hidden xl:flex absolute top-0 right-0 w-[280px] flex-col gap-8 opacity-0 animate-fade-in-up" style="animation-delay: 0.5s; animation-fill-mode: forwards;">
           <!-- Abstract Radial Stat -->
           <div class="relative w-full aspect-square">
               <!-- Rings -->
               <div class="absolute inset-0 border border-[#e7e5e4] rounded-full"></div>
               <div class="absolute inset-4 border border-[#f5f5f4] rounded-full"></div>
               
               <!-- Animated Ring -->
               <div class="absolute inset-10 border border-[#FDE68A] rounded-full animate-[spin_10s_linear_infinite]">
                  <div class="absolute -top-1.5 left-1/2 w-3 h-3 bg-[#D97706] rounded-full -translate-x-1/2 border-2 border-[#FFFEFA]"></div>
               </div>
               
               <!-- Center Metric -->
               <div class="absolute inset-0 flex flex-col items-center justify-center bg-[#FFFEFA]/50 backdrop-blur-[2px] rounded-full m-16 border border-[#e7e5e4]">
                  <span class="font-serif text-4xl font-bold text-[#1c1917]">5<span class="text-[#D97706]">+</span></span>
                  <span class="font-mono text-[10px] text-[#78716c] uppercase tracking-widest mt-1">Years Exp.</span>
               </div>
               
               <!-- Orbital Labels -->
               <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-[#FFFEFA] px-2 z-10">
                  <span class="font-mono text-[10px] text-[#a8a29e] uppercase tracking-widest">Strategy</span>
               </div>
               <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 bg-[#FFFEFA] px-2 z-10">
                  <span class="font-mono text-[10px] text-[#a8a29e] uppercase tracking-widest">Execution</span>
               </div>
               <div class="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 bg-[#FFFEFA] px-2 z-10 -rotate-90 origin-center">
                  <span class="font-mono text-[10px] text-[#a8a29e] uppercase tracking-widest">Design</span>
               </div>
               <div class="absolute right-0 top-1/2 translate-x-3 -translate-y-1/2 bg-[#FFFEFA] px-2 z-10 rotate-90 origin-center">
                  <span class="font-mono text-[10px] text-[#a8a29e] uppercase tracking-widest">Code</span>
               </div>
           </div>
           
           <!-- Secondary Metrics -->
           <div class="grid grid-cols-2 gap-4 pt-6 border-t border-[#FDE68A]/50">
               <div>
                  <div class="font-serif text-2xl text-[#1c1917] mb-1">45<span class="text-sm align-top text-[#D97706]">+</span></div>
                  <div class="text-[10px] font-bold text-[#a8a29e] uppercase tracking-widest">Projects</div>
               </div>
               <div>
                  <div class="font-serif text-2xl text-[#1c1917] mb-1">100<span class="text-sm align-top text-[#D97706]">%</span></div>
                  <div class="text-[10px] font-bold text-[#a8a29e] uppercase tracking-widest">Delivered</div>
               </div>
           </div>
        </div>

        <!-- Divider Type A: Narrative Break -->
        <div class="border-t border-[#FDE68A] pt-10 w-full">
           <div class="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              
              <!-- Intro Paragraph -->
              <div class="md:col-span-7">
                <p class="font-sans text-xl md:text-2xl font-light text-[#57534e] leading-[1.625] max-w-3xl">
                  Hi, I’m <span class="font-medium text-[#1c1917]">Meet Joshi</span>. I craft high-performance digital experiences with a focus on soft aesthetics and robust architecture.
                </p>
              </div>

              <!-- CTA Buttons -->
              <div class="md:col-span-5 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 justify-start md:justify-end pt-2">
                 <a routerLink="/contact" class="px-8 py-4 bg-[#FFFEFA] border border-[#1c1917] text-[#1c1917] hover:bg-[#1c1917] hover:text-white transition-colors duration-300 font-sans text-sm font-bold uppercase tracking-[0.1em] w-full md:w-auto text-center">
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
        <div class="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-10 md:mb-16">
           <!-- Section Title -->
           <h2 class="font-serif text-3xl md:text-4xl italic font-medium text-[#292524] flex-shrink-0">
             Selected Works
           </h2>
           
           <!-- Divider Type B: Flexible Connector -->
           <div class="hidden md:block flex-1 h-px bg-[#FDE68A] mb-3"></div>
           
           <!-- Label -->
           <span class="font-mono text-xs text-[#a8a29e] uppercase tracking-widest mb-2 flex-shrink-0">
             Recent / 2024
           </span>
        </div>

        <!-- Project Grid -->
        <div class="grid md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-20">
           @for (project of featuredProjects(); track project.id) {
              <a [routerLink]="['/work', project.id]" class="group cursor-pointer block">
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
                    <div class="border-b border-[#f5f5f4] group-hover:border-[#FCD34D] pb-4 mb-4 transition-colors duration-300"></div>
                    
                    <div class="flex justify-between items-center">
                       <span class="font-sans text-sm text-[#78716c]">{{project.category}}</span>
                       <span class="font-mono text-xs text-[#a8a29e]">0{{$index + 1}}</span>
                    </div>
                 </div>
              </a>
           }
        </div>
        
        <div class="mt-12 md:mt-16 text-center">
           <a routerLink="/work" class="inline-block border-b border-[#D97706] pb-1 text-[#D97706] font-serif italic text-lg hover:text-[#B45309] hover:border-[#B45309] transition-colors">
              View Complete Archive →
           </a>
        </div>
      </section>

      <!-- CAPABILITIES SECTION (Redesigned & Responsive Fixed) -->
      <section>
         <div class="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <!-- Sticky Label -->
            <div class="lg:col-span-3">
               <div class="lg:sticky lg:top-32 mb-8 lg:mb-0">
                  <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#a8a29e] flex items-center gap-4">
                    <span class="w-8 h-[1px] bg-[#D97706]"></span>
                    Capabilities
                  </span>
               </div>
            </div>

            <!-- Content List -->
            <div class="lg:col-span-9">
               @for (cap of capabilities; track cap.id) {
                 <div class="group border-t border-[#e7e5e4] py-12 transition-all duration-500 hover:border-[#D97706]">
                    <!-- Updated Grid: Stacks on MD/LG, splits only on XL -->
                    <div class="grid xl:grid-cols-2 gap-8">
                       <!-- Title Side -->
                       <div class="relative">
                          <span class="block font-mono text-xs text-[#d6d3d1] mb-4 group-hover:text-[#D97706] transition-colors">{{cap.id}}</span>
                          <h3 class="font-serif text-4xl md:text-5xl text-[#1c1917] italic group-hover:translate-x-2 transition-transform duration-500">
                            {{cap.title}}
                          </h3>
                       </div>
                       
                       <!-- Description Side -->
                       <div class="pt-2">
                          <p class="font-sans font-light text-[#57534e] mb-8 leading-relaxed max-w-md">
                             {{cap.description}}
                          </p>
                          <div class="flex flex-wrap gap-x-3 gap-y-2 font-mono text-[10px] text-[#a8a29e] uppercase tracking-widest">
                             @for (skill of cap.skills; track skill; let last = $last) {
                               <span>{{skill}}</span>
                               @if (!last) { <span class="text-[#e7e5e4]">/</span> }
                             }
                          </div>
                       </div>
                    </div>
                 </div>
               }
               <!-- Closing Border -->
               <div class="w-full h-px bg-[#e7e5e4]"></div>
            </div>
         </div>
      </section>

      <!-- FOOTER -->
      <footer class="pb-16 pt-20">
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
  
  capabilities = [
    {
      id: '01',
      title: 'Engineering',
      description: 'Building resilient, scalable, and accessible applications. I treat code as a craft, focusing on performance budgets, type safety, and clean architectural patterns.',
      skills: ['Angular', 'TypeScript', 'Tailwind', 'Node.js', 'Performance']
    },
    {
      id: '02',
      title: 'Product Design',
      description: 'Bridging the gap between functional requirements and visual delight. I create design systems that ensure consistency while allowing for creative expression.',
      skills: ['UI Architecture', 'Design Systems', 'Figma', 'Prototyping', 'Animation']
    },
    {
      id: '03',
      title: 'AI Integration',
      description: 'Leveraging modern LLMs to create context-aware interfaces. I implement RAG pipelines and prompt engineering to build intelligent user experiences.',
      skills: ['Gemini API', 'RAG', 'Prompt Engineering', 'Vector Embeddings']
    }
  ];
}