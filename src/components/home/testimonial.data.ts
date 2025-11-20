import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Expert Guidance for Every Exam',
    content:
      'The coaching is extremely comprehensive for PCMB 11th & 12th. The teachers explain every concept clearly and guide us personally through KCET and JEE preparation.',
    user: {
      id: 1,
      name: 'Aarav Patil',
      professional: 'PCMB Student',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Perfect for Competitive Exams',
    content:
      'I joined for NEET coaching and the study plans are very structured. The personalised approach and doubt-clearing sessions helped me improve my accuracy a lot.',
    user: {
      id: 2,
      name: 'Diya Sharma',
      professional: 'NEET Aspirant',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Best Coaching for 10th Board',
    content:
      'Their 10th Standard Board preparation is excellent. The teachers make concepts easy and the regular tests helped me score better.',
    user: {
      id: 3,
      name: 'Rahul Mehra',
      professional: 'Class 10 Student',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Online + Offline Flexibility',
    content:
      'The option to choose between online and offline classes is very helpful. I could manage my school timings easily while preparing for KCET.',
    user: {
      id: 4,
      name: 'Sneha Kulkarni',
      professional: 'KCET Student',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Personalized Study Plans',
    content:
      'The personalised study plans helped me stay consistent. The mentors monitor progress every week and guide us according to our weak areas.',
    user: {
      id: 5,
      name: 'Vikram Rao',
      professional: 'JEE Aspirant',
      photo: '5.jpg',
    },
  },
]
