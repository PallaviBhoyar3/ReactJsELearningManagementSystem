import { X, ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { items, removeFromCart, getTotalPrice, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  
  if (!isOpen) return null;

  const handleCheckout = () => {
    // In a real app, this would redirect to a checkout page or process
    alert('Proceeding to checkout!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg max-w-md w-full p-6 mx-auto shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Your Cart ({items.length})
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {items.length === 0 ? (
            <div className="py-8 text-center">
              <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <button
                onClick={onClose}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="mt-4 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.course.id} className="flex justify-between items-center py-4 border-b">
                    <div className="flex items-center">
                      <img
                        src={item.course.image}
                        alt={item.course.title}
                        className="h-16 w-16 object-cover rounded"
                      />
                      <div className="ml-3">
                        <h3 className="text-sm font-medium">{item.course.title}</h3>
                        <p className="text-sm text-gray-500">Instructor: {item.course.instructor}</p>
                        <p className="text-sm font-medium text-gray-900">
                          ${item.course.discountPrice || item.course.price}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.course.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${getTotalPrice().toFixed(2)}</p>
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={clearCart}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                  >
                    Clear Cart
                  </button>
                  
                  <button
                    onClick={handleCheckout}
                    disabled={!isAuthenticated}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAuthenticated ? 'Checkout' : 'Login to Checkout'}
                  </button>
                </div>
                
                {!isAuthenticated && (
                  <p className="text-xs text-red-500">Please login to complete your purchase</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;