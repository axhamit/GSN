import React, { useState } from 'react'
import Head from 'next/head'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import {
  AIHeroSection,
  AICourseOverview,
  AILearningOutcomes,
  AITechStack,
  AIProjectShowcase,
  AILearningPath,
  AICareerOpportunities,
  AICourseFAQ,
  AIBrochureEnquiryForm,
  AICTASection,
  AIThemeProvider,
} from '@/components/AIComponents'
import CourseRoadmap from '@/components/course/course-roadmap'
import { data as courseCatalog } from '@/components/home/popular-course.data'
import EnrollmentForm from '@/components/form/EnrollmentForm'

const AppliedAIMasterPage: NextPageWithLayout = () => {
  const course = courseCatalog.find((item) => item.slug === 'applied-ai-master-certification')
  const [enrollOpen, setEnrollOpen] = useState(false)
  const [brochureOpen, setBrochureOpen] = useState(false)

  const handleEnrollClick = (): void => {
    setEnrollOpen(true)
  }

  const handleBrochureClick = (): void => {
    setBrochureOpen(true)
  }

  const learningOutcomes = [
    'Master Python for AI and data science',
    'Build and train machine learning models from scratch',
    'Implement deep learning with neural networks',
    'Apply generative AI techniques for real-world problems',
    'Deploy AI models to production environments',
    'Evaluate and optimize model performance',
    'Work with large-scale datasets',
    'Understand AI ethics and best practices',
  ]

  const technologies = ['Python', 'SQL', 'Git', 'Docker']
  const frameworks = ['TensorFlow', 'PyTorch', 'scikit-learn', 'Keras']
  const tools = ['Jupyter', 'MLflow', 'AWS SageMaker', 'TensorBoard', 'PostgreSQL']

  const projects = [
    {
      title: 'Image Classification System',
      description: 'Build a CNN-based image classifier that can categorize images with high accuracy using transfer learning.',
      technologies: ['PyTorch', 'TensorFlow', 'OpenCV'],
      outcome: 'Production-ready computer vision model',
    },
    {
      title: 'Sentiment Analysis Engine',
      description: 'Create an NLP system that analyzes text sentiment and extracts insights from customer reviews.',
      technologies: ['scikit-learn', 'NLTK', 'Transformers'],
      outcome: 'Real-time sentiment analysis API',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Develop a complete ML pipeline for predicting business metrics with interactive visualization.',
      technologies: ['Pandas', 'Scikit-learn', 'Streamlit'],
      outcome: 'End-to-end predictive analytics system',
    },
    {
      title: 'Generative Text Application',
      description: 'Build a text generation application using fine-tuned LLMs for specific use cases.',
      technologies: ['Hugging Face', 'PyTorch', 'FastAPI'],
      outcome: 'Custom generative AI application',
    },
  ]

  const learningPathSteps = [
    {
      label: 'Python Mastery',
      description: 'Build strong Python foundations for AI development',
    },
    {
      label: 'ML Core',
      description: 'Learn machine learning algorithms and techniques',
    },
    {
      label: 'Deep Learning',
      description: 'Master neural networks and advanced architectures',
    },
    {
      label: 'Generative AI',
      description: 'Apply cutting-edge generative AI technologies',
    },
    {
      label: 'Production',
      description: 'Deploy and scale AI systems in real environments',
    },
  ]

  const careerRoles = [
    {
      title: 'Machine Learning Engineer',
      description: 'Design and deploy ML systems at scale',
      salaryRange: '₹18-45 LPA',
      growth: '32% YoY',
    },
    {
      title: 'Data Scientist',
      description: 'Extract insights from data and build predictive models',
      salaryRange: '₹15-40 LPA',
      growth: '28% YoY',
    },
    {
      title: 'AI Researcher',
      description: 'Push the boundaries of AI technology and innovation',
      salaryRange: '₹20-50 LPA',
      growth: '25% YoY',
    },
    {
      title: 'Deep Learning Engineer',
      description: 'Specialize in neural networks and advanced AI systems',
      salaryRange: '₹22-55 LPA',
      growth: '35% YoY',
    },
  ]

  const industryStats = [
    {
      title: 'ML Demand',
      value: '97%',
      description: 'Of organizations are investing in ML initiatives',
    },
    {
      title: 'Salary Premium',
      value: '40%',
      description: 'Higher salaries for AI professionals vs traditional roles',
    },
    {
      title: 'Talent Shortage',
      value: '2.5M',
      description: 'Unfilled AI and ML jobs globally',
    },
  ]

  const faqs = [
    {
      question: 'What are the prerequisites for this course?',
      answer: 'Basic programming knowledge is required. Prior experience with Python is helpful but not mandatory. We provide foundational Python training at the beginning of the course. No prior ML experience is needed.',
    },
    {
      question: 'How long is the course and what is the format?',
      answer: 'The course is 4 months long with live sessions, hands-on labs, project work, and mentor support. The curriculum is designed to accommodate working professionals with flexible schedules.',
    },
    {
      question: 'Will I receive a certification?',
      answer: 'Yes, upon successful completion of all modules, projects, and the final capstone, you will receive the Applied AI Master Certification recognized by industry partners.',
    },
    {
      question: 'What kind of capstone project will I complete?',
      answer: 'You will work on a comprehensive capstone project that applies all learned concepts. Past projects include building end-to-end ML systems, generative AI applications, and industry-specific solutions.',
    },
    {
      question: 'Is there placement assistance?',
      answer: 'We provide comprehensive career support including resume building, interview preparation, portfolio development, and direct connections to hiring partners. Our placement team works closely with you throughout the program.',
    },
    {
      question: 'Can I switch from the Agentic AI course to this one?',
      answer: 'Yes, you can switch between courses within the first 2 weeks. Our advisors can help you choose the best path based on your career goals and background.',
    },
    {
      question: 'What hardware/software do I need?',
      answer: 'A computer with 8GB+ RAM is recommended. We provide cloud-based environments for heavy computations, so you don\'t need expensive hardware. All software is free and open-source.',
    },
  ]

  return (
    <>
      <Head>
        <title>Applied AI Master Certification | GSN Foundation</title>
        <meta name="description" content="Become a complete AI professional with comprehensive training in machine learning, deep learning, and generative AI. Master Python, build production-ready models in this 4-month certification." />
        <meta name="keywords" content="Applied AI, Machine Learning, Deep Learning, Python AI, AI Certification, TensorFlow, PyTorch, Neural Networks" />
        <link rel="canonical" href="https://www.gsnfoundation.com/courses/applied-ai-master-certification" />

        {/* Open Graph */}
        <meta property="og:title" content="Applied AI Master Certification | GSN Foundation" />
        <meta property="og:description" content="Become a complete AI professional with comprehensive training in machine learning, deep learning, and generative AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gsnfoundation.com/courses/applied-ai-master-certification" />
        <meta property="og:image" content="https://www.gsnfoundation.com/images/courses/sai-kiran-anagani-5Ntkpxqt54Y-unsplash.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Applied AI Master Certification | GSN Foundation" />
        <meta name="twitter:description" content="Become a complete AI professional with comprehensive training in machine learning, deep learning, and generative AI." />
        <meta name="twitter:image" content="https://www.gsnfoundation.com/images/courses/sai-kiran-anagani-5Ntkpxqt54Y-unsplash.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Course',
              name: 'Applied AI Master Certification',
              description: 'Become a complete AI professional with comprehensive training in machine learning, deep learning, and generative AI.',
              provider: {
                '@type': 'Organization',
                name: 'GSN Foundation',
                url: 'https://www.gsnfoundation.com',
              },
              offers: {
                '@type': 'Offer',
                price: '69999',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
              },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'online',
                courseWorkload: 'P4M',
              },
            }),
          }}
        />
      </Head>
      <AIThemeProvider>
      <AIHeroSection
        title="Applied AI Master Certification"
        subtitle="Artificial Intelligence"
        description="Become a complete AI professional with comprehensive training in machine learning, deep learning, and generative AI. Master Python, build production-ready models, and deploy AI systems in this intensive 4-month certification program."
        badge="Premium"
        ctaText="Enroll Now"
        onCtaClick={handleEnrollClick}
        secondaryCtaText="Download Brochure"
        onSecondaryCtaClick={handleBrochureClick}
      />

      <AICourseOverview
        duration="4 Months"
        students={67}
        rating={5}
        ratingCount={67}
        language="English"
        skillLevel="Beginner to Advanced"
        certificate="Applied AI Master Certification"
        highlights={[
          'Comprehensive ML and Deep Learning curriculum',
          '100+ hours of hands-on labs and projects',
          'Industry-recognized certification',
          'Capstone project with mentor guidance',
          'Career placement assistance',
          'Lifetime access to course updates',
        ]}
      />

      <AILearningOutcomes outcomes={learningOutcomes} />

      {course && <CourseRoadmap course={course} />}

      <AITechStack technologies={technologies} frameworks={frameworks} tools={tools} />

      <AIProjectShowcase projects={projects} />

      <AILearningPath steps={learningPathSteps} />

      <AICareerOpportunities roles={careerRoles} industryStats={industryStats} />

      <AICourseFAQ faqs={faqs} />

      <AIBrochureEnquiryForm
        open={brochureOpen}
        onClose={() => setBrochureOpen(false)}
        courseName="Applied AI Master Certification"
        courseSlug="applied-ai-master-certification"
      />

      <AICTASection
        title="Ready to Become an AI Professional?"
        subtitle="Master the complete AI stack from fundamentals to deployment and accelerate your career with our industry-recognized certification."
        primaryCTA="Enroll Now"
        secondaryCTA="Download Brochure"
        onPrimaryClick={handleEnrollClick}
        onSecondaryClick={handleBrochureClick}
      />

      <EnrollmentForm
        open={enrollOpen}
        onClose={() => setEnrollOpen(false)}
        courseName="Applied AI Master Certification"
        coursePrice={69999}
      />
      </AIThemeProvider>
    </>
  )
}

AppliedAIMasterPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default AppliedAIMasterPage
