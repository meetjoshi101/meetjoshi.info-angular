import { Injectable, signal, computed } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Simplified for demo
  date: string;
  category: string;
  readTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  // Initial Mock Data
  private initialProjects: Project[] = [
    {
      id: '1',
      title: 'Neural Architecture',
      category: 'AI Model',
      image: 'https://picsum.photos/800/600?random=1',
      description: 'Designing the cognitive framework for next-gen LLMs.',
      featured: true
    },
    {
      id: '2',
      title: 'Silence & Noise',
      category: 'Audio UX',
      image: 'https://picsum.photos/800/600?random=2',
      description: 'A study in auditory interfaces for blind users.',
      featured: true
    },
    {
      id: '3',
      title: 'Data Sculptures',
      category: 'Visualization',
      image: 'https://picsum.photos/800/600?random=3',
      description: 'Transforming terabytes of raw data into physical 3D forms.',
      featured: false
    },
    {
      id: '4',
      title: 'FinTech Core',
      category: 'System Design',
      image: 'https://picsum.photos/800/600?random=4',
      description: 'High-frequency trading platform UI overhaul.',
      featured: false
    }
  ];

  private initialBlogs: BlogPost[] = [
    {
      id: '1',
      title: 'The Ethics of Synthetic Sentience',
      excerpt: 'As we approach AGI, we must redefine what it means to be a creator.',
      content: 'Full content would go here...',
      date: 'Oct 24',
      category: 'Philosophy',
      readTime: '5 min'
    },
    {
      id: '2',
      title: 'Beyond the Pixel',
      excerpt: 'Why the future of UI is not on a screen, but in the air around us.',
      content: 'Full content would go here...',
      date: 'Sep 12',
      category: 'Design',
      readTime: '3 min'
    }
  ];

  // Signals
  readonly projects = signal<Project[]>(this.initialProjects);
  readonly blogs = signal<BlogPost[]>(this.initialBlogs);

  // Computed
  readonly featuredProjects = computed(() => this.projects().filter(p => p.featured));

  // Actions
  addProject(project: Omit<Project, 'id'>) {
    const newProject = { ...project, id: crypto.randomUUID() };
    this.projects.update(list => [newProject, ...list]);
  }

  deleteProject(id: string) {
    this.projects.update(list => list.filter(p => p.id !== id));
  }

  addBlog(blog: Omit<BlogPost, 'id'>) {
    const newBlog = { ...blog, id: crypto.randomUUID() };
    this.blogs.update(list => [newBlog, ...list]);
  }

  deleteBlog(id: string) {
    this.blogs.update(list => list.filter(b => b.id !== id));
  }
}