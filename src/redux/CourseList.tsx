// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemCart } from './slices/cartSlice';
import course1 from "../assets/course1.jpeg";
import course2 from "../assets/course2.jpeg";
import course3 from "../assets/course3.jpeg";
import course4 from "../assets/course4.jpeg";

// Define product type
interface Product {
  id: number;
  name: string;
  price: string; // Keep as string if you use $ sign, or use number if calculations are needed
  image: string;
}

 export default function CourseList(): JSX.Element {
  const dispatch = useDispatch();

  const products: Product[] = [
    {
      id: 1,
      name: 'Frontend Development',
      price: '$20',
      image: course1,
    },
    {
      id: 2,
      name: 'Web Development Course',
      price: '$30',
      image: course2,
    },
    {
      id: 3,
      name: 'Mobile Application Development',
      price: '$40',
      image: course3,
    },
    {
      id: 4,
      name: 'UI/UX Development',
      price: '$40',
      image: course4,
    },
  ];

  // Handlers for button actions
  const handleAddToCart = (productName: string, price: string) => {
    console.log("handle Add to cart");
    dispatch(addItemCart({ product: productName, price }));
  };

  return (
    <div className="p-6">
  <div className="flex flex-wrap gap-6 justify-center">
    {products.map((product) => (
      <div
        key={product.id}
        className="w-52 border border-gray-300 rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow duration-300"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover rounded-md mb-3"
        />
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-gray-600 mb-3">{product.price}</p>
        <button
          onClick={() => handleAddToCart(product.name, product.price)}
          className="bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4 rounded transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>
  );
}
