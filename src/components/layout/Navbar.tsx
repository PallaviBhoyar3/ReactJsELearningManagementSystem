import { useState, useEffect, Fragment } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { ShoppingCart, Menu, X, LogIn, UserCircle, LogOut, Heart, Bookmark, BookOpen } from 'lucide-react';
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import LoginModal from '../auth/LoginModal';
import SignupModal from '../auth/SignupModal';
import CartModal from '../cart/CartModal';
import WishlistModal from '../wishlist/WishlistModal';

type NavbarProps = {
  onDashboardClick?: () => void;
};

const Navbar = ({ onDashboardClick }: NavbarProps) => {
  const { user, isAuthenticated, logout } = useAuth();
  const { getItemCount } = useCart();
  const { wishlist } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openLoginModal = () => {
    setSignupModalOpen(false);
    setLoginModalOpen(true);
    setMobileMenuOpen(false);
  };

  const openSignupModal = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(true);
    setMobileMenuOpen(false);
  };

  const toggleCartModal = () => {
    setCartModalOpen(!cartModalOpen);
    setMobileMenuOpen(false);
  };

  const toggleWishlistModal = () => {
    setWishlistModalOpen(!wishlistModalOpen);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
  };

  const handleDashboardClick = () => {
    if (onDashboardClick) {
      onDashboardClick();
    }
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
    window.location.hash = 'dashboard';
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Special Offers', href: '#special-offers' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <motion.h1 
                  className="text-2xl font-bold text-orange-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ELearning
                </motion.h1>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-200"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <motion.button 
                onClick={toggleWishlistModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Heart className="h-6 w-6" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </motion.button>
              
              <motion.button 
                onClick={toggleCartModal} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-600 rounded-full">
                    {getItemCount()}
                  </span>
                )}
              </motion.button>
              
              {isAuthenticated ? (
                <div className="relative">
                  <motion.button 
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <UserCircle className="h-6 w-6 mr-1" />
                    <span>{user?.name}</span>
                  </motion.button>
                  <Transition
                    show={userMenuOpen}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <button
                        onClick={handleDashboardClick}
                        className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <BookOpen className="h-5 w-5 mr-2" />
                        My Dashboard
                      </button>
                      <button
                        onClick={handleLogout}
                        className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="h-5 w-5 mr-2" />
                        Logout
                      </button>
                    </div>
                  </Transition>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <motion.button
                    onClick={openLoginModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-3 py-1.5 border border-orange-600 text-sm font-medium rounded-md text-orange-600 hover:bg-orange-50 transition-colors"
                  >
                    <LogIn className="h-4 w-4 mr-1" />
                    Login
                  </motion.button>
                  <motion.button
                    onClick={openSignupModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-orange-400 hover:bg-orange-600 transition-colors"
                  >
                    Sign Up
                  </motion.button>
                </div>
              )}
            </div>

            <div className="flex items-center md:hidden">
              <button 
                onClick={toggleWishlistModal} 
                className="relative p-2 mr-2 text-gray-600"
              >
                <Heart className="h-6 w-6" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button 
                onClick={toggleCartModal} 
                className="relative p-2 mr-2 text-gray-600"
              >
                <ShoppingCart className="h-6 w-6" />
                {getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-600 rounded-full">
                    {getItemCount()}
                  </span>
                )}
              </button>
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <Transition
          show={mobileMenuOpen}
          enter="transition-opacity duration-200 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <UserCircle className="h-10 w-10 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user?.name}</div>
                      <div className="text-sm font-medium text-gray-500">{user?.email}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <button
                      onClick={handleDashboardClick}
                      className="flex w-full px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    >
                      <BookOpen className="h-5 w-5 mr-2" />
                      My Dashboard
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex w-full px-4 py-2 text-base font-medium text-gray-700 hover:text-orange-400 hover:bg-orange-50"
                    >
                      <LogOut className="h-5 w-5 mr-2" />
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-around px-4">
                  <button
                    onClick={openLoginModal}
                    className="flex items-center px-4 py-2 text-base font-medium text-blue-600 hover:text-blue-800"
                  >
                    <LogIn className="h-5 w-5 mr-1" />
                    Login
                  </button>
                  <button
                    onClick={openSignupModal}
                    className="flex items-center px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </Transition>
      </motion.nav>

      {/* Modals */}
      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={() => setLoginModalOpen(false)}
        onSignupClick={() => {
          setLoginModalOpen(false);
          setSignupModalOpen(true);
        }}
      />
      
      <SignupModal 
        isOpen={signupModalOpen} 
        onClose={() => setSignupModalOpen(false)}
        onLoginClick={() => {
          setSignupModalOpen(false);
          setLoginModalOpen(true);
        }}
      />
      
      <CartModal 
        isOpen={cartModalOpen} 
        onClose={() => setCartModalOpen(false)} 
      />

      <WishlistModal
        isOpen={wishlistModalOpen}
        onClose={() => setWishlistModalOpen(false)}
      />
    </>
  );
};

export default Navbar;