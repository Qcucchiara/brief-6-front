/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { ListComments } from './Comments/ListComments';
export const PostElement = ({ props }) => {
  const [imageSource, setImageSource] = useState(
    `http://localhost:3001/uploads/${props.userImage}`
  );
  const [commentsListData, setCommentsListData] = useState(props.comments);
  const [displayComments, setDisplayComments] = useState(false);
  const [listComments, setListComments] = useState([]);

  return (
    <article className="bg-white p-4 rounded shadow mb-4">
      <div className="flex items-center mb-4 w-full">
        <img
          src={imageSource}
          alt="Profile image"
          className="rounded-full mr-4 w-12 h-12"
        />
        <div className="w-full">
          <p className="font-semibold">
            {props.userUsername || 'Username'}
            <button className="bg-blue-500 text-white py-1 px-2 rounded text-sm ml-2 hover:bg-blue-700">
              Follow
            </button>
          </p>
          <p className="text-gray-600 text-sm">
            {new Date(props.createdAt).toLocaleDateString('fr')}{' '}
            <span className="text-red-500">(Edited)</span>
          </p>
        </div>
      </div>
      <p className="mb-4">{props.content}</p>
      <div className="flex space-x-4">
        <button className="bg-gray-200 py-1 px-4 rounded hover:bg-gray-300">
          Like
        </button>
        <button
          className="bg-gray-200 py-1 px-4 rounded hover:bg-gray-300"
          onClick={() => {
            if (displayComments === false) {
              setDisplayComments(true);
              setListComments(<ListComments comments={commentsListData} />);
            } else {
              setDisplayComments(false);
              setListComments([]);
            }
          }}
        >
          Comment
        </button>
      </div>
      {listComments}
    </article>
  );
};
