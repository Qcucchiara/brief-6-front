import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
export const AdminHeader = () => {
  const { push } = useRouter();
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));

  return (
    <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Social Network</div>
      <ul className="flex space-x-4">
        <li
          className=" flex items-center justify-center"
          onClick={() => {
            push('/dashboard');
          }}
        >
          <button href="#" className="hover:underline">
            Dashboard
          </button>
        </li>
        <li
          className=" flex items-center justify-center"
          onClick={() => {
            push('/profile/' + userId);
          }}
        >
          <button href="#" className="hover:underline text-center">
            Profile
          </button>
        </li>
        <li>
          <button
            href="#"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => {
              window.localStorage.removeItem('token');
              push('/');
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
