import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Clock, Star, Award, FileText, Video, Settings } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import DashboardCourseCard from './DashboardCourseCard';
import { enrolledCourses } from '../../data/enrolledCourses';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('enrolled');
  
  const tabs = [
    { id: 'enrolled', label: 'My Courses', icon: BookOpen },
    { id: 'progress', label: 'In Progress', icon: Clock },
    { id: 'completed', label: 'Completed', icon: CheckCircle },
    { id: 'certificates', label: 'Certificates', icon: Award },
  ];
  
  const completedCourses = enrolledCourses.filter(course => course.progress === 100);
  const inProgressCourses = enrolledCourses.filter(course => course.progress < 100);
  
  const displayCourses = activeTab === 'enrolled' ? enrolledCourses : 
                        activeTab === 'progress' ? inProgressCourses :
                        activeTab === 'completed' ? completedCourses : [];

  const totalProgress = enrolledCourses.reduce((sum, course) => sum + course.progress, 0) / enrolledCourses.length;

// get cart items using Redux ================>
// const cartItems = useSelector((state) => console.log("======@ dashboard", state));
// console.log("cartItems", cartItems)
  // const dispatch = useDispatch();
  // console.log("dispatch", dispatch)

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Welcome back, {user?.name}!
          </motion.h1>
          <p className="text-gray-600">Track your progress & continue learning</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Enrolled</h3>
                <p className="text-2xl font-bold">{enrolledCourses.length} courses</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${totalProgress}%` }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Overall progress: {totalProgress.toFixed(0)}%</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Completed</h3>
                <p className="text-2xl font-bold">{completedCourses.length} courses</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(completedCourses.length / enrolledCourses.length) * 100}%` }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {((completedCourses.length / enrolledCourses.length) * 100).toFixed(0)}% of your courses completed
            </p>
          </motion.div>
          
        </div>
        
        {/* <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-4 text-sm font-medium whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    <Icon className={`h-5 w-5 mr-2 ${
                      activeTab === tab.id ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    {tab.label}
                    {tab.id === 'enrolled' && (
                      <span className="ml-2 bg-gray-100 text-gray-700 py-0.5 px-2 rounded-full text-xs">
                        {enrolledCourses.length}
                      </span>
                    )}
                    {tab.id === 'progress' && (
                      <span className="ml-2 bg-yellow-100 text-yellow-700 py-0.5 px-2 rounded-full text-xs">
                        {inProgressCourses.length}
                      </span>
                    )}
                    {tab.id === 'completed' && (
                      <span className="ml-2 bg-green-100 text-green-700 py-0.5 px-2 rounded-full text-xs">
                        {completedCourses.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="p-6">
            {displayCourses.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto h-12 w-12 text-gray-400">
                  {activeTab === 'enrolled' && <BookOpen className="h-12 w-12" />}
                  {activeTab === 'progress' && <Clock className="h-12 w-12" />}
                  {activeTab === 'completed' && <CheckCircle className="h-12 w-12" />}
                  {activeTab === 'certificates' && <Award className="h-12 w-12" />}
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No courses found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {activeTab === 'enrolled' && "You haven't enrolled in any courses yet."}
                  {activeTab === 'progress' && "You don't have any courses in progress."}
                  {activeTab === 'completed' && "You haven't completed any courses yet."}
                  {activeTab === 'certificates' && "You don't have any certificates yet."}
                </p>
                <div className="mt-6">
                  <a
                    href="#courses"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Browse Courses
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <DashboardCourseCard course={course} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div> */}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">Continue Learning</h3>
              {inProgressCourses.length > 0 ? (
                <div className="space-y-4">
                  {inProgressCourses.slice(0, 3).map((course) => (
                    <div key={course.id} className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="ml-4 flex-1">
                        <h4 className="font-medium text-gray-900">{course.title}</h4>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Last activity: 2 days ago</span>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-600 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <button className="ml-4 p-2 text-blue-600 hover:text-blue-800 transition-colors">
                        <Video className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">You don't have any courses in progress</p>
              )}
              
              {inProgressCourses.length > 3 && (
                <div className="mt-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View all in-progress courses
                  </button>
                </div>
              )}
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center p-2 hover:bg-gray-50 rounded-md text-gray-700 hover:text-blue-600 transition-colors">
                  <Settings className="h-5 w-5 mr-3 text-gray-400" />
                  <span>Profile Settings</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 hover:bg-gray-50 rounded-md text-gray-700 hover:text-blue-600 transition-colors">
                  <FileText className="h-5 w-5 mr-3 text-gray-400" />
                  <span>Purchase History</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 hover:bg-gray-50 rounded-md text-gray-700 hover:text-blue-600 transition-colors">
                  <Award className="h-5 w-5 mr-3 text-gray-400" />
                  <span>Certificates</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;