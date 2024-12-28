import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { CiCircleRemove } from "react-icons/ci";

const Modal = ({ success, error, onClose }) => {
  if (!success && !error) return null; // Don't render the modal if there are no messages
  
  
  return (
    <div className="fixed inset-0  bg-gray-800  backdrop-blur-sm bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center items-center ">
          {success && <CiCircleCheck className='text-6xl font-semibold text-orange-500'/>}
          {error && <CiCircleRemove className='text-6xl font-semibold text-fuchsia-500'/>}
          {/* <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            &times;
          </button> */}
        </div>
        <div className="mt-4 text-center text-xl font-semibold text-black">
          {success && <p className="">Thank you for reaching out! We’ve received your message and will get back to you shortly.</p>}
          {error && <p className="">{error}</p>}
        </div>
        <div className="mt-5 text-center">
          <button
            onClick={onClose}
            className="bg-fuchsia-600 text-white py-2 px-4 rounded hover:bg-fuchsia-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
