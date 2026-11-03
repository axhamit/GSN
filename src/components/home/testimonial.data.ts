import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    name: 'Aarav Patil',
    title: 'A Great Learning Experience in Artificial Intelligence',
    content:
      'The course provided excellent insights into Artificial Intelligence and Generative AI. The hands-on sessions and practical projects helped me understand how AI tools work and how to apply them to real-world challenges.',
    user: {
      id: 1,
      name: 'Aarav Patil',
      // professional: 'PCMB Student',
      photo: 'student-boy-1.svg',
    },
  },
  {
    id: 2,
    name: 'Diya Sharma',
    title: 'Making AI Concepts Easy to Understand',
    content:
      'I gained valuable knowledge of Generative AI, Agentic AI, and intelligent automation. The practical approach and expert guidance helped me explore new AI technologies and build confidence in using them.',
    user: {
      id: 2,
      name: 'Diya Sharma',
      // professional: 'NEET Aspirant',
      photo: 'student-boy-2.svg',
    },
  },
  {
    id: 3,
    name: 'Rahul Mehra',
    title: 'Building Future-Ready Skills with AI',
    content:
      'This program helped me develop practical AI skills and understand how AI is transforming different industries. The real-world applications and project-based learning made the experience valuable for my professional growth.',
    user: {
      id: 3,
      name: 'Rahul Mehra',
      // professional: 'Class 10 Student',
      photo: 'student-boy-3.svg',
    },
  },
  {
    id: 4,
    name: 'Sneha Kulkarni',
    title: 'Online + Offline Flexibility',
    content:
      'The option to choose between online and offline classes is very helpful. I could manage my school timings easily while preparing for KCET.',
    user: {
      id: 4,
      name: 'Sneha Kulkarni',
      professional: 'KCET Student',
      photo: 'student-boy-4.svg',
    },
  },
  {
    id: 5,
    name: 'Vikram Rao',
    title: 'Personalized Study Plans',
    content:
      'The personalised study plans helped me stay consistent. The mentors monitor progress every week and guide us according to our weak areas.',
    user: {
      id: 5,
      name: 'Vikram Rao',
      professional: 'JEE Aspirant',
      photo: 'student-boy-5.svg',
    },
  },
]
