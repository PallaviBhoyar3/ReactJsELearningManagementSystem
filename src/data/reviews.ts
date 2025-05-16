import { Review } from '../types';
import Review1 from "../assets/review1.jpeg"
import Review2 from "../assets/review2.jpeg"
import Review3 from "../assets/review3.jpeg"
import Review4 from "../assets/review4.jpeg"

export const reviews: Review[] = [
  {
    id: '1',
    user: {
      name: 'James Wilson',
      image: Review1,
      role: 'Web Developer'
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    rating: 5,
    course: 'Complete Web Development',
    date: '2025-03-15'
  },
  {
    id: '2',
    user: {
      name: 'James Wilson',
      image: Review2,
      role: 'Frontend Developer'
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    rating: 4.5,
    course: 'Frontend Developer',
    date: '2025-02-28'
  },
  {
    id: '3',
    user: {
      name: 'James Wilson',
      image: Review3,
      role: 'React Js Developer'
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    rating: 5,
    course: 'React Js Developer',
    date: '2025-04-02'
  },
  {
    id: '4',
    user: {
      name: 'James Wilson',
      image: Review4,
      role: 'UI Designer'
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    rating: 4.8,
    course: 'UI/UX Design Professional',
    date: '2025-03-20'
  }
];