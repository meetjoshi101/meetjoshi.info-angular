import { Component, signal, inject, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../services/gemini.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="animate-fade-in-up">
      <div class="mb-16">
        <h1 class="text-4xl md:text-5xl font-serif font-bold text-[#1c1917] mb-4">Get in Touch</h1>
        <p class="text-[#57534e] font-light max-w-lg">I'm currently available for freelance work. If you have a project that needs some creative injection, say hello.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16">
        
        <!-- Info & Form -->
        <div>
           <form class="space-y-8">
             <div class="group">
               <label class="block text-xs font-bold uppercase tracking-widest text-[#78716c] mb-2">Name</label>
               <input type="text" class="w-full bg-transparent border-b border-[#e7e5e4] py-2 text-[#1c1917] focus:outline-none focus:border-[#D97706] transition-colors text-lg font-serif placeholder-[#d6d3d1]">
             </div>
             
             <div class="group">
               <label class="block text-xs font-bold uppercase tracking-widest text-[#78716c] mb-2">Email</label>
               <input type="email" class="w-full bg-transparent border-b border-[#e7e5e4] py-2 text-[#1c1917] focus:outline-none focus:border-[#D97706] transition-colors text-lg font-serif placeholder-[#d6d3d1]">
             </div>
             
             <div class="group">
               <label class="block text-xs font-bold uppercase tracking-widest text-[#78716c] mb-2">Message</label>
               <textarea rows="4" class="w-full bg-transparent border-b border-[#e7e5e4] py-2 text-[#1c1917] focus:outline-none focus:border-[#D97706] transition-colors text-lg font-serif resize-none placeholder-[#d6d3d1]"></textarea>
             </div>
             
             <button class="px-10 py-4 bg-[#1c1917] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#F59E0B] transition-colors duration-300">
               Send Message
             </button>
           </form>
           
           <div class="mt-16 pt-10 border-t border-[#e7e5e4]">
             <div class="grid grid-cols-2 gap-8">
                <div>
                   <h5 class="font-serif font-bold text-[#1c1917] mb-2">Contact</h5>
                   <p class="text-sm text-[#78716c] font-light">meet.joshi&#64;example.com</p>
                   <p class="text-sm text-[#78716c] font-light">+1 (555) 123-4567</p>
                </div>
                <div>
                   <h5 class="font-serif font-bold text-[#1c1917] mb-2">Social</h5>
                   <div class="flex gap-4">
                     <a href="#" class="text-xs font-bold uppercase tracking-wider text-[#78716c] hover:text-[#D97706] transition-colors">LinkedIn</a>
                     <a href="#" class="text-xs font-bold uppercase tracking-wider text-[#78716c] hover:text-[#D97706] transition-colors">GitHub</a>
                   </div>
                </div>
             </div>
           </div>
        </div>

        <!-- AI Chat -->
        <div class="flex flex-col h-[600px] bg-[#FDFBF6] border border-[#e7e5e4] rounded-none overflow-hidden">
           <div class="bg-white p-6 border-b border-[#e7e5e4] flex items-center justify-between">
              <div>
                 <h3 class="font-serif font-bold text-[#1c1917]">Ask My AI</h3>
                 <p class="text-[10px] text-[#a8a29e] uppercase tracking-widest">Powered by Gemini</p>
              </div>
              <div class="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></div>
           </div>

           <!-- Chat Area -->
           <div class="flex-1 overflow-y-auto p-6 space-y-6" #chatContainer>
              @for (msg of messages(); track $index) {
                <div class="flex" [class.justify-end]="msg.sender === 'user'">
                   <div class="max-w-[85%] text-sm leading-relaxed"
                     [class.bg-[#D97706]]="msg.sender === 'user'"
                     [class.text-white]="msg.sender === 'user'"
                     [class.p-4]="msg.sender === 'user'"
                     
                     [class.text-[#1c1917]]="msg.sender === 'ai'"
                     [class.font-light]="msg.sender === 'ai'">
                     {{msg.text}}
                   </div>
                </div>
              }
              @if (isLoading()) {
                 <div class="flex justify-start">
                    <div class="flex gap-1 text-[#D97706]">
                      <span class="animate-bounce">.</span><span class="animate-bounce" style="animation-delay: 0.1s">.</span><span class="animate-bounce" style="animation-delay: 0.2s">.</span>
                    </div>
                 </div>
              }
           </div>

           <!-- Input Area -->
           <div class="p-4 bg-white border-t border-[#e7e5e4]">
              <div class="relative">
                 <input 
                   type="text" 
                   [(ngModel)]="currentMessage"
                   (keydown.enter)="sendMessage()"
                   placeholder="Ask about my experience..." 
                   class="w-full bg-transparent border-b border-[#e7e5e4] pr-12 py-3 text-[#1c1917] text-sm focus:outline-none focus:border-[#D97706] transition-colors placeholder:text-[#d6d3d1]"
                 >
                 <button 
                   (click)="sendMessage()"
                   [disabled]="isLoading() || !currentMessage.trim()"
                   class="absolute right-0 top-1/2 -translate-y-1/2 text-[#a8a29e] hover:text-[#D97706] disabled:opacity-30 transition-colors">
                   <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  `
})
export class ContactComponent implements AfterViewChecked {
  private geminiService = inject(GeminiService);
  @ViewChild('chatContainer') chatContainer!: ElementRef;
  
  messages = signal<{sender: 'user'|'ai', text: string}[]>([
    { sender: 'ai', text: "Hello! I am Meet's virtual assistant. I can answer questions about his work history, technical skills, and availability." }
  ]);
  
  currentMessage = '';
  isLoading = signal(false);

  async sendMessage() {
    if (!this.currentMessage.trim() || this.isLoading()) return;

    const userText = this.currentMessage;
    this.currentMessage = '';
    
    this.messages.update(msgs => [...msgs, { sender: 'user', text: userText }]);
    this.isLoading.set(true);

    try {
      const response = await this.geminiService.sendMessage(userText);
      this.messages.update(msgs => [...msgs, { sender: 'ai', text: response }]);
    } catch (err) {
      this.messages.update(msgs => [...msgs, { sender: 'ai', text: "I apologize, but I'm having trouble connecting right now." }]);
    } finally {
      this.isLoading.set(false);
    }
  }

  ngAfterViewChecked() {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }
}