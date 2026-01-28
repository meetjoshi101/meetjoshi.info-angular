import { Component, inject } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  template: `
    <section class="animate-fade-in-up">
      <div class="max-w-4xl mx-auto text-center mb-24">
        <h1 class="text-5xl md:text-7xl font-serif font-bold text-[#43302b] mb-8">The Journal</h1>
        <p class="text-lg text-[#8c7b75] font-light italic">"Intelligence is the ability to adapt to change." — Stephen Hawking</p>
      </div>

      <div class="max-w-3xl mx-auto border-t border-[#e5e0d8]">
        @for (post of blogs(); track post.id) {
          <article class="group py-16 border-b border-[#e5e0d8] hover:bg-[#f0ede6] -mx-6 px-6 transition-colors cursor-pointer">
             <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
               <div class="flex items-center gap-3">
                 <span class="text-xs font-bold uppercase tracking-widest text-[#e67e22]">{{post.category}}</span>
                 <span class="text-[#d6d3cd]">/</span>
                 <span class="text-xs font-bold text-[#8c7b75] uppercase tracking-widest">{{post.readTime}} read</span>
               </div>
               <span class="hidden md:block text-xs font-serif italic text-[#8c7b75]">{{post.date}}</span>
             </div>

             <h2 class="text-3xl font-serif font-bold text-[#43302b] mb-4 group-hover:text-[#e67e22] transition-colors">
               {{post.title}}
             </h2>
             
             <p class="text-[#8c7b75] font-light leading-relaxed mb-6">
               {{post.excerpt}}
             </p>

             <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#43302b] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Read Article <span class="text-[#e67e22]">→</span>
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