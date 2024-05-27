import React from 'react';
export const CommentElement = ({ props }) => {
  return (
    <div className="border-t mt-4 pt-4">
      <div className="flex items-center mb-2">
        <p className="font-semibold">{props.username}</p>
        <p className="text-gray-600 text-sm ml-2">
          {/* Comment date */}
          {/* <span className="text-red-500">(Edited)</span> */}
        </p>
      </div>
      <p className="mb-4">{props.content}</p>
    </div>
  );
};
