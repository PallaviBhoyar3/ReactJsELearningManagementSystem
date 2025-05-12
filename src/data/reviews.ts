import { Review } from '../types';
import review1 from "../assets/review1.jpeg";
import review2 from "../assets/review2.jpeg";
import review3 from "../assets/review3.jpeg";
import review4 from "../assets/review4.jpeg";

export const reviews: Review[] = [
  {
    id: '1',
    user: {
      name: 'James Wilson',
      image: review1,
      role: 'Web Developer'
    },
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
    rating: 5,
    course: 'Complete Web Development',
    date: '2025-03-15'
  },
  {
    id: '2',
    user: {
      name: 'Sophia Martinez',
      image: review2,
      role: 'Frontend Developer'
    },
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
    rating: 4.5,
    course: 'Frontend Fundamentals',
    date: '2025-02-28'
  },
  {
    id: '3',
    user: {
      name: 'Robert Thompson',
      image: review3,
      role: 'React Js Developer'
    },
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
    rating: 5,
    course: 'React Js Developement',
    date: '2025-04-02'
  },
  {
    id: '4',
    user: {
      name: 'Lisa Kim',
      image: review4,
      role: 'UI Designer'
    },
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s,',
    rating: 4.8,
    course: 'UI/UX Design Professional',
    date: '2025-03-20'
  }
];