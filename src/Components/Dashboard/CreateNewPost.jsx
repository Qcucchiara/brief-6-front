import React from 'react';
export const CreateNewPost = () => {
  return (
    <form className="bg-white p-4 rounded shadow mb-4">
      <textarea
        id="newpost"
        name="newpost"
        placeholder="What's on your mind?"
        aria-label="Create a new post"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        // onclick="event.preventDefault()"
      >
        Post
      </button>
    </form>
  );
};
