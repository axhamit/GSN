import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/physics-teacher.jpg',
    name: 'Dr. Raghav Sharma',
    category: 'Physics (JEE • NEET • KCET)',
    description:
      'With 12+ years of experience, Dr. Raghav specializes in simplifying complex Physics concepts and preparing students for JEE, NEET, and KCET through conceptual clarity and problem-solving.',
    company: {
      name: 'Former Faculty – Allen',
      logo: '/images/companies/allen.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/chemistry-teacher.jpg',
    name: 'Prof. Anjali Mehta',
    category: 'Chemistry (11th • 12th • NEET)',
    description:
      'An expert in Organic and Physical Chemistry, she focuses on NCERT foundation + competitive exam strategy, helping students boost speed and accuracy with structured study plans.',
    company: {
      name: 'Ex-FIITJEE',
      logo: '/images/companies/fiitjee.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/maths-teacher.jpg',
    name: 'Karan Deshmukh',
    category: 'Mathematics (10th • 11th • JEE)',
    description:
      'Karan sir makes Maths easy with real-life examples and exam-focused shortcuts. His guided practice sessions have helped 5000+ students score high in JEE and 10th Board exams.',
    company: {
      name: 'Vedantu',
      logo: '/images/companies/vedantu.png',
    },
  },
  {
    id: 4,
    photo: '/images/mentors/biology-teacher.jpg',
    name: 'Dr. Supriya Kulkarni',
    category: 'Biology (NEET Specialist)',
    description:
      'A NEET Biology mentor with 10+ years of experience, she teaches using diagrams, flowcharts, and personalized guidance to help students master high-weightage chapters.',
    company: {
      name: 'Aakash Institute',
      logo: '/images/companies/aakash.png',
    },
  },
]
