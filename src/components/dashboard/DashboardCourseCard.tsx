import { motion } from 'framer-motion';
import { Play, BookOpen, Clock, CheckCircle, Award } from 'lucide-react';
import { EnrolledCourse } from '../../types';

type DashboardCourseCardProps = {
  course: EnrolledCourse;
};

const DashboardCourseCard = ({ course }: DashboardCourseCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-40 object-cover"
        />
        {course.progress === 100 && (
          <div className="absolute top-0 right-0 bg-green-500 text-white py-1 px-3 text-xs font-semibold">
            COMPLETED
          </div>
        )}
        <button className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
            <Play className="h-5 w-5 text-white" fill="white" />
          </div>
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
            {course.title}
          </h3>
          {course.progress === 100 && (
            <Award className="h-5 w-5 text-yellow-400" />
          )}
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <BookOpen className="h-4 w-4 mr-1" />
          <span>{course.lessonsCompleted} of {course.totalLessons} lessons completed</span>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`h-full rounded-full ${
                course.progress === 100 
                  ? 'bg-green-500' 
                  : course.progress > 50 
                    ? 'bg-blue-600' 
                    : 'bg-orange-500'
              }`}
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>Last activity: 2 days ago</span>
          </div>
          
          <button className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">
            {course.progress === 100 ? (
              <>
                <CheckCircle className="h-3 w-3 mr-1" />
                Completed
              </>
            ) : (
              <>
                <Play className="h-3 w-3 mr-1" fill="currentColor" />
                Continue
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardCourseCard;