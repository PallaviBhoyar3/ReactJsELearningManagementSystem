import { useState } from 'react';
import { reviews } from '../../data/reviews';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };
  
  const prevReview = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              Student Testimonials
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Students Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who have achieved their goals with our courses.
          </p>
        </div>
        
        <div className="relative bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-3">
            <div className="bg-orange-400 py-10 px-6 lg:px-8 lg:py-16">
              <div className="lg:min-h-[25rem] flex flex-col justify-between">
                <div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < Math.floor(reviews[activeIndex].rating) 
                            ? 'text-yellow-400' 
                            : 'text-gray-300'
                        } fill-current`}
                      />
                    ))}
                  </div>
                  <div className="relative">
                    <svg className="h-12 w-12 text-blue-400 opacity-25" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative mt-6 text-xl font-medium text-white">
                      {reviews[activeIndex].content}
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={reviews[activeIndex].user.image}
                      alt={reviews[activeIndex].user.name}
                    />
                    <div className="ml-4">
                      <div className="text-lg font-medium text-white">
                        {reviews[activeIndex].user.name}
                      </div>
                      <div className="text-blue-200">
                        {reviews[activeIndex].user.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-2">
              <div className="px-6 py-10 lg:px-8 lg:py-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  More Student Successes
                </h3>
                
                <div className="space-y-8">
                  {reviews.filter((_, i) => i !== activeIndex).slice(0, 2).map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
                      <div className="flex items-center mb-3">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < Math.floor(review.rating) 
                                  ? 'text-yellow-400' 
                                  : 'text-gray-300'
                              } fill-current`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-900">
                          {review.rating}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">
                          {review.course}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-3">
                        {review.content}
                      </p>
                      <div className="flex items-center">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src={review.user.image}
                          alt={review.user.name}
                        />
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            {review.user.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {review.user.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={prevReview}
                    className="p-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50 focus:outline-none mr-4"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex space-x-2">
                    {reviews.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-2 h-2 rounded-full ${
                          activeIndex === i ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextReview}
                    className="p-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50 focus:outline-none ml-4"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;