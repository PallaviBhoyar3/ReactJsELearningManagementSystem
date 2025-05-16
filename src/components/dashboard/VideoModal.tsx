import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
};

const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-white rounded-lg max-w-4xl w-full mx-auto shadow-xl overflow-hidden"
          >
            <div className="p-4 bg-gray-900 flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="relative pt-[56.25%]">
              <iframe
                src={videoUrl}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default VideoModal;