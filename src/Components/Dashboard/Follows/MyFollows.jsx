import React from 'react';
import { MyFollowsList } from './MyFollowsList';
export const MyFollows = () => {
  return (
    <aside>
      <div className="bg-white p-4 rounded shadow ">
        <h3 className="text-xl font-semibold  mb-4">Search Users</h3>
        <form>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search for users..."
            aria-label="Search for users"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            // onclick="event.preventDefault()"
          >
            Search
          </button>
        </form>
        <h3 className="text-xl font-semibold mt-8 mb-2">Follows</h3>
        <MyFollowsList />
      </div>
    </aside>
  );
};
