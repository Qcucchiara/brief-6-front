/* eslint-disable @next/next/no-img-element */
'use client';
import { Header } from '@/Components/Header/Header';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Home({ params }) {
  const { push } = useRouter();
  const [idStorage, setIdStorage] = useState();
  const [isValide, setIsValide] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:3001/api/guest/valide/${params.cleanToken}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result === 'valide user') {
          setIsValide(true);
          setIdStorage(localStorage.setItem('userId', data.userId));
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    if (isValide === true) {
      idStorage;
      push('/dashboard');
    }
  }, [idStorage, params.cleanToken, isValide, push]);
  return <></>;
}
