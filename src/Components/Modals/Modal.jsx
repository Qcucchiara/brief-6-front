import React from 'react';

export const Modal = ({ children }) => {
  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
      id="registerModal"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        {children}
      </div>
    </div>
  );
};
