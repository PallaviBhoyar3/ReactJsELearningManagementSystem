import { useState } from 'react';
import { X } from 'lucide-react';
// import { useCourses } from '../../contexts/CourseContext';
// import toast from 'react-hot-toast';

type ShowVideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ShowVideoModal = ({ isOpen, onClose }: ShowVideoModalProps) => {
  // const { addCourse } = useCourses();
  
  // const [loading, setLoading] = useState(false);
 if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg max-w-2xl w-full p-6 mx-auto shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Video</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default ShowVideoModal;