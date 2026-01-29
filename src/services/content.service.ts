import { Injectable, signal, computed } from '@angular/core';

export interface ContentBlock {
  type: 'h2' | 'p' | 'image' | 'quote' | 'code';
  content: string;
  caption?: string;
  language?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  featured: boolean;
  // Extended details for Case Study Summary
  client?: string;
  year?: string;
  challenge?: string;
  solution?: string;
  techStack?: string[];
  // Rich Content for Full Case Study
  fullStory?: ContentBlock[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Legacy/Fallback
  blocks?: ContentBlock[]; // Rich content
  date: string;
  category: string;
  readTime: string;
  image?: string; // Cover image
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
      image: 'https://picsum.photos/800/1067?random=1',
      description: 'Designing the cognitive framework for next-gen LLMs.',
      featured: true,
      client: 'DeepMind Research',
      year: '2023',
      challenge: 'The client needed a way to visualize the decision-making pathways of a large language model in real-time, helping researchers identify hallucinations before they propagate to the output layer.',
      solution: 'We built a WebGL-based node graph visualizer that renders millions of parameters. Using a custom interaction layer, researchers can now "step into" the model and prune pathways manually.',
      techStack: ['Python', 'TensorFlow', 'Three.js', 'Angular'],
      fullStory: [
        { type: 'p', content: 'In the rapidly evolving landscape of Large Language Models (LLMs), one problem remains persistent: the "Black Box" paradox. We build models we cannot fully understand. DeepMind Research approached us with a unique proposition: create a visual interface that allows human researchers to walk inside the mind of an AI.' },
        { type: 'h2', content: 'The Scale of the Problem' },
        { type: 'p', content: 'Visualizing a neural network is simple when it has ten nodes. It is impossible when it has ten billion. Our first challenge was performance. How do you render a live data stream of millions of active parameters without crashing the browser?' },
        { type: 'image', content: 'https://picsum.photos/1200/600?random=101', caption: 'Early wireframes of the node pruning interface.' },
        { type: 'p', content: 'We opted for a custom WebGL renderer utilizing Three.js, bypassing the DOM entirely for the graph visualization. By implementing a custom level-of-detail (LOD) system, we only render the specific cluster of nodes the user is currently inspecting, while keeping the broader network as a low-poly nebula in the background.' },
        { type: 'quote', content: 'This tool didn’t just show us data; it showed us behavior. We saw the model "thinking" in real-time.' },
        { type: 'h2', content: 'Interaction Design' },
        { type: 'p', content: 'Data is useless if you cannot interact with it. We built a "surgical" mode where researchers can pause the model execution, highlight a specific pathway, and perform "lobotomies"—pruning specific connections to see how the output changes.' },
        { type: 'code', content: `// Simplified pruning logic
function prunePathway(nodeId: string, threshold: number) {
  const connections = graph.getConnections(nodeId);
  connections.forEach(conn => {
    if (conn.weight < threshold) {
      conn.disconnect();
      visualizer.animateDisconnect(conn);
    }
  });
}`, language: 'typescript' },
        { type: 'p', content: 'The result was a 40% reduction in hallucination rates during the testing phase, as researchers could visually identify and sever "confabulation loops" where the model began reinforcing its own errors.' }
      ]
    },
    {
      id: '2',
      title: 'Silence & Noise',
      category: 'Audio UX',
      image: 'https://picsum.photos/800/1067?random=2',
      description: 'A study in auditory interfaces for blind users.',
      featured: true,
      client: 'AccessForAll NGO',
      year: '2022',
      challenge: 'Traditional screen readers are linear and slow. The goal was to create a spatial audio interface that allows visually impaired users to scan a webpage layout instantly using 3D soundscapes.',
      solution: 'Implemented a spatial audio engine using the Web Audio API. Elements on the screen emit distinct frequencies based on their type (headers, buttons) and location, allowing users to build a mental map of the UI.',
      techStack: ['Web Audio API', 'React', 'Node.js'],
      fullStory: [
        { type: 'p', content: 'The web is a visual medium. For the 2.2 billion people with vision impairment, the web is a linear stream of spoken words. We wanted to change that paradigm by introducing spatiality.' },
        { type: 'h2', content: 'Sonic Topography' },
        { type: 'p', content: 'We mapped screen coordinates to a 3D audio environment. If a button is on the top-right of the screen, the sound comes from the top-right of your headphones.' }
      ]
    },
    {
      id: '3',
      title: 'Data Sculptures',
      category: 'Visualization',
      image: 'https://picsum.photos/800/600?random=3',
      description: 'Transforming terabytes of raw data into physical 3D forms.',
      featured: false,
      client: 'Museum of Modern Art',
      year: '2021',
      challenge: 'The museum wanted to represent climate change data not as a chart, but as a physical experience that visitors could walk through.',
      solution: 'We processed 50 years of climate data into a topological 3D mesh. This digital model was then sliced for CNC milling to create a 20-foot wooden installation where the "erosion" of the wood represented carbon emissions.',
      techStack: ['D3.js', 'Blender Python API', 'C++']
    },
    {
      id: '4',
      title: 'FinTech Core',
      category: 'System Design',
      image: 'https://picsum.photos/800/600?random=4',
      description: 'High-frequency trading platform UI overhaul.',
      featured: false,
      client: 'Nexus Capital',
      year: '2024',
      challenge: 'Traders were experiencing cognitive overload due to poor information hierarchy. Latency in the UI was also causing missed arbitrage opportunities.',
      solution: 'Redesigned the entire dashboard using a "dark cockpit" philosophy—only showing data when it deviates from the norm. Optimized the rendering loop to achieve sub-16ms updates for real-time tickers.',
      techStack: ['Angular', 'RxJS', 'WebSockets', 'Rust']
    }
  ];

  private initialBlogs: BlogPost[] = [
    {
      id: '1',
      title: 'The Ethics of Synthetic Sentience',
      excerpt: 'As we approach AGI, we must redefine what it means to be a creator. The line between tool and entity is blurring.',
      content: 'Legacy content...',
      image: 'https://picsum.photos/1200/600?random=201',
      date: 'Oct 24, 2024',
      category: 'Philosophy',
      readTime: '5 min',
      blocks: [
        { type: 'p', content: 'We are standing on the precipice of a new era. For centuries, humans have been the sole architects of intelligence on this planet. We built tools to amplify our physical strength—hammers, levers, engines. Now, we are building tools to amplify our cognitive capacity.' },
        { type: 'h2', content: 'The Creator\'s Dilemma' },
        { type: 'p', content: 'When you write code, you are defining rules. If X, then Y. It is deterministic. But when you train a model, you are not defining rules; you are defining an environment. You are a gardener, not an architect.' },
        { type: 'quote', content: 'We must stop thinking of AI as a calculator and start thinking of it as a collaborator.' },
        { type: 'p', content: 'This shift requires a fundamental change in how we approach design. We can no longer design for static outcomes. We must design for probabilities, for nuances, and for the unexpected.' },
        { type: 'image', content: 'https://picsum.photos/1200/600?random=202', caption: 'Visualizing neural pathways in a generative model.' },
        { type: 'p', content: 'As engineers, our responsibility is shifting from writing perfect code to curating perfect data. The code is the vessel; the data is the soul.' }
      ]
    },
    {
      id: '2',
      title: 'Beyond the Pixel',
      excerpt: 'Why the future of UI is not on a screen, but in the air around us. Spatial computing is changing everything.',
      content: 'Legacy content...',
      image: 'https://picsum.photos/1200/600?random=203',
      date: 'Sep 12, 2024',
      category: 'Design',
      readTime: '3 min',
      blocks: [
        { type: 'p', content: 'The pixel has served us well. It allowed us to map information onto a 2D plane. But the world is not 2D. We live in 3D space, yet we spend our lives staring at flat rectangles.' },
        { type: 'h2', content: 'Spatial Affordances' },
        { type: 'p', content: 'Apple Vision Pro and Meta Quest are just the beginning. The real revolution isn\'t the hardware; it\'s the interface paradigms. How do you design a button that feels "pressable" when it is made of light?' },
        { type: 'code', content: `.button-spatial {
  transform-style: preserve-3d;
  transition: transform 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  
  &:hover {
    transform: translateZ(10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  }
}`, language: 'css' },
        { type: 'p', content: 'We need to rediscover the physical properties of digital objects. Weight, friction, and elasticity must become part of the web developer\'s toolkit.' }
      ]
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
  
  getProjectById(id: string): Project | undefined {
    return this.projects().find(p => p.id === id);
  }

  getBlogById(id: string): BlogPost | undefined {
    return this.blogs().find(b => b.id === id);
  }
}