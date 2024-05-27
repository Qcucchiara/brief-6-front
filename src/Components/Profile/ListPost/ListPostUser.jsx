import React, { useEffect, useState } from 'react';
import { PostUserElement } from './PostUserElement';
export const ListPostUser = ({ userId }) => {
  // TODO: si la liste == 0, remplacer la liste par le component CreateNewPost || un lien qui redirige vers le dashboard
  const [listPostData, setListPostData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/api/user/post/readall/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setListPostData(data.result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId]);

  return (
    <>
      {listPostData.map((element) => {
        return <PostUserElement key={element._id} props={element} />;
      })}
    </>
  );
};
