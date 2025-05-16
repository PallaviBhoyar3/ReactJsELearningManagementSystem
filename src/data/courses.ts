import { Course } from '../types';
import Course1 from "../assets/course1.jpeg"
import Course2 from "../assets/course1.jpeg"
import Course3 from "../assets/course1.jpeg"
import Course4 from "../assets/course1.jpeg"
import Course5 from "../assets/course1.jpeg"
import Course6 from "../assets/course1.jpeg"
import Course7 from "../assets/course1.jpeg"
import Course8 from "../assets/course1.jpeg"

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development',
    instructor: 'Sarah Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    price: 129.99,
    discountPrice: 89.99,
    duration: '12 weeks',
    level: 'Beginner',
    category: 'Web Development',
    image: Course1,
    rating: 4.8,
    studentsEnrolled: 12420,
    isSpecialOffer: true
  },
  {
    id: '2',
    title: 'FrontEnd Development',
    instructor: 'Sarah Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    price: 149.99,
    duration: '10 weeks',
    level: 'Intermediate',
    category: 'Frontend Development',
    image: Course2,
    rating: 4.7,
    studentsEnrolled: 8750
  },
  {
    id: '3',
    title: 'React Js Course',
    instructor: 'Sarah Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    price: 99.99,
    discountPrice: 79.99,
    duration: '8 weeks',
    level: 'Beginner',
    category: 'ReactJs',
    image: Course3,
    rating: 4.6,
    studentsEnrolled: 10890,
    isSpecialOffer: true
  },
  {
    id: '4',
    title: 'Mobile Application Development',
    instructor: 'Sarah Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    price: 119.99,
    duration: '9 weeks',
    level: 'Intermediate',
    category: 'Design',
    image: Course4,    
    rating: 4.9,
    studentsEnrolled: 7680
  },
  {
    id: '5',
    title: 'Advanced JavaScript Programming',
    instructor: 'Sarah Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    price: 139.99,
    discountPrice: 99.99,
    duration: '8 weeks',
    level: 'Advanced',
    category: 'Web Development',
    image: Course5, 
    rating: 4.7,
    studentsEnrolled: 5920,
    isSpecialOffer: true
  },
  {
    id: '6',
    title: 'Mobile App Development with React Native',
    instructor: 'Sarah Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    price: 149.99,
    duration: '10 weeks',
    level: 'Intermediate',
    category: 'Mobile Development',
    image: Course6, 
    rating: 4.8,
    studentsEnrolled: 4580
  }
];