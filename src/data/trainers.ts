import { Trainer } from '../types';
import trainer1 from '../assets/Trainer1.jpeg';
import trainer2 from '../assets/Trainer2.jpeg';
import trainer3 from '../assets/Trainer3.jpeg';
import trainer4 from '../assets/Trainer4.jpeg';

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior Web Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    expertise: ['React', 'Node.js', 'JavaScript', 'HTML/CSS'],
    courses: 12,
    students: 50000,
    image: trainer1,
    rating: 4.9
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'React Js Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    expertise: ['React Js', 'HTML', 'CSS', 'Javascript'],
    courses: 8,
    students: 35000,
    image: trainer2,
    rating: 4.8
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    title: 'Frontend Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    expertise: ['React JS', 'HTML', 'CSS', 'Javascript'],
    courses: 15,
    students: 45000,
    image: trainer3,
    rating: 4.7
  },
  {
    id: '4',
    name: 'David Lee',
    title: 'Mobile Application Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    expertise: ['React Native', 'React Js', 'HTML', 'CSs', 'Javascript'],
    courses: 6,
    students: 28000,
    image: trainer4,
    rating: 4.9
  }
];