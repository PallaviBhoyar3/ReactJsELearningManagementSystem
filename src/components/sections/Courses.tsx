import { useState } from 'react';
import { Star, Filter, Bookmark, BookmarkCheck, Plus } from 'lucide-react';
// import { useCart } from '../../contexts/CartContext';
import { useCourses } from '../../contexts/CourseContext';
import CourseCard from '../ui/CourseCard';
import AddCourseModal from '../courses/AddCourseModal';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  // const [showFilters, setShowFilters] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const { courses } = useCourses();
  
  const categories = ['All', 'Web Development', 'FrontEnd Development', 'ReactJS', 'Mobile Development'];
  
  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section id="courses" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Courses
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, exercitationem!          </p>
        </div>
        
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex overflow-x-auto pb-2 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0 space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex space-x-2">
            {/* <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button> */}
            
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-orange-400 hover:bg-orange-600"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Course
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-400 hover:bg-orange-600 focus:outline-none">
            View All Courses
          </button>
        </div>
      </div>

      <AddCourseModal 
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </section>
  );
};

export default Courses;