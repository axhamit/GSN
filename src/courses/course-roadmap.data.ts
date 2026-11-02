export interface CourseRoadmapModule {
  title: string
  duration: string
  topics: string[]
}

export interface CourseRoadmapData {
  overview: string
  duration?: string
  level: string
  modules: CourseRoadmapModule[]
  projects: string[]
  tools: string[]
  outcomes: string[]
}

const todo = (item: string) => `TODO: Add verified ${item}.`

export const courseRoadmaps: Record<string, CourseRoadmapData> = {
  'career-launch-academy': {
    overview: 'An 8-week journey focused on communication, technical productivity, domain expertise, and placement preparation.',
    duration: 'TODO: Confirm duration (existing course content says both 60 days and 8 weeks).',
    level: todo('entry requirements and course level'),
    modules: [
      { title: 'Communication & Personal Branding', duration: 'Week 1–2', topics: ['Professional communication skills', 'Personal branding & LinkedIn profile', 'Resume building & cover letter writing', 'Interview etiquette & body language'] },
      { title: 'Advanced Tech & Gen AI Productivity', duration: 'Week 3–4', topics: ['Advanced technical skills', 'Generative AI tools & applications', 'AI-powered productivity techniques', 'Tech stack modernization'] },
      { title: 'Domain Expertise', duration: 'Week 5–6', topics: ['Domain-specific training', 'Sales and marketing', 'BFSI and Operations', 'HR operations & talent management', 'IT Support & Networking'] },
      { title: 'Mock Interviews & Placement Drives', duration: 'Week 7–8', topics: ['Mock interview sessions', 'Placement drive preparation', 'Corporate networking', 'Job offer negotiation'] },
    ],
    projects: [todo('Career Launch project or portfolio deliverables')],
    tools: [todo('tools covered in the Career Launch Program')],
    outcomes: [todo('verified Career Launch learning outcomes')],
  },
  'advanced-agentic-generative-ai': {
    overview: 'Master AI agents, large language models, and retrieval-augmented generation through a structured program.',
    level: todo('entry requirements and course level'),
    modules: [
      { title: 'Introduction to Agentic AI', duration: '2 Weeks', topics: ['AI Agents vs Traditional AI', 'Autonomy and Decision Making', 'Agent Architectures', 'Tool Calling Fundamentals', 'Prompt Engineering for Agents'] },
      { title: 'Large Language Models Deep Dive', duration: '3 Weeks', topics: ['LLM Architecture and Tokenization', 'Fine-tuning and PEFT Methods', 'Context Window Management', 'Output Parsing and Validation', 'Hallucination Mitigation'] },
      { title: 'Retrieval-Augmented Generation (RAG)', duration: '3 Weeks', topics: ['Vector Databases and Embeddings', 'Chunking Strategies', 'Retrieval Methods', 'RAG Pipeline Architecture', 'Advanced RAG Techniques'] },
      { title: 'Building AI Agents', duration: '4 Weeks', topics: ['Agent Design Patterns', 'Memory Systems', 'Planning and Reasoning', 'Tool Integration', 'Error Handling and Recovery'] },
      { title: 'Multi-Agent Systems', duration: '3 Weeks', topics: ['Agent Collaboration', 'Communication Protocols', 'Task Decomposition', 'Swarm Intelligence', 'Coordination Strategies'] },
      { title: 'Production Deployment', duration: '2 Weeks', topics: ['API Development', 'Scalability Considerations', 'Monitoring and Observability', 'Security Best Practices', 'Cost Optimization'] },
    ],
    projects: ['Autonomous Research Assistant', 'Customer Support Chatbot', 'Code Review Agent', 'Data Analysis Agent'],
    tools: ['Python', 'TypeScript', 'OpenAI API', 'Anthropic API', 'LangChain', 'LlamaIndex', 'AutoGPT', 'CrewAI', 'Pinecone', 'ChromaDB', 'PostgreSQL', 'Redis', 'Docker'],
    outcomes: ['Master Large Language Models (LLMs) and their applications', 'Build AI agents with autonomous decision-making capabilities', 'Implement Retrieval-Augmented Generation (RAG) systems', 'Design multi-agent workflows for complex tasks', 'Integrate AI agents with external tools and APIs', 'Deploy production-ready AI agent systems', 'Understand agent orchestration frameworks', 'Create conversational AI experiences'],
  },
  'applied-ai-master-certification': {
    overview: 'Build applied skills in Python, machine learning, deep learning, generative AI, and model deployment.',
    level: todo('entry requirements and course level'),
    modules: [
      { title: 'Python for AI Fundamentals', duration: '3 Weeks', topics: ['Python Programming Advanced', 'NumPy and Matrix Operations', 'Pandas for Data Manipulation', 'Data Visualization with Matplotlib/Seaborn', 'Jupyter Notebooks Best Practices'] },
      { title: 'Machine Learning Fundamentals', duration: '4 Weeks', topics: ['Supervised Learning Algorithms', 'Unsupervised Learning Techniques', 'Feature Engineering', 'Model Evaluation Metrics', 'Cross-Validation and Hyperparameter Tuning'] },
      { title: 'Deep Learning with Neural Networks', duration: '5 Weeks', topics: ['Neural Network Architecture', 'Backpropagation and Gradient Descent', 'Convolutional Neural Networks (CNNs)', 'Recurrent Neural Networks (RNNs)', 'Transfer Learning'] },
      { title: 'Generative AI and LLMs', duration: '4 Weeks', topics: ['Introduction to Generative Models', 'Large Language Model Fundamentals', 'Fine-tuning Pre-trained Models', 'Prompt Engineering', 'Generative AI Applications'] },
      { title: 'Applied AI Projects', duration: '4 Weeks', topics: ['End-to-End ML Pipeline', 'Computer Vision Applications', 'Natural Language Processing', 'Time Series Analysis', 'Recommendation Systems'] },
      { title: 'Model Deployment and MLOps', duration: '3 Weeks', topics: ['Model Serialization', 'API Development', 'Cloud Deployment (AWS/GCP)', 'Monitoring and Logging', 'Model Versioning'] },
    ],
    projects: ['Image Classification System', 'Sentiment Analysis Engine', 'Predictive Analytics Dashboard', 'Generative Text Application'],
    tools: ['Python', 'SQL', 'Git', 'Docker', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Keras', 'Jupyter', 'MLflow', 'AWS SageMaker', 'TensorBoard', 'PostgreSQL'],
    outcomes: ['Master Python for AI and data science', 'Build and train machine learning models from scratch', 'Implement deep learning with neural networks', 'Apply generative AI techniques for real-world problems', 'Deploy AI models to production environments', 'Evaluate and optimize model performance', 'Work with large-scale datasets', 'Understand AI ethics and best practices'],
  },
  '11th-standard': { overview: todo('course overview'), level: todo('course level'), modules: [{ title: 'Course modules', duration: todo('module durations'), topics: [todo('verified syllabus topics')] }], projects: [todo('course projects')], tools: [todo('tools covered')], outcomes: [todo('learning outcomes')] },
  '12th-standard': { overview: todo('course overview'), level: todo('course level'), modules: [{ title: 'Course modules', duration: todo('module durations'), topics: [todo('verified syllabus topics')] }], projects: [todo('course projects')], tools: [todo('tools covered')], outcomes: [todo('learning outcomes')] },
  neet: { overview: todo('course overview'), level: todo('course level'), modules: [{ title: 'Course modules', duration: todo('module durations'), topics: [todo('verified syllabus topics')] }], projects: [todo('course projects')], tools: [todo('tools covered')], outcomes: [todo('learning outcomes')] },
  jee: { overview: todo('course overview'), level: todo('course level'), modules: [{ title: 'Course modules', duration: todo('module durations'), topics: [todo('verified syllabus topics')] }], projects: [todo('course projects')], tools: [todo('tools covered')], outcomes: [todo('learning outcomes')] },
  kcet: { overview: todo('course overview'), level: todo('course level'), modules: [{ title: 'Course modules', duration: todo('module durations'), topics: [todo('verified syllabus topics')] }], projects: [todo('course projects')], tools: [todo('tools covered')], outcomes: [todo('learning outcomes')] },
  '10th-standard': { overview: todo('course overview'), level: todo('course level'), modules: [{ title: 'Course modules', duration: todo('module durations'), topics: [todo('verified syllabus topics')] }], projects: [todo('course projects')], tools: [todo('tools covered')], outcomes: [todo('learning outcomes')] },
  'test-series': { overview: todo('course overview'), level: todo('course level'), modules: [{ title: 'Course modules', duration: todo('module durations'), topics: [todo('verified syllabus topics')] }], projects: [todo('course projects')], tools: [todo('tools covered')], outcomes: [todo('learning outcomes')] },
}
