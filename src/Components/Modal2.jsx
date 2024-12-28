import React from 'react'
import { HiX } from "react-icons/hi";

const Modal2 = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;


  return (
        <div
      
          className="fixed inset-0  bg-gray-800  backdrop-blur-sm bg-opacity-50 z-50 flex items-center justify-center "
          onClick={onClose} // Close modal on background click
        >
          <div 
            data-aos="fade-up" 
            className="bg-zinc-800 rounded-lg p-3 border-2 border-zinc-300 b_glow  max-w-xl w-full mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            
            {/* Modal Header */}
            <div className="relative flex items-center mb-3 ">
              <h2 className="text-3xl text-zinc-100 font-bold mx-auto">{title}</h2>
              <button 
                onClick={onClose}
                className="absolute right-0 text-zinc-500 hover:text-white transition"
              >
                <HiX size={24} />
              </button>
            </div>

    
            {/* Modal Body */}
            <div className="text-zinc-300 ">
              {children}
            </div>
    
          </div>
        </div>
  )
}

export default Modal2