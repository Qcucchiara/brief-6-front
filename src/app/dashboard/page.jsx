'use client';
import { CreateNewPost } from '@/Components/Dashboard/CreateNewPost';
import { ListPostsFromFollows } from '@/Components/Dashboard/Feed/ListPostsFromFollows';
import { MyFollows } from '@/Components/Dashboard/Follows/MyFollows';
import { Header } from '@/Components/Header/Header';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // const userId = params.userId;
    fetch(`http://localhost:3001/api/user/readuser/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId]);
  return (
    <>
      <Header userRole={userData.role} />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <section className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            {/* <h3 className="text-xl font-semibold mb-2">Welcome, User!</h3> */}
            <p className="mb-6">
              Here&apos;s what&apos;s happening in your network.
            </p>

            <h3 className="text-xl font-semibold mb-2">Create a New Post</h3>
            <CreateNewPost />
            <h3 className="text-xl font-semibold mb-2">Feed</h3>
            <ListPostsFromFollows />
          </section>
          <MyFollows />
        </div>
      </main>
    </>
  );
}
