import { useState } from 'react';
import { Search } from 'lucide-react';
import BannerImg from "../../assets/banner.jpg"

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would search courses
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Skills with Expert-Led Courses
            </h1>
            <p className="text-xl text-blue-100">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur nobis hic quis natus dolorum quibusdam sit exercitationem consectetur eum.            </p>
           
            <div className="flex flex-wrap gap-2 text-sm">
              <p className="text-blue-100 mr-2">Popular:</p>
              {['Web Development', 'FrontEnd Development', 'React Native', 'React Js'].map((tag) => (
                <button
                  key={tag}
                  className="bg-orange-300 hover:bg-orange-600 rounded-full px-3 py-1 transition-colors duration-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src={BannerImg}
                alt="Student learning online"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-semibold">Featured Course</p>
                    <h3 className="text-white text-xl font-bold">Complete Web Development Bootcamp</h3>
                  </div>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">$89.99</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 -bottom-6 -left-6 bg-blue-500 rounded-lg -z-10"></div>
          </div>
        </div>
        
        <div className="mt-16 pt-6 border-t border-blue-500 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold">1M+</p>
            <p className="text-blue-100">Students</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold">1,000+</p>
            <p className="text-blue-100">Courses</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold">50+</p>
            <p className="text-blue-100">Expert Instructors</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold">4.8</p>
            <p className="text-blue-100">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;