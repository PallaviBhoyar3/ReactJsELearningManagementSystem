import { Trainer } from '../types';
import Trainer1 from "../assets/Trainer1.jpeg"
import Trainer2 from "../assets/trainer2.jpeg"
import Trainer3 from "../assets/trainer3.jpeg"
import Trainer4 from "../assets/trainer4.jpeg"


export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior Web Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    expertise: ['React', 'Node.js', 'JavaScript', 'HTML/CSS'],
    courses: 12,
    students: 50000,
    image: Trainer1,
    rating: 4.9
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    title: 'Frontend Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    expertise: ['HTML', 'CSS', 'Javascript', 'React JS'],
    courses: 8,
    students: 35000,
    image: Trainer2,
    rating: 4.8
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    title: 'Mobile Application Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    expertise: ['HTML5', 'Css3', 'Javascript', 'React Native'],
    courses: 15,
    students: 45000,
    image: Trainer3,
    rating: 4.7
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    title: 'UX/UI Designer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est venenatis, posuere sem eu, pellentesque tortor. Cras molestie euismod ullamcorper.',
    expertise: ['UI Design', 'Figma'],
    courses: 6,
    students: 28000,
    image: Trainer4,
    rating: 4.9
  }
];