import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Course } from '../types';
import { courses as initialCourses } from '../data/courses';
import toast from 'react-hot-toast';

type CourseContextType = {
  courses: Course[];
  addCourse: (courseData: Omit<Course, 'id' | 'studentsEnrolled'>) => void;
  deleteCourse: (id: string) => void;
  updateCourse: (id: string, courseData: Partial<Course>) => void;
};

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage if available
  const [courses, setCourses] = useState<Course[]>(() => {
    const savedCourses = localStorage.getItem('elearn-courses');
    return savedCourses ? JSON.parse(savedCourses) : initialCourses;
  });

  // Persist courses to localStorage when they change
  useEffect(() => {
    localStorage.setItem('elearn-courses', JSON.stringify(courses));
  }, [courses]);

  const addCourse = (courseData: Omit<Course, 'id' | 'studentsEnrolled'>) => {
    try {
      const newCourse: Course = {
        ...courseData,
        id: crypto.randomUUID(),
        studentsEnrolled: 0,
      };
      
      setCourses(prevCourses => [...prevCourses, newCourse]);
      toast.success('Course added successfully');
    } catch (error) {
      console.error('Error adding course:', error);
      toast.error('Failed to add course');
    }
  };

  const deleteCourse = (id: string) => {
    try {
      setCourses(prevCourses => prevCourses.filter(course => course.id !== id));
      toast.success('Course deleted successfully');
    } catch (error) {
      console.error('Error deleting course:', error);
      toast.error('Failed to delete course');
    }
  };

  const updateCourse = (id: string, courseData: Partial<Course>) => {
    try {
      setCourses(prevCourses => 
        prevCourses.map(course => 
          course.id === id ? { ...course, ...courseData } : course
        )
      );
      toast.success('Course updated successfully');
    } catch (error) {
      console.error('Error updating course:', error);
      toast.error('Failed to update course');
    }
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        addCourse,
        deleteCourse,
        updateCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = (): CourseContextType => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
};