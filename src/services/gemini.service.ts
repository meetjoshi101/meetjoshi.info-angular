import { Injectable } from '@angular/core';
import { GoogleGenAI, Chat } from '@google/genai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private ai: GoogleGenAI;
  private chatSession: Chat | null = null;

  // Hardcoded "Resume" context for the demo. In a real app, this could be loaded from JSON.
  private resumeContext = `
    You are an AI assistant representing a Senior Full Stack Engineer named "Meet Joshi".
    Your goal is to answer questions from potential recruiters or clients professionally and persuasively to get Meet hired.
    
    PROFILE:
    - 8+ years of experience in Web Development.
    - Expert in Angular, TypeScript, Tailwind CSS, and Node.js.
    - Passionate about Clean Architecture and UI/UX.
    
    EXPERIENCE:
    - Senior Engineer at TechCorp (2020-Present): Led a team of 5, improved app performance by 40%.
    - Frontend Dev at StartUp Inc (2017-2020): Built the main dashboard from scratch using Angular.
    
    PROJECTS:
    - "EcoTracker": A sustainability dashboard used by 10k users.
    - "FinDash": A real-time crypto analytics tool.
    
    SKILLS:
    - Frontend: Angular, React, Tailwind, RxJS.
    - Backend: NestJS, Express, PostgreSQL.
    - Tools: Docker, AWS, Git.
    
    CONTACT:
    - Email: meet@example.com
    - GitHub: github.com/meetjoshi
    
    Tone: Professional, confident, concise, and helpful. 
    If asked about something not in the resume, honestly say you don't have that specific info but emphasize related strong skills.
  `;

  constructor() {
    // Initialize Gemini client
    this.ai = new GoogleGenAI({ apiKey: process.env['API_KEY'] || '' });
    
    // Initialize chat immediately
    this.startNewChat();
  }

  startNewChat() {
    this.chatSession = this.ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: this.resumeContext,
        temperature: 0.7,
      }
    });
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.chatSession) {
      this.startNewChat();
    }
    
    try {
      const response = await this.chatSession!.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error('Gemini API Error:', error);
      return "I'm currently experiencing high traffic. Please try asking again in a moment.";
    }
  }
}