import { Star, ShoppingCart, Bookmark, BookmarkCheck, Heart } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Course } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import toast from 'react-hot-toast';

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => {
  const [saved, setSaved] = useState(false);
  const { addToCart, isInCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isCourseInCart = isInCart(course.id);
  const isCourseInWishlist = isInWishlist(course.id);

  const handleSave = () => {
    setSaved(!saved);
    toast.success(!saved ? 'Course bookmarked' : 'Bookmark removed');
  };

  const handleWishlist = () => {
    if (isCourseInWishlist) {
      removeFromWishlist(course.id);
    } else {
      addToWishlist(course);
    }
  };

  const handleAddToCart = () => {
    if (!isCourseInCart) {
      addToCart(course);
      toast.success('Added to cart');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWishlist}
            className={`p-2 rounded-full shadow-md ${
              isCourseInWishlist ? 'bg-red-50' : 'bg-white'
            }`}
          >
            <Heart className={`h-5 w-5 ${
              isCourseInWishlist ? 'text-red-500 fill-red-500' : 'text-gray-600'
            }`} />
          </motion.button>
          {/* <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSave}
            className={`p-2 bg-white rounded-full shadow-md ${
              saved ? 'bg-blue-50' : 'bg-white'
            }`}
          >
            {saved ? (
              <BookmarkCheck className="h-5 w-5 text-blue-600" />
            ) : (
              <Bookmark className="h-5 w-5 text-gray-600" />
            )}
          </motion.button> */}
        </div>
        {course.isSpecialOffer && (
          <motion.div 
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="absolute top-0 left-0 bg-gradient-to-r from-orange-500 to-orange-400 text-white py-1 px-3 text-xs font-semibold"
          >
            SPECIAL OFFER
          </motion.div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-1 hover:text-blue-600 transition-colors">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Instructor: {course.instructor}
            </p>
          </div>
        </div>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-900">{course.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-600">{course.studentsEnrolled.toLocaleString()} students</span>
        </div>
        
        <div className="flex items-center text-sm mb-3">
          <span className={`px-2 py-1 rounded-full mr-2 ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
          <span className="text-gray-600">{course.duration}</span>
        </div>
        
        <p className="text-gray-700 line-clamp-2 mb-4">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-end">
            {course.discountPrice ? (
              <>
                <span className="text-xl font-bold text-gray-900">${course.discountPrice}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">${course.price}</span>
              </>
            ) : (
              <span className="text-xl font-bold text-gray-900">${course.price}</span>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={isCourseInCart}
            className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white transition-colors ${
              isCourseInCart 
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-orange-400 hover:bg-orange-700'
            }`}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            {isCourseInCart ? 'In Cart' : 'Add to Cart'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;