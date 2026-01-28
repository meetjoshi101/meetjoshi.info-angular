import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentService, Project, BlogPost } from '../../services/content.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-stone-100 flex font-sans text-stone-800">
      
      <!-- Sidebar -->
      <aside class="w-64 bg-stone-900 text-stone-300 flex flex-col fixed h-full z-10">
        <div class="p-8">
          <h1 class="font-serif text-2xl text-white italic">Admin<span class="text-[#c5a059]">.</span></h1>
        </div>
        <nav class="flex-1 px-4 space-y-2">
          <button (click)="activeTab.set('dashboard')" 
            [class.text-white]="activeTab() === 'dashboard'"
            [class.bg-white/10]="activeTab() === 'dashboard'"
            class="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            Dashboard
          </button>
          <button (click)="activeTab.set('projects')" 
            [class.text-white]="activeTab() === 'projects'"
            [class.bg-white/10]="activeTab() === 'projects'"
            class="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            Portfolio
          </button>
          <button (click)="activeTab.set('blogs')" 
            [class.text-white]="activeTab() === 'blogs'"
            [class.bg-white/10]="activeTab() === 'blogs'"
            class="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-3">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            Journal
          </button>
        </nav>
        <div class="p-8 text-xs text-stone-500 uppercase tracking-widest">
           v2.0.1 Stable
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 ml-64 p-12 overflow-y-auto">
        
        <!-- DASHBOARD VIEW -->
        @if (activeTab() === 'dashboard') {
          <div class="animate-fade-in-up">
            <h2 class="text-4xl font-serif font-bold mb-2">Welcome back, Alex.</h2>
            <p class="text-stone-500 mb-12">Here is what is happening with your digital presence.</p>

            <div class="grid grid-cols-3 gap-6 mb-12">
               <div class="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                  <div class="text-sm font-bold uppercase text-stone-400 tracking-wider mb-2">Total Projects</div>
                  <div class="text-4xl font-serif text-[#c5a059]">{{ contentService.projects().length }}</div>
               </div>
               <div class="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                  <div class="text-sm font-bold uppercase text-stone-400 tracking-wider mb-2">Published Articles</div>
                  <div class="text-4xl font-serif text-[#c5a059]">{{ contentService.blogs().length }}</div>
               </div>
               <div class="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                  <div class="text-sm font-bold uppercase text-stone-400 tracking-wider mb-2">Messages</div>
                  <div class="text-4xl font-serif text-stone-800">12</div>
               </div>
            </div>
            
            <div class="bg-[#c5a059]/10 p-8 rounded-2xl border border-[#c5a059]/20 flex justify-between items-center">
               <div>
                  <h3 class="font-bold text-lg text-[#94763e]">Quick Action</h3>
                  <p class="text-[#94763e]/80 text-sm">Update your resume context for the AI Assistant.</p>
               </div>
               <button class="px-6 py-2 bg-[#c5a059] text-white font-bold rounded-lg hover:bg-[#b08d4a] transition-colors">
                 Manage AI Context
               </button>
            </div>
          </div>
        }

        <!-- PROJECTS VIEW -->
        @if (activeTab() === 'projects') {
          <div class="animate-fade-in-up">
             <div class="flex justify-between items-end mb-8">
               <div>
                  <h2 class="text-3xl font-serif font-bold">Portfolio</h2>
                  <p class="text-stone-500 text-sm mt-1">Manage your visual works.</p>
               </div>
               <button (click)="isAddingProject.set(true)" class="px-6 py-3 bg-stone-900 text-white font-bold text-sm tracking-wide rounded-lg hover:bg-stone-700 transition-colors">
                 + New Project
               </button>
             </div>

             <!-- Add Project Form -->
             @if (isAddingProject()) {
               <div class="bg-white p-8 rounded-2xl border border-stone-200 shadow-lg mb-12 animate-fade-in-up">
                  <h3 class="font-bold text-lg mb-6">Create New Project</h3>
                  <div class="grid grid-cols-2 gap-6 mb-4">
                     <div class="flex flex-col gap-2">
                        <label class="text-xs font-bold uppercase text-stone-400">Title</label>
                        <input [(ngModel)]="newProject.title" type="text" class="bg-stone-50 border border-stone-200 rounded p-3 focus:outline-none focus:border-[#c5a059]">
                     </div>
                     <div class="flex flex-col gap-2">
                        <label class="text-xs font-bold uppercase text-stone-400">Category</label>
                        <input [(ngModel)]="newProject.category" type="text" class="bg-stone-50 border border-stone-200 rounded p-3 focus:outline-none focus:border-[#c5a059]">
                     </div>
                  </div>
                  <div class="flex flex-col gap-2 mb-4">
                      <label class="text-xs font-bold uppercase text-stone-400">Image URL</label>
                      <input [(ngModel)]="newProject.image" type="text" class="bg-stone-50 border border-stone-200 rounded p-3 focus:outline-none focus:border-[#c5a059]">
                  </div>
                  <div class="flex flex-col gap-2 mb-6">
                      <label class="text-xs font-bold uppercase text-stone-400">Description</label>
                      <textarea [(ngModel)]="newProject.description" rows="3" class="bg-stone-50 border border-stone-200 rounded p-3 focus:outline-none focus:border-[#c5a059]"></textarea>
                  </div>
                  <div class="flex justify-end gap-3">
                     <button (click)="isAddingProject.set(false)" class="px-4 py-2 text-stone-500 hover:text-stone-900 font-bold">Cancel</button>
                     <button (click)="createProject()" class="px-6 py-2 bg-[#c5a059] text-white font-bold rounded hover:bg-[#b08d4a]">Publish Work</button>
                  </div>
               </div>
             }

             <!-- List -->
             <div class="bg-white rounded-xl border border-stone-200 overflow-hidden">
                <table class="w-full">
                   <thead class="bg-stone-50 border-b border-stone-200">
                      <tr>
                         <th class="text-left py-4 px-6 text-xs font-bold uppercase text-stone-400">Project</th>
                         <th class="text-left py-4 px-6 text-xs font-bold uppercase text-stone-400">Category</th>
                         <th class="text-right py-4 px-6 text-xs font-bold uppercase text-stone-400">Actions</th>
                      </tr>
                   </thead>
                   <tbody class="divide-y divide-stone-100">
                      @for (p of contentService.projects(); track p.id) {
                         <tr class="hover:bg-stone-50 transition-colors group">
                            <td class="py-4 px-6">
                               <div class="flex items-center gap-4">
                                  <img [src]="p.image" class="w-10 h-10 rounded object-cover bg-stone-200">
                                  <span class="font-bold text-stone-800">{{p.title}}</span>
                               </div>
                            </td>
                            <td class="py-4 px-6 text-sm text-stone-500">{{p.category}}</td>
                            <td class="py-4 px-6 text-right">
                               <button (click)="contentService.deleteProject(p.id)" class="text-red-400 hover:text-red-600 text-sm font-bold px-3 py-1 rounded bg-red-50 hover:bg-red-100 transition-colors opacity-0 group-hover:opacity-100">Delete</button>
                            </td>
                         </tr>
                      }
                   </tbody>
                </table>
             </div>
          </div>
        }

        <!-- BLOGS VIEW -->
        @if (activeTab() === 'blogs') {
          <div class="animate-fade-in-up">
             <div class="flex justify-between items-end mb-8">
               <div>
                  <h2 class="text-3xl font-serif font-bold">Journal</h2>
                  <p class="text-stone-500 text-sm mt-1">Share your thoughts.</p>
               </div>
               <button (click)="isAddingBlog.set(true)" class="px-6 py-3 bg-stone-900 text-white font-bold text-sm tracking-wide rounded-lg hover:bg-stone-700 transition-colors">
                 + Write Article
               </button>
             </div>

             <!-- Add Blog Form -->
             @if (isAddingBlog()) {
               <div class="bg-white p-8 rounded-2xl border border-stone-200 shadow-lg mb-12 animate-fade-in-up">
                  <h3 class="font-bold text-lg mb-6">Write Article</h3>
                  <div class="grid grid-cols-2 gap-6 mb-4">
                     <div class="flex flex-col gap-2">
                        <label class="text-xs font-bold uppercase text-stone-400">Title</label>
                        <input [(ngModel)]="newBlog.title" type="text" class="bg-stone-50 border border-stone-200 rounded p-3 focus:outline-none focus:border-[#c5a059]">
                     </div>
                     <div class="flex flex-col gap-2">
                        <label class="text-xs font-bold uppercase text-stone-400">Category</label>
                        <input [(ngModel)]="newBlog.category" type="text" class="bg-stone-50 border border-stone-200 rounded p-3 focus:outline-none focus:border-[#c5a059]">
                     </div>
                  </div>
                  <div class="flex flex-col gap-2 mb-6">
                      <label class="text-xs font-bold uppercase text-stone-400">Excerpt</label>
                      <textarea [(ngModel)]="newBlog.excerpt" rows="3" class="bg-stone-50 border border-stone-200 rounded p-3 focus:outline-none focus:border-[#c5a059]"></textarea>
                  </div>
                  <div class="flex justify-end gap-3">
                     <button (click)="isAddingBlog.set(false)" class="px-4 py-2 text-stone-500 hover:text-stone-900 font-bold">Discard</button>
                     <button (click)="createBlog()" class="px-6 py-2 bg-[#c5a059] text-white font-bold rounded hover:bg-[#b08d4a]">Publish</button>
                  </div>
               </div>
             }

             <div class="grid gap-4">
               @for (b of contentService.blogs(); track b.id) {
                 <div class="bg-white p-6 rounded-xl border border-stone-200 flex justify-between items-center hover:shadow-md transition-shadow group">
                    <div>
                       <div class="flex items-center gap-3 mb-1">
                          <span class="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">{{b.category}}</span>
                          <span class="text-[10px] text-stone-300">•</span>
                          <span class="text-[10px] text-stone-400">{{b.date}}</span>
                       </div>
                       <h3 class="font-bold text-lg text-stone-800">{{b.title}}</h3>
                    </div>
                    <button (click)="contentService.deleteBlog(b.id)" class="text-red-400 hover:text-red-600 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                 </div>
               }
             </div>
          </div>
        }
      </main>
    </div>
  `
})
export class AdminComponent {
  contentService = inject(ContentService);
  
  activeTab = signal<'dashboard'|'projects'|'blogs'>('dashboard');
  
  // State for forms
  isAddingProject = signal(false);
  newProject: any = { title: '', category: '', description: '', image: '', featured: false };

  isAddingBlog = signal(false);
  newBlog: any = { title: '', category: '', excerpt: '', date: 'Today', readTime: '5 min' };

  createProject() {
    this.contentService.addProject(this.newProject);
    this.isAddingProject.set(false);
    this.newProject = { title: '', category: '', description: '', image: '', featured: false };
  }

  createBlog() {
    this.contentService.addBlog(this.newBlog);
    this.isAddingBlog.set(false);
    this.newBlog = { title: '', category: '', excerpt: '', date: 'Today', readTime: '5 min' };
  }
}