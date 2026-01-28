import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  template: `
    <section class="animate-fade-in-up">
      <div class="mb-16">
        <h1 class="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Journal</h1>
        <p class="text-gray-500 font-light max-w-lg">Thoughts on engineering, design patterns, and the future of web development.</p>
      </div>

      <div class="space-y-16 max-w-3xl">
        @for (post of posts; track post.id) {
          <article class="group cursor-pointer">
             <div class="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-3">
               <span class="text-xs font-bold text-[#c5a059] uppercase tracking-widest shrink-0 w-24">{{post.month}} {{post.day}}</span>
               <h2 class="text-2xl font-serif font-bold text-slate-900 group-hover:text-[#c5a059] transition-colors duration-300">
                 {{post.title}}
               </h2>
             </div>
             
             <div class="md:ml-32">
               <p class="text-gray-500 font-light leading-relaxed mb-4">
                 {{post.excerpt}}
               </p>
               <span class="inline-block text-[10px] font-bold uppercase tracking-widest border-b border-gray-300 pb-0.5 group-hover:border-[#c5a059] group-hover:text-[#c5a059] transition-colors">Read Article</span>
             </div>
          </article>
        }
      </div>
    </section>
  `
})
export class BlogComponent {
  posts = [
    {
      id: 1,
      title: 'The Future of Frontend with AI',
      day: '24',
      month: 'Oct',
      category: 'Technology',
      excerpt: 'How Large Language Models are changing the way we write code, debug, and architect modern web applications.'
    },
    {
      id: 2,
      title: 'Designing for Accessibility',
      day: '12',
      month: 'Sep',
      category: 'Design',
      excerpt: 'Accessibility is no longer optional. Here are the key patterns and tools I use to ensure my applications are usable by everyone.'
    },
    {
      id: 3,
      title: 'Why I Switched to Angular',
      day: '05',
      month: 'Aug',
      category: 'Engineering',
      excerpt: 'A retrospective on why Angulars strict structure and recent signal updates make it superior for enterprise scale applications.'
    }
  ];
}
