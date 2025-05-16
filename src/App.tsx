import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Courses from './components/sections/Courses';
import Trainers from './components/sections/Trainers';
import SpecialOffers from './components/sections/SpecialOffers';
import Reviews from './components/sections/Reviews';
import Dashboard from './components/dashboard/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { CourseProvider } from './contexts/CourseContext';
import CourseList from './redux/CourseList';
import CartList from './redux/CartList';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  
  useEffect(() => {
    const handleHashChange = () => {
      setShowDashboard(window.location.hash === '#dashboard');
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <CourseProvider>
          <CartProvider>
            <WishlistProvider>
              <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
                <Navbar onDashboardClick={() => setShowDashboard(true)} />
                <main className="flex-grow">
                  {showDashboard ? (
                    <Dashboard />
                  ) : (
                    <>
                      <Hero />
                      <Courses />
                      {/* ==================================== */}
                      {/* <CourseList /> */}
                      {/* <CartList /> */}
                      {/* ==================================== */}
                      <Trainers />
                      <SpecialOffers />
                      <Reviews />
                    </>
                  )}
                </main>
                <Footer />
                <Toaster 
                  position="top-center"
                  toastOptions={{
                    duration: 3000,
                    style: {
                      background: '#363636',
                      color: '#fff',
                    },
                    success: {
                      iconTheme: {
                        primary: '#2563EB',
                        secondary: '#fff',
                      },
                    },
                    error: {
                      iconTheme: {
                        primary: '#EF4444',
                        secondary: '#fff',
                      },
                    },
                  }}
                />
              </div>
            </WishlistProvider>
          </CartProvider>
        </CourseProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;