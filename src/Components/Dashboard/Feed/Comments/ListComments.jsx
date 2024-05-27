import React from 'react';
import { CommentElement } from './CommentElement';
export const ListComments = ({ comments }) => {
  // TODO: si comments est undefined, remplacer ça par le formulaire de NewPost
  return (
    <div className="mt-4" id="comments1">
      {comments.map((element) => {
        return <CommentElement key={element.commentId} props={element} />;
      })}
    </div>
  );
};
