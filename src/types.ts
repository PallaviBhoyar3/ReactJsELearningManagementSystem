export type Course = {
  id: string;
  title: string;
  instructor: string;
  description: string;
  price: number;
  discountPrice?: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  image: string;
  rating: number;
  studentsEnrolled: number;
  isSpecialOffer?: boolean;
};

export type EnrolledCourse = Course & {
  progress: number;
  lessonsCompleted: number;
  totalLessons: number;
  enrolledDate: string;
  expiresDate: string;
};

export type Trainer = {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  courses: number;
  students: number;
  image: string;
  rating: number;
};

export type Review = {
  id: string;
  user: {
    name: string;
    image: string;
    role: string;
  };
  content: string;
  rating: number;
  course: string;
  date: string;
};