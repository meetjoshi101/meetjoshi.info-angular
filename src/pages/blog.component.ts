import { Component, inject } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  template: `
    <section class="animate-fade-in-up">
      <div class="max-w-4xl mx-auto text-center mb-24">
        <h1 class="text-5xl md:text-7xl font-serif font-bold text-[#1c1917] mb-8">The Journal</h1>
        <p class="text-lg text-[#57534e] font-light italic">"Intelligence is the ability to adapt to change." — Stephen Hawking</p>
      </div>

      <div class="max-w-3xl mx-auto border-t border-[#e7e5e4]">
        @for (post of blogs(); track post.id) {
          <article class="group py-16 border-b border-[#e7e5e4] hover:bg-[#FDFBF6] -mx-6 px-6 transition-colors cursor-pointer">
             <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
               <div class="flex items-center gap-3">
                 <span class="text-xs font-bold uppercase tracking-widest text-[#D97706]">{{post.category}}</span>
                 <span class="text-[#d6d3d1]">/</span>
                 <span class="text-xs font-bold text-[#78716c] uppercase tracking-widest">{{post.readTime}} read</span>
               </div>
               <span class="hidden md:block text-xs font-serif italic text-[#a8a29e]">{{post.date}}</span>
             </div>

             <h2 class="text-3xl font-serif font-bold text-[#1c1917] mb-4 group-hover:text-[#D97706] transition-colors">
               {{post.title}}
             </h2>
             
             <p class="text-[#57534e] font-light leading-relaxed mb-6">
               {{post.excerpt}}
             </p>

             <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1c1917] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Read Article <span class="text-[#D97706]">→</span>
             </div>
          </article>
        }
      </div>
    </section>
  `
})
export class BlogComponent {
  private cs = inject(ContentService);
  blogs = this.cs.blogs;
}