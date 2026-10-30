import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Box from '@mui/material/Box'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import {
  AIHeroSection,
  AICourseOverview,
  AILearningOutcomes,
  AICurriculumTimeline,
  AITechStack,
  AIProjectShowcase,
  AIAgentWorkflow,
  AILearningPath,
  AICareerOpportunities,
  AICourseFAQ,
  AIBrochureEnquiryForm,
  AICTASection,
  AIThemeProvider,
} from '@/components/AIComponents'
import EnrollmentForm from '@/components/form/EnrollmentForm'

const AdvancedAgenticAIPage: NextPageWithLayout = () => {
  const router = useRouter()
  const [enrollOpen, setEnrollOpen] = useState(false)
  const [scrollToEnquiry, setScrollToEnquiry] = useState(false)

  const handleEnrollClick = () => {
    setEnrollOpen(true)
  }

  const handleBrochureClick = () => {
    setScrollToEnquiry(true)
    setTimeout(() => {
      const enquirySection = document.getElementById('enquiry-section')
      if (enquirySection) {
        enquirySection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const learningOutcomes = [
    'Master Large Language Models (LLMs) and their applications',
    'Build AI agents with autonomous decision-making capabilities',
    'Implement Retrieval-Augmented Generation (RAG) systems',
    'Design multi-agent workflows for complex tasks',
    'Integrate AI agents with external tools and APIs',
    'Deploy production-ready AI agent systems',
    'Understand agent orchestration frameworks',
    'Create conversational AI experiences',
  ]

  const curriculumModules = [
    {
      title: 'Introduction to Agentic AI',
      duration: '2 Weeks',
      topics: [
        'AI Agents vs Traditional AI',
        'Autonomy and Decision Making',
        'Agent Architectures',
        'Tool Calling Fundamentals',
        'Prompt Engineering for Agents',
      ],
    },
    {
      title: 'Large Language Models Deep Dive',
      duration: '3 Weeks',
      topics: [
        'LLM Architecture and Tokenization',
        'Fine-tuning and PEFT Methods',
        'Context Window Management',
        'Output Parsing and Validation',
        'Hallucination Mitigation',
      ],
    },
    {
      title: 'Retrieval-Augmented Generation (RAG)',
      duration: '3 Weeks',
      topics: [
        'Vector Databases and Embeddings',
        'Chunking Strategies',
        'Retrieval Methods',
        'RAG Pipeline Architecture',
        'Advanced RAG Techniques',
      ],
    },
    {
      title: 'Building AI Agents',
      duration: '4 Weeks',
      topics: [
        'Agent Design Patterns',
        'Memory Systems',
        'Planning and Reasoning',
        'Tool Integration',
        'Error Handling and Recovery',
      ],
    },
    {
      title: 'Multi-Agent Systems',
      duration: '3 Weeks',
      topics: [
        'Agent Collaboration',
        'Communication Protocols',
        'Task Decomposition',
        'Swarm Intelligence',
        'Coordination Strategies',
      ],
    },
    {
      title: 'Production Deployment',
      duration: '2 Weeks',
      topics: [
        'API Development',
        'Scalability Considerations',
        'Monitoring and Observability',
        'Security Best Practices',
        'Cost Optimization',
      ],
    },
  ]

  const technologies = ['Python', 'TypeScript', 'OpenAI API', 'Anthropic API']
  const frameworks = ['LangChain', 'LlamaIndex', 'AutoGPT', 'CrewAI']
  const tools = ['Pinecone', 'ChromaDB', 'PostgreSQL', 'Redis', 'Docker']

  const projects = [
    {
      title: 'Autonomous Research Assistant',
      description: 'Build an AI agent that can autonomously research topics, synthesize information, and generate comprehensive reports.',
      technologies: ['LangChain', 'OpenAI', 'Pinecone'],
      outcome: 'Portfolio-ready research automation system',
    },
    {
      title: 'Customer Support Chatbot',
      description: 'Create a multi-agent customer support system with RAG capabilities for accurate, context-aware responses.',
      technologies: ['LlamaIndex', 'Vector DB', 'FastAPI'],
      outcome: 'Production-grade support automation',
    },
    {
      title: 'Code Review Agent',
      description: 'Develop an AI agent that can review code, suggest improvements, and generate documentation automatically.',
      technologies: ['GitHub API', 'LLM', 'TypeScript'],
      outcome: 'Automated code quality assistant',
    },
    {
      title: 'Data Analysis Agent',
      description: 'Build an agent that can analyze datasets, generate insights, and create visualizations automatically.',
      technologies: ['Pandas', 'Plotly', 'LLM'],
      outcome: 'Intelligent data analysis workflow',
    },
  ]

  const workflowSteps = [
    { title: 'Input Processing', description: 'User queries are parsed and understood by the agent' },
    { title: 'Context Retrieval', description: 'Relevant information is fetched from knowledge bases' },
    { title: 'Reasoning', description: 'Agent analyzes context and plans the optimal response' },
    { title: 'Tool Execution', description: 'Agent calls appropriate tools and APIs to complete tasks' },
    { title: 'Response Generation', description: 'Final output is generated and formatted for the user' },
  ]

  const learningPathSteps = [
    {
      label: 'Fundamentals',
      description: 'Learn the basics of AI, LLMs, and agent architectures',
    },
    {
      label: 'Core Skills',
      description: 'Master RAG, prompt engineering, and tool integration',
    },
    {
      label: 'Advanced Topics',
      description: 'Build multi-agent systems and production deployments',
    },
    {
      label: 'Real Projects',
      description: 'Apply your skills to build portfolio-worthy projects',
    },
  ]

  const careerRoles = [
    {
      title: 'AI Engineer',
      description: 'Design and implement AI systems and agent architectures',
      salaryRange: '₹15-40 LPA',
      growth: '35% YoY',
    },
    {
      title: 'ML Engineer',
      description: 'Build and deploy machine learning models at scale',
      salaryRange: '₹12-35 LPA',
      growth: '30% YoY',
    },
    {
      title: 'Prompt Engineer',
      description: 'Optimize AI interactions and design effective prompts',
      salaryRange: '₹10-25 LPA',
      growth: '40% YoY',
    },
    {
      title: 'AI Product Manager',
      description: 'Lead AI product development and strategy',
      salaryRange: '₹20-50 LPA',
      growth: '25% YoY',
    },
  ]

  const industryStats = [
    {
      title: 'AI Job Growth',
      value: '74%',
      description: 'Year-over-year increase in AI job postings',
    },
    {
      title: 'Market Size',
      value: '$190B',
      description: 'Global AI market projected for 2025',
    },
    {
      title: 'Skills Gap',
      value: '50%',
      description: 'Companies struggling to find AI talent',
    },
  ]

  const faqs = [
    {
      question: 'What are the prerequisites for this course?',
      answer: 'Basic programming knowledge in Python is required. Familiarity with machine learning concepts is helpful but not mandatory. We provide foundational materials to help you get started.',
    },
    {
      question: 'How long is the course and what is the format?',
      answer: 'The course is 4 months long with a blend of live sessions, recorded content, hands-on labs, and project work. You will have access to mentors and a supportive community throughout.',
    },
    {
      question: 'Will I receive a certificate upon completion?',
      answer: 'Yes, upon successful completion of the course and projects, you will receive a certificate of completion that you can add to your LinkedIn profile and resume.',
    },
    {
      question: 'What kind of projects will I build?',
      answer: 'You will build 4+ real-world projects including autonomous research assistants, customer support chatbots, code review agents, and data analysis systems. These projects will be portfolio-ready.',
    },
    {
      question: 'Is job placement assistance provided?',
      answer: 'We provide career support including resume reviews, interview preparation, and connections to our hiring partners. While we cannot guarantee placement, we actively support your job search.',
    },
    {
      question: 'Can I access the course content after completion?',
      answer: 'Yes, you will have lifetime access to course materials, updates, and the community forum even after completing the course.',
    },
  ]

  return (
    <>
      <Head>
        <title>Advanced Agentic AI and Generative AI Course | GSN Foundation</title>
        <meta name="description" content="Master AI agents, Large Language Models, and Retrieval-Augmented Generation in this comprehensive 4-month program. Build autonomous AI systems with hands-on projects." />
        <meta name="keywords" content="Agentic AI, Generative AI, LLM, RAG, AI Agents, LangChain, AI course, machine learning, Python AI" />
        <link rel="canonical" href="https://www.gsnfoundation.com/courses/advanced-agentic-generative-ai" />

        {/* Open Graph */}
        <meta property="og:title" content="Advanced Agentic AI and Generative AI Course | GSN Foundation" />
        <meta property="og:description" content="Master AI agents, Large Language Models, and Retrieval-Augmented Generation in this comprehensive 4-month program." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gsnfoundation.com/courses/advanced-agentic-generative-ai" />
        <meta property="og:image" content="https://www.gsnfoundation.com/images/courses/annie-spratt-QckxruozjRg-unsplash.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advanced Agentic AI and Generative AI Course | GSN Foundation" />
        <meta name="twitter:description" content="Master AI agents, Large Language Models, and Retrieval-Augmented Generation in this comprehensive 4-month program." />
        <meta name="twitter:image" content="https://www.gsnfoundation.com/images/courses/annie-spratt-QckxruozjRg-unsplash.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Course',
              name: 'Advanced Agentic AI and Generative AI',
              description: 'Master AI agents, Large Language Models, and Retrieval-Augmented Generation in this comprehensive 4-month program.',
              provider: {
                '@type': 'Organization',
                name: 'GSN Foundation',
                url: 'https://www.gsnfoundation.com',
              },
              offers: {
                '@type': 'Offer',
                price: '59999',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
              },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
                courseWorkload: 'PT4M',
              },
            }),
          }}
        />
      </Head>
      <AIThemeProvider>
      <AIHeroSection
        title="Advanced Agentic AI and Generative AI"
        subtitle="Artificial Intelligence"
        description="Master the cutting-edge technologies behind AI agents, Large Language Models, and Retrieval-Augmented Generation. Build autonomous systems that can reason, plan, and execute complex tasks in this comprehensive 4-month program."
        badge="New Course"
        ctaText="Enroll Now"
        onCtaClick={handleEnrollClick}
        secondaryCtaText="Download Brochure"
        onSecondaryCtaClick={handleBrochureClick}
      />

      <AICourseOverview
        duration="4 Months"
        students={89}
        rating={5}
        ratingCount={89}
        language="English"
        skillLevel="Intermediate"
        certificate="Yes"
        highlights={[
          'Live interactive sessions with AI experts',
          'Hands-on labs and real-world projects',
          'Industry-standard tools and frameworks',
          'Career support and mentorship',
          'Lifetime access to course materials',
          'Certificate of completion',
        ]}
      />

      <AILearningOutcomes outcomes={learningOutcomes} />

      <AICurriculumTimeline modules={curriculumModules} />

      <AITechStack technologies={technologies} frameworks={frameworks} tools={tools} />

      <AIProjectShowcase projects={projects} />

      <AIAgentWorkflow
        title="AI Agent Workflow"
        description="Understand how AI agents process information and make decisions"
        steps={workflowSteps}
      />

      <AILearningPath steps={learningPathSteps} />

      <AICareerOpportunities roles={careerRoles} industryStats={industryStats} />

      <AICourseFAQ faqs={faqs} />

      <Box id="enquiry-section">
        <AIBrochureEnquiryForm
          courseName="Advanced Agentic AI and Generative AI"
          courseSlug="advanced-agentic-generative-ai"
          onSuccess={() => setScrollToEnquiry(false)}
        />
      </Box>

      <AICTASection
        title="Ready to Master Agentic AI?"
        subtitle="Join the next cohort and start building autonomous AI systems that transform industries."
        primaryCTA="Enroll Now"
        secondaryCTA="Download Brochure"
        onPrimaryClick={handleEnrollClick}
        onSecondaryClick={handleBrochureClick}
      />

      <EnrollmentForm
        open={enrollOpen}
        onClose={() => setEnrollOpen(false)}
        courseName="Advanced Agentic AI and Generative AI"
        coursePrice={59999}
      />
      </AIThemeProvider>
    </>
  )
}

AdvancedAgenticAIPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default AdvancedAgenticAIPage
