import React, {useState, useEffect} from 'react';
import { courses } from '../../data/courses';
import { Clock, Tag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import CourseCard from '../ui/CourseCard';

const SpecialOffers = () => {
  const specialOffers = courses.filter(course => course.isSpecialOffer);
  const { addToCart } = useCart();
  
  // Calculate days until offer ends (simulated)
  const daysRemaining = 3;
  const hoursRemaining = 21;
  const minutesRemaining = 45;


  // ================================================================

  const initialTime = 3 * 3600 + 2 * 60 + 10; // 1 hour, 2 minutes, 10 seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if(timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);


const hours = Math.floor(timeLeft / 3600);
const minutes = Math.floor((timeLeft % 3600) / 60); 
const seconds = timeLeft % 60;
const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

// console.log("formattedTime", formattedTime);


  return (
    <section id="special-offers" className="py-16 bg-gradient-to-r from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Limited Time Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Special Discounts Just For You
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Grab these high-rated courses at unbelievable prices before they're gone.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-orange-500 mr-2" />
              <span className="text-lg font-semibold text-gray-900">
                Offer ends in:
              </span>
            </div>
            <div className="flex justify-center space-x-4 text-center">
              {/* <div className="flex flex-col">
                <div className="text-3xl font-bold bg-gray-900 text-white rounded-lg w-16 h-16 flex items-center justify-center">
                  {daysRemaining}
                </div>
                <span className="text-sm text-gray-600 mt-1">Days</span>
              </div> */}
              <div className="flex flex-col">
                <div className="text-3xl font-bold bg-gray-900 text-white rounded-lg w-16 h-16 flex items-center justify-center">
                  {/* {hoursRemaining} */}
                  {String(hours).padStart(2, '0')}
                </div>
                <span className="text-sm text-gray-600 mt-1">Hours</span>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold bg-gray-900 text-white rounded-lg w-16 h-16 flex items-center justify-center">
                  {/* {minutesRemaining} */}
                  {String(minutes).padStart(2, '0')}
                </div>
                <span className="text-sm text-gray-600 mt-1">Minutes</span>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold bg-gray-900 text-white rounded-lg w-16 h-16 flex items-center justify-center">
                  {/* {minutesRemaining} */}
                  {String(seconds).padStart(2, '0')}
                </div>
                <span className="text-sm text-gray-600 mt-1">Seconds</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default SpecialOffers;