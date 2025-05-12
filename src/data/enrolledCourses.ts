import { EnrolledCourse } from '../types';
import Course1 from "../assets/course1.jpeg"
import Course2 from "../assets/course2.jpeg"
import Course3 from "../assets/course3.jpeg"
import Course4 from "../assets/course4.jpeg"

export const enrolledCourses: EnrolledCourse[] = [
  {
    id: '1',
    title: 'Complete Web Development',
    instructor: 'Sarah Johnson',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more. Build real-world projects and launch your developer career.',
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
    title: 'Mobile Application Development',
    instructor: 'Sarah Johnson',
    description: 'Learn SEO, social media marketing, content strategy, Google Analytics, and PPC advertising.',
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
  {
    id: '5',
    title: 'Advanced JavaScript Programming',
    instructor: 'Sarah Johnson',
    description: 'Deepen your JavaScript knowledge with advanced concepts like closures, prototypes, async programming, and frameworks.',
    price: 139.99,
    discountPrice: 99.99,
    duration: '8 weeks',
    level: 'Advanced',
    category: 'Web Development',
    image: Course3,
    rating: 4.7,
    studentsEnrolled: 5920,
    progress: 35,
    lessonsCompleted: 7,
    totalLessons: 20,
    enrolledDate: '2025-02-20',
    expiresDate: '2026-02-20'
  },
  {
    id: '4',
    title: 'UI/UX Design Professional',
    instructor: 'Sarah Johnson',
    description: 'Learn user research, wireframing, prototyping, and design systems. Create beautiful and functional interfaces that users love.',
    price: 119.99,
    duration: '9 weeks',
    level: 'Intermediate',
    category: 'Design',
    image: Course4,
    rating: 4.9,
    studentsEnrolled: 7680,
    progress: 100,
    lessonsCompleted: 18,
    totalLessons: 18,
    enrolledDate: '2025-01-05',
    expiresDate: '2026-01-05'
  }
];