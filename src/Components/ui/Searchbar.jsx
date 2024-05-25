import React from 'react';
export const Searchbar = ({ placeholder, children }) => {
  return (
    <form>
      <input
        type="text"
        name="search"
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        required
      />
      {children}
    </form>
  );
};
