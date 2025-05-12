import { Course } from '../types';
import Course1 from "../assets/course1.jpeg";
import Course2 from "../assets/course2.jpeg";
import Course3 from "../assets/course3.jpeg";
import Course4 from "../assets/course4.jpeg";
import Course5 from "../assets/course5.jpeg";
import Course6 from "../assets/course6.jpeg";

export const courses: Course[] = [
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
    // image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    studentsEnrolled: 12420,
    isSpecialOffer: true
  },
  {
    id: '2',
    title: 'React Js Basics',
    instructor: 'Sarah Johnson',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    price: 149.99,
    duration: '10 weeks',
    level: 'Intermediate',
    category: 'Data Science',
    image: Course2,
    rating: 4.7,
    studentsEnrolled: 8750
  },
  {
    id: '3',
    title: 'Frontend Development',
    instructor: 'Sarah Johnson',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    price: 99.99,
    discountPrice: 79.99,
    duration: '8 weeks',
    level: 'Beginner',
    category: 'Marketing',
    image: Course3,
    rating: 4.6,
    studentsEnrolled: 10890,
    isSpecialOffer: true
  },
  {
    id: '4',
    title: 'UI/UX Design Professional',
    instructor: 'Sarah Johnson',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy.',
    price: 149.99,
    duration: '10 weeks',
    level: 'Intermediate',
    category: 'Mobile Development',
    image: Course6,
    rating: 4.8,
    studentsEnrolled: 4580
  }
];