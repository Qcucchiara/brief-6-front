import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { UserHeader } from './UserHeader';
import { AdminHeader } from './AdminHeader';
import { GuestHeader } from './GuestHeader';

export const Header = ({ userRole }) => {
  const { push } = useRouter();

  const [headerElements, setHeaderElements] = useState([]);
  useEffect(() => {
    if (userRole === 'admin') {
      setHeaderElements(<AdminHeader />);
    } else if (userRole === 'user') {
      setHeaderElements(<UserHeader />);
    } else {
      setHeaderElements(<GuestHeader />);
    }
  }, [userRole]);

  // useEffect(() => {
  //   if (isLogin) {
  //     setHeaderElements();
  //   }
  // }, [isLogin]);
  return <nav className="bg-white shadow-md">{headerElements}</nav>;
};
