import React, { useEffect, useState } from 'react';
import { PostElement } from './PostElement';
export const ListPostsFromFollows = () => {
  const [postListData, setPostListData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/api/user/post/readall/all`)
      .then((res) => res.json())
      .then((data) => {
        setPostListData(data.result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      {postListData.map((element) => {
        return <PostElement key={element._id} props={element} />;
      })}
    </div>
  );
};
