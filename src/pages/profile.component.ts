import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <div class="animate-fade-in-up">
      
      <!-- HERO SECTION -->
      <section class="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-32">
         <!-- Image -->
         <div class="lg:col-span-5 relative">
            <div class="aspect-[3/4] bg-[#f5f5f4] relative overflow-hidden rounded-sm">
               <img ngSrc="https://picsum.photos/600/800?random=50" width="600" height="800" priority class="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" alt="Portrait of Meet Joshi">
               
               <!-- Decorative frame -->
               <div class="absolute inset-4 border border-[#fff]/20"></div>
            </div>
            
            <!-- Floating Badge -->
            <div class="absolute -bottom-6 -right-6 bg-[#1c1917] text-[#FFFEFA] p-6 max-w-[200px] hidden md:block">
               <p class="font-serif italic text-lg leading-tight">"Code is poetry written for machines."</p>
            </div>
         </div>

         <!-- Intro Text -->
         <div class="lg:col-span-7 pt-8">
            <span class="block font-mono text-xs font-bold uppercase tracking-widest text-[#D97706] mb-6">The Architect</span>
            <h1 class="font-serif text-5xl md:text-7xl text-[#1c1917] mb-8 leading-[0.9]">
               Building digital <br> cathedrals.
            </h1>
            <div class="space-y-6 text-xl text-[#57534e] font-light leading-relaxed">
               <p>
                  I am <strong class="text-[#1c1917] font-medium">Meet Joshi</strong>, a Senior Full Stack Engineer based in the cloud. With over 8 years of experience, I specialize in dissecting complex problems and reassembling them into elegant, user-centric interfaces.
               </p>
               <p>
                  My philosophy is simple: tools should be invisible. The best software feels less like an application and more like an extension of the human mind. Whether it's a high-frequency trading dashboard or a generative AI art tool, my goal is to reduce cognitive load while maximizing capability.
               </p>
            </div>

            <div class="mt-12 flex gap-8 items-center border-t border-[#e7e5e4] pt-8">
               <div class="text-center">
                  <div class="font-serif text-3xl text-[#1c1917]">08<span class="text-[#D97706] text-lg">+</span></div>
                  <div class="text-[10px] uppercase tracking-widest text-[#a8a29e]">Years Exp.</div>
               </div>
               <div class="w-px h-12 bg-[#e7e5e4]"></div>
               <div class="text-center">
                  <div class="font-serif text-3xl text-[#1c1917]">45<span class="text-[#D97706] text-lg">+</span></div>
                  <div class="text-[10px] uppercase tracking-widest text-[#a8a29e]">Projects</div>
               </div>
               <div class="w-px h-12 bg-[#e7e5e4]"></div>
               <div class="text-center">
                  <div class="font-serif text-3xl text-[#1c1917]">10<span class="text-[#D97706] text-lg">k</span></div>
                  <div class="text-[10px] uppercase tracking-widest text-[#a8a29e]">Users Impacted</div>
               </div>
            </div>
         </div>
      </section>

      <!-- EXPERIENCE SECTION -->
      <section class="mb-32">
         <div class="flex items-center gap-4 mb-16">
            <div class="w-12 h-[1px] bg-[#1c1917]"></div>
            <h2 class="font-serif text-3xl italic text-[#1c1917]">Professional Timeline</h2>
         </div>

         <div class="relative border-l border-[#e7e5e4] ml-3 md:ml-0 space-y-16">
            @for (job of experience; track job.company) {
               <div class="relative pl-8 md:pl-12 grid md:grid-cols-12 gap-8 group">
                  <!-- Dot -->
                  <div class="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-[#D97706] rounded-full ring-4 ring-[#FFFEFA]"></div>
                  
                  <!-- Time & Role -->
                  <div class="md:col-span-4">
                     <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#a8a29e] mb-2 block">{{job.period}}</span>
                     <h3 class="font-serif text-2xl text-[#1c1917] font-bold">{{job.role}}</h3>
                     <div class="text-[#D97706] font-medium">{{job.company}}</div>
                  </div>

                  <!-- Description -->
                  <div class="md:col-span-8">
                     <p class="text-[#57534e] leading-relaxed mb-6">{{job.description}}</p>
                     <div class="flex flex-wrap gap-3">
                        @for (tech of job.stack; track tech) {
                           <span class="px-2 py-1 bg-[#FDFBF6] border border-[#e7e5e4] text-[10px] uppercase tracking-widest text-[#78716c]">{{tech}}</span>
                        }
                     </div>
                  </div>
               </div>
            }
         </div>
      </section>

      <!-- CAPABILITIES / STACK -->
      <section class="bg-[#1c1917] text-[#d6d3d1] -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24 py-24 mb-32">
         <div class="grid md:grid-cols-2 gap-16 lg:gap-32">
            <div>
               <h2 class="font-serif text-4xl text-white mb-8">Technical Arsenal</h2>
               <p class="font-light text-white/60 mb-12 leading-relaxed">
                  I don't just use frameworks; I understand them. My stack is chosen for performance, scalability, and maintainability. I advocate for strong typing, component-driven architecture, and automated testing pipelines.
               </p>
               <a routerLink="/contact" class="inline-block border-b border-[#D97706] pb-1 text-[#D97706] hover:text-white hover:border-white transition-colors">
                  Start a technical conversation →
               </a>
            </div>

            <div class="grid grid-cols-2 gap-y-12 gap-x-8">
               <div>
                  <h4 class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97706] mb-6">Frontend Core</h4>
                  <ul class="space-y-3 font-serif text-lg text-white/80">
                     <li>Angular (v16+)</li>
                     <li>React & Next.js</li>
                     <li>TypeScript</li>
                     <li>Tailwind CSS</li>
                     <li>RxJS / Signals</li>
                  </ul>
               </div>
               <div>
                  <h4 class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97706] mb-6">Backend & Cloud</h4>
                  <ul class="space-y-3 font-serif text-lg text-white/80">
                     <li>Node.js / NestJS</li>
                     <li>PostgreSQL / Prisma</li>
                     <li>Docker & K8s</li>
                     <li>AWS (Lambda, S3)</li>
                     <li>Google Cloud</li>
                  </ul>
               </div>
               <div>
                  <h4 class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97706] mb-6">AI & Data</h4>
                  <ul class="space-y-3 font-serif text-lg text-white/80">
                     <li>Gemini API</li>
                     <li>LangChain</li>
                     <li>Vector Databases</li>
                     <li>D3.js Visualization</li>
                  </ul>
               </div>
               <div>
                  <h4 class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97706] mb-6">Design</h4>
                  <ul class="space-y-3 font-serif text-lg text-white/80">
                     <li>Figma</li>
                     <li>Design Systems</li>
                     <li>Prototyping</li>
                     <li>Motion (GSAP)</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      <!-- SERVICES -->
      <section class="grid lg:grid-cols-3 gap-8 mb-20">
         <div class="bg-[#FDFBF6] p-8 border border-[#e7e5e4] hover:border-[#D97706] transition-colors group">
            <div class="w-12 h-12 bg-[#e7e5e4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D97706] transition-colors">
               <svg class="w-6 h-6 text-[#78716c] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#1c1917] mb-3">Engineering</h3>
            <p class="text-sm text-[#57534e] leading-relaxed">Full-cycle application development. From architectural planning to deployment, I build robust systems that scale.</p>
         </div>

         <div class="bg-[#FDFBF6] p-8 border border-[#e7e5e4] hover:border-[#D97706] transition-colors group">
            <div class="w-12 h-12 bg-[#e7e5e4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D97706] transition-colors">
               <svg class="w-6 h-6 text-[#78716c] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#1c1917] mb-3">UI/UX Design</h3>
            <p class="text-sm text-[#57534e] leading-relaxed">Translating requirements into visual languages. I create design systems that ensure consistency and accessibility.</p>
         </div>

         <div class="bg-[#FDFBF6] p-8 border border-[#e7e5e4] hover:border-[#D97706] transition-colors group">
            <div class="w-12 h-12 bg-[#e7e5e4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D97706] transition-colors">
               <svg class="w-6 h-6 text-[#78716c] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#1c1917] mb-3">AI Integration</h3>
            <p class="text-sm text-[#57534e] leading-relaxed">Embedding intelligence into applications. From RAG pipelines to custom LLM tuning for specific business needs.</p>
         </div>
      </section>

    </div>
  `
})
export class ProfileComponent {
  experience = [
    {
      company: 'TechCorp',
      role: 'Senior Full Stack Engineer',
      period: '2020 — Present',
      description: 'Leading a team of 5 engineers in rebuilding the core legacy platform. improved application performance by 40% through lazy loading and state management optimization. Introduced strict TypeScript standards and CI/CD pipelines.',
      stack: ['Angular', 'NestJS', 'AWS', 'Docker']
    },
    {
      company: 'StartUp Inc',
      role: 'Frontend Engineer',
      period: '2017 — 2020',
      description: 'Employee #3. Built the MVP for a fintech dashboard that secured Series A funding. Responsible for the entire frontend architecture and component library design.',
      stack: ['React', 'Redux', 'D3.js', 'Firebase']
    },
    {
      company: 'Freelance',
      role: 'Web Developer & Designer',
      period: '2016 — 2017',
      description: 'Worked with various clients to deliver bespoke websites and e-commerce solutions. Focused on responsive design and SEO optimization.',
      stack: ['WordPress', 'jQuery', 'SASS', 'PHP']
    }
  ];
}