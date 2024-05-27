/* eslint-disable @next/next/no-img-element */
'use client';
import { CreateNewPost } from '@/Components/Dashboard/CreateNewPost';
import { ListPostsFromFollows } from '@/Components/Dashboard/Feed/ListPostsFromFollows';
import { MyFollows } from '@/Components/Dashboard/Follows/MyFollows';
import { Header } from '@/Components/Header/Header';
import { ListPostUser } from '@/Components/Profile/ListPost/ListPostUser';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home({ params }) {
  const [userData, setUserData] = useState({});
  const imageSource = `http://localhost:3001/uploads/${userData.imageName}`;

  useEffect(() => {
    const userId = params.userId;
    fetch(`http://localhost:3001/api/user/readuser/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [params]);
  return (
    <>
      <Header userRole={userData.role} />
      <main className="container mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <img
              src={imageSource}
              alt="Profile image"
              className="rounded-full mr-4 w-24 h-24"
            />
            <div>
              <h2 className="text-2xl font-bold">{userData.username}</h2>
              <p className="text-gray-600">@{userData.username}</p>
            </div>
          </div>
          <div className="mb-4">
            <p>
              <strong>First Name:</strong>
              {userData.firstName}
            </p>
            <p>
              <strong>Last Name:</strong>
              {userData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
          </div>
          <div className="flex space-x-4 mb-6">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Edit Profile
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
              Change Password
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
              Delete Account
            </button>
          </div>

          <h3 className="text-xl font-semibold mb-4">User&apos;s Posts</h3>
          <ListPostUser userId={userData.id} />
        </div>
      </main>
    </>
  );
}
