# Database Seed Script

**Project:** Portfolio & Journal  
**Target:** Supabase (PostgreSQL)

Run the following SQL script in the Supabase **SQL Editor** to populate your database with the initial content (Projects and Blog posts) matching the frontend design.

```sql
-- Clean existing data (Optional)
TRUNCATE TABLE projects RESTART IDENTITY CASCADE;
TRUNCATE TABLE blogs RESTART IDENTITY CASCADE;
TRUNCATE TABLE inquiries RESTART IDENTITY CASCADE;

-- --------------------------------------------------------
-- SEED: PROJECTS
-- --------------------------------------------------------

INSERT INTO projects (
  title, 
  category, 
  image, 
  description, 
  featured, 
  client, 
  year, 
  challenge, 
  solution, 
  tech_stack, 
  full_story
) VALUES 
(
  'Neural Architecture',
  'AI Model',
  'https://picsum.photos/800/1067?random=1',
  'Designing the cognitive framework for next-gen LLMs.',
  true,
  'DeepMind Research',
  '2023',
  'The client needed a way to visualize the decision-making pathways of a large language model in real-time, helping researchers identify hallucinations before they propagate to the output layer.',
  'We built a WebGL-based node graph visualizer that renders millions of parameters. Using a custom interaction layer, researchers can now "step into" the model and prune pathways manually.',
  ARRAY['Python', 'TensorFlow', 'Three.js', 'Angular'],
  $$[
    { "type": "p", "content": "In the rapidly evolving landscape of Large Language Models (LLMs), one problem remains persistent: the \"Black Box\" paradox. We build models we cannot fully understand. DeepMind Research approached us with a unique proposition: create a visual interface that allows human researchers to walk inside the mind of an AI." },
    { "type": "h2", "content": "The Scale of the Problem" },
    { "type": "p", "content": "Visualizing a neural network is simple when it has ten nodes. It is impossible when it has ten billion. Our first challenge was performance. How do you render a live data stream of millions of active parameters without crashing the browser?" },
    { "type": "image", "content": "https://picsum.photos/1200/600?random=101", "caption": "Early wireframes of the node pruning interface." },
    { "type": "p", "content": "We opted for a custom WebGL renderer utilizing Three.js, bypassing the DOM entirely for the graph visualization. By implementing a custom level-of-detail (LOD) system, we only render the specific cluster of nodes the user is currently inspecting, while keeping the broader network as a low-poly nebula in the background." },
    { "type": "quote", "content": "This tool didn’t just show us data; it showed us behavior. We saw the model \"thinking\" in real-time." },
    { "type": "h2", "content": "Interaction Design" },
    { "type": "p", "content": "Data is useless if you cannot interact with it. We built a \"surgical\" mode where researchers can pause the model execution, highlight a specific pathway, and perform \"lobotomies\"—pruning specific connections to see how the output changes." },
    { "type": "code", "language": "typescript", "content": "// Simplified pruning logic\nfunction prunePathway(nodeId: string, threshold: number) {\n  const connections = graph.getConnections(nodeId);\n  connections.forEach(conn => {\n    if (conn.weight < threshold) {\n      conn.disconnect();\n      visualizer.animateDisconnect(conn);\n    }\n  });\n}" },
    { "type": "p", "content": "The result was a 40% reduction in hallucination rates during the testing phase, as researchers could visually identify and sever \"confabulation loops\" where the model began reinforcing its own errors." }
  ]$$
),
(
  'Silence & Noise',
  'Audio UX',
  'https://picsum.photos/800/1067?random=2',
  'A study in auditory interfaces for blind users.',
  true,
  'AccessForAll NGO',
  '2022',
  'Traditional screen readers are linear and slow. The goal was to create a spatial audio interface that allows visually impaired users to scan a webpage layout instantly using 3D soundscapes.',
  'Implemented a spatial audio engine using the Web Audio API. Elements on the screen emit distinct frequencies based on their type (headers, buttons) and location, allowing users to build a mental map of the UI.',
  ARRAY['Web Audio API', 'React', 'Node.js'],
  $$[
    { "type": "p", "content": "The web is a visual medium. For the 2.2 billion people with vision impairment, the web is a linear stream of spoken words. We wanted to change that paradigm by introducing spatiality." },
    { "type": "h2", "content": "Sonic Topography" },
    { "type": "p", "content": "We mapped screen coordinates to a 3D audio environment. If a button is on the top-right of the screen, the sound comes from the top-right of your headphones." }
  ]$$
),
(
  'Data Sculptures',
  'Visualization',
  'https://picsum.photos/800/600?random=3',
  'Transforming terabytes of raw data into physical 3D forms.',
  false,
  'Museum of Modern Art',
  '2021',
  'The museum wanted to represent climate change data not as a chart, but as a physical experience that visitors could walk through.',
  'We processed 50 years of climate data into a topological 3D mesh. This digital model was then sliced for CNC milling to create a 20-foot wooden installation where the "erosion" of the wood represented carbon emissions.',
  ARRAY['D3.js', 'Blender Python API', 'C++'],
  NULL
),
(
  'FinTech Core',
  'System Design',
  'https://picsum.photos/800/600?random=4',
  'High-frequency trading platform UI overhaul.',
  false,
  'Nexus Capital',
  '2024',
  'Traders were experiencing cognitive overload due to poor information hierarchy. Latency in the UI was also causing missed arbitrage opportunities.',
  'Redesigned the entire dashboard using a "dark cockpit" philosophy—only showing data when it deviates from the norm. Optimized the rendering loop to achieve sub-16ms updates for real-time tickers.',
  ARRAY['Angular', 'RxJS', 'WebSockets', 'Rust'],
  NULL
);

-- --------------------------------------------------------
-- SEED: BLOGS
-- --------------------------------------------------------

INSERT INTO blogs (
  title, 
  excerpt, 
  published_date, 
  category, 
  read_time, 
  image, 
  blocks
) VALUES 
(
  'The Ethics of Synthetic Sentience',
  'As we approach AGI, we must redefine what it means to be a creator. The line between tool and entity is blurring.',
  '2024-10-24',
  'Philosophy',
  '5 min',
  'https://picsum.photos/1200/600?random=201',
  $$[
    { "type": "p", "content": "We are standing on the precipice of a new era. For centuries, humans have been the sole architects of intelligence on this planet. We built tools to amplify our physical strength—hammers, levers, engines. Now, we are building tools to amplify our cognitive capacity." },
    { "type": "h2", "content": "The Creator's Dilemma" },
    { "type": "p", "content": "When you write code, you are defining rules. If X, then Y. It is deterministic. But when you train a model, you are not defining rules; you are defining an environment. You are a gardener, not an architect." },
    { "type": "quote", "content": "We must stop thinking of AI as a calculator and start thinking of it as a collaborator." },
    { "type": "p", "content": "This shift requires a fundamental change in how we approach design. We can no longer design for static outcomes. We must design for probabilities, for nuances, and for the unexpected." },
    { "type": "image", "content": "https://picsum.photos/1200/600?random=202", "caption": "Visualizing neural pathways in a generative model." },
    { "type": "p", "content": "As engineers, our responsibility is shifting from writing perfect code to curating perfect data. The code is the vessel; the data is the soul." }
  ]$$
),
(
  'Beyond the Pixel',
  'Why the future of UI is not on a screen, but in the air around us. Spatial computing is changing everything.',
  '2024-09-12',
  'Design',
  '3 min',
  'https://picsum.photos/1200/600?random=203',
  $$[
    { "type": "p", "content": "The pixel has served us well. It allowed us to map information onto a 2D plane. But the world is not 2D. We live in 3D space, yet we spend our lives staring at flat rectangles." },
    { "type": "h2", "content": "Spatial Affordances" },
    { "type": "p", "content": "Apple Vision Pro and Meta Quest are just the beginning. The real revolution isn't the hardware; it's the interface paradigms. How do you design a button that feels \"pressable\" when it is made of light?" },
    { "type": "code", "language": "css", "content": ".button-spatial {\n  transform-style: preserve-3d;\n  transition: transform 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n  \n  &:hover {\n    transform: translateZ(10px);\n    box-shadow: 0 20px 40px rgba(0,0,0,0.2);\n  }\n}" },
    { "type": "p", "content": "We need to rediscover the physical properties of digital objects. Weight, friction, and elasticity must become part of the web developer's toolkit." }
  ]$$
);
```
