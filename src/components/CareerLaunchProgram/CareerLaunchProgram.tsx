import React, { FC } from 'react'
import CourseRoadmap from '@/components/course/course-roadmap'
import { data } from '@/components/home/popular-course.data'

const CareerLaunchProgram: FC = () => {
  const course = data.find((item) => item.slug === 'career-launch-academy')
  return course ? <CourseRoadmap course={course} /> : null
}

export default CareerLaunchProgram
