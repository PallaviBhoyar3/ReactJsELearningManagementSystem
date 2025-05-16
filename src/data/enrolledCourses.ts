import { EnrolledCourse } from '../types';
import Course1 from "../assets/course1.jpeg"
import Course2 from "../assets/course2.jpeg"

export const enrolledCourses: EnrolledCourse[] = [
  {
    id: '1',
    title: 'Complete Web Development',
    instructor: 'Sarah Johnson',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more.',
    price: 129.99,
    discountPrice: 89.99,
    duration: '12 weeks',
    level: 'Beginner',
    category: 'Web Development',
    image: Course1,
    rating: 4.8,
    studentsEnrolled: 12420,
    progress: 65,
    lessonsCompleted: 18,
    totalLessons: 28,
    enrolledDate: '2025-03-10',
    expiresDate: '2026-03-10'
  },
  {
    id: '3',
    title: 'React Js Development',
    instructor: 'Sarah Johnson',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more.',
    price: 99.99,
    discountPrice: 79.99,
    duration: '8 weeks',
    level: 'Beginner',
    category: 'Marketing',
    image: Course2,
    rating: 4.6,
    studentsEnrolled: 10890,
    progress: 100,
    lessonsCompleted: 24,
    totalLessons: 24,
    enrolledDate: '2024-12-15',
    expiresDate: '2025-12-15'
  },
];