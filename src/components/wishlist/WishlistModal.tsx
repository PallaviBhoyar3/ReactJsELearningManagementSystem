import { X, Heart, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWishlist } from '../../contexts/WishlistContext';
import { useCart } from '../../contexts/CartContext';

type WishlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const WishlistModal = ({ isOpen, onClose }: WishlistModalProps) => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  if (!isOpen) return null;

  const handleAddToCart = (courseId: string) => {
    const course = wishlist.find(item => item.id === courseId);
    if (course) {
      addToCart(course);
      removeFromWishlist(courseId);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
              onClick={onClose}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-white rounded-lg max-w-md w-full p-6 mx-auto shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  Your Wishlist ({wishlist.length})
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {wishlist.length === 0 ? (
                <div className="py-8 text-center">
                  <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Your wishlist is empty</p>
                  <button
                    onClick={onClose}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100"
                  >
                    Explore Courses
                  </button>
                </div>
              ) : (
                <>
                  <div className="mt-4 max-h-60 overflow-y-auto">
                    <AnimatePresence>
                      {wishlist.map((course) => (
                        <motion.div 
                          key={course.id} 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.2 }}
                          className="flex justify-between items-center py-4 border-b"
                        >
                          <div className="flex items-center">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="h-16 w-16 object-cover rounded"
                            />
                            <div className="ml-3">
                              <h3 className="text-sm font-medium line-clamp-1">{course.title}</h3>
                              <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                              <p className="text-sm font-medium text-gray-900">
                                ${course.discountPrice || course.price}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleAddToCart(course.id)}
                              className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                              title="Add to cart"
                            >
                              <ShoppingCart className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => removeFromWishlist(course.id)}
                              className="p-1 text-red-500 hover:text-red-700 transition-colors"
                              title="Remove from wishlist"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={clearWishlist}
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                      Clear Wishlist
                    </button>
                    
                    <button
                      onClick={onClose}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WishlistModal;