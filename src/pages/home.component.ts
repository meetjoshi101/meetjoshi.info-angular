import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="mb-24 pt-8 animate-fade-in-up">
      <h1 class="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
        Building digital <br>
        <span class="italic text-[#c5a059]">experiences</span> that matter.
      </h1>
      <p class="text-lg text-gray-500 max-w-xl leading-relaxed mb-10 font-light">
        I am Alex, a Senior Full Stack Engineer. I blend technical expertise with design sensibility to create accessible, pixel-perfect web applications.
      </p>
      <div>
        <a routerLink="/work" class="inline-block border-b-2 border-slate-900 pb-1 text-sm font-bold uppercase tracking-widest hover:text-[#c5a059] hover:border-[#c5a059] transition-colors duration-300">
          View My Work
        </a>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="mb-24 animate-fade-in-up" style="animation-delay: 0.1s">
      <h2 class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-12 pl-2">Experience</h2>

      <div class="space-y-12 border-l border-gray-200 ml-2">
        @for (job of experience; track job.company) {
          <div class="relative pl-8 md:pl-12 group">
            <!-- Refined Timeline Dot -->
            <span class="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-white border-2 border-gray-300 group-hover:border-[#c5a059] group-hover:bg-[#c5a059] transition-all duration-300"></span>
            
            <div class="mb-2">
              <h3 class="text-xl font-serif font-bold text-slate-900 group-hover:text-[#c5a059] transition-colors">{{job.role}}</h3>
            </div>
            
            <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
               <span class="text-slate-700">{{job.company}}</span>
               <span>/</span>
               <span>{{job.period}}</span>
            </div>
            
            <p class="text-gray-500 leading-7 font-light mb-4 max-w-2xl">
              {{job.description}}
            </p>

            <div class="flex flex-wrap gap-x-4 gap-y-2">
              @for (tech of job.technologies; track tech) {
                <span class="text-[10px] font-semibold text-gray-400 border-b border-transparent hover:border-[#c5a059] hover:text-[#c5a059] cursor-default transition-all">
                  #{{tech}}
                </span>
              }
            </div>
          </div>
        }
      </div>
    </section>

    <!-- Skills Section -->
    <section class="mb-12 animate-fade-in-up" style="animation-delay: 0.2s">
      <h2 class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-12 pl-2">Expertise</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         <div class="group">
            <h4 class="font-serif font-bold text-xl text-slate-900 mb-4 group-hover:text-[#c5a059] transition-colors">Frontend</h4>
            <p class="text-sm text-gray-500 leading-relaxed font-light">Angular, React, TypeScript, Tailwind CSS, RxJS, Next.js</p>
         </div>
         <div class="group">
            <h4 class="font-serif font-bold text-xl text-slate-900 mb-4 group-hover:text-[#c5a059] transition-colors">Backend</h4>
            <p class="text-sm text-gray-500 leading-relaxed font-light">Node.js, NestJS, PostgreSQL, Redis, Docker, GraphQL</p>
         </div>
         <div class="group">
            <h4 class="font-serif font-bold text-xl text-slate-900 mb-4 group-hover:text-[#c5a059] transition-colors">Design</h4>
            <p class="text-sm text-gray-500 leading-relaxed font-light">Figma, Adobe XD, User Research, Design Systems</p>
         </div>
         <div class="group">
            <h4 class="font-serif font-bold text-xl text-slate-900 mb-4 group-hover:text-[#c5a059] transition-colors">Tools</h4>
            <p class="text-sm text-gray-500 leading-relaxed font-light">Git, AWS, CI/CD, Jira, Agile Methodology</p>
         </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  experience: Experience[] = [
    {
      role: 'Senior Full Stack Engineer',
      company: 'TechCorp Solutions',
      period: '2020 — Present',
      description: 'Leading the frontend architecture migration from legacy code to modern Angular. Improved application performance by 40% and established a company-wide design system used by 5 different teams.',
      technologies: ['Angular', 'RxJS', 'Node.js', 'NX Monorepo']
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Agency Inc',
      period: '2017 — 2020',
      description: 'Collaborated with designers to deliver pixel-perfect websites for high-profile clients including Nike and Spotify. Specialized in complex animations and interactive data visualizations.',
      technologies: ['React', 'D3.js', 'GSAP', 'WebGL']
    },
    {
      role: 'Junior Web Developer',
      company: 'StartupHub',
      period: '2015 — 2017',
      description: 'Worked in a fast-paced environment building MVPs for early-stage startups. Gained full-stack experience deploying apps to AWS and managing MongoDB databases.',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'AWS']
    }
  ];
}
