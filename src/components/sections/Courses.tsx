import { useState } from 'react';
// import { 
//   // Star, 
//   Filter, 
//   // Bookmark, 
//   // BookmarkCheck 
// } from 'lucide-react';
import { courses } from '../../data/courses';
// import { useCart } from '../../contexts/CartContext';
import CourseCard from '../ui/CourseCard';
// import { useDispatch } from 'react-redux';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  // const [showFilters, setShowFilters] = useState(false);
  // const { addToCart } = useCart();
  
  const categories = ['All', 'Web Development', 'React JS', 'Frontend Development', 'Mobile Development'];
  
  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

    // const dispatch = useDispatch()

  return (
    <section id="courses" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Top Courses
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem minus distinctio eaque officia rerum?          </p>
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
          
          {/* <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button> */}
        </div>
        
        {/* {showFilters && (
          <div className="bg-white p-4 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>All Prices</option>
                <option>Free</option>
                <option>Under $50</option>
                <option>$50 - $100</option>
                <option>$100+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Level
              </label>
              <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>Any Duration</option>
                <option>Short (0-4 weeks)</option>
                <option>Medium (4-8 weeks)</option>
                <option>Long (8+ weeks)</option>
              </select>
            </div>
          </div>
        )} */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-400 hover:bg-orange-700 focus:outline-none">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;