import { ListComments } from '@/Components/Dashboard/Feed/Comments/ListComments';
import React, { useEffect, useState } from 'react';
export const PostUserElement = ({ props }) => {
  const [displayComments, setDisplayComments] = useState(false);
  const [commentsPost, setCommentsPost] = useState([]);
  const [isEdited, setIsEdited] = useState();

  useEffect(() => {
    if (props.createdAt !== props.updatedAt) {
      setIsEdited(<span className="text-red-500">(Edited)</span>);
    } else {
      setIsEdited([]);
    }
  }, [props]);

  useEffect(() => {
    if (displayComments === true) {
      setCommentsPost(<ListComments comments={props.comments} />);
    } else {
      setCommentsPost([]);
    }
  }, [props.comments, displayComments]);

  // TODO: mettre l'endpoint qui permet de modifier un post

  return (
    <article className="bg-gray-100 p-4 rounded shadow mb-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="font-semibold">Date of publication {isEdited}</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-700">
            Edit
          </button>
          <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
      <p className="mb-4">{props.content}</p>
      <div className="flex space-x-4">
        <button className="bg-gray-200 py-1 px-4 rounded hover:bg-gray-300">
          Like ({props.likes.length})
        </button>
        <button
          className="bg-gray-200 py-1 px-4 rounded hover:bg-gray-300"
          onClick={() => {
            if (displayComments) {
              setDisplayComments(false);
            } else {
              setDisplayComments(true);
            }
          }}
        >
          Comment ({props.comments.length})
        </button>
      </div>
      {commentsPost}
    </article>
  );
};
