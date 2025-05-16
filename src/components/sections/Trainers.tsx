import { trainers } from '../../data/trainers';
import { Users, Award, BookOpen } from 'lucide-react';

const Trainers = () => {
  return (
    <section id="trainers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Learn from Experts
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, adipisci.          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                    <p className="text-blue-200">{trainer.title}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="mb-4">
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(trainer.rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{trainer.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {trainer.bio}
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center text-blue-600 mb-1">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span className="font-semibold">{trainer.courses}</span>
                      </div>
                      <p className="text-xs text-gray-500">Courses</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center text-blue-600 mb-1">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="font-semibold">{trainer.students.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-500">Students</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {trainer.expertise.slice(0, 3).map((skill, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      {skill}
                    </span>
                  ))}
                  {trainer.expertise.length > 3 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      +{trainer.expertise.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Trainers;