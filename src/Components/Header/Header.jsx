import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';

export const Header = () => {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState(() => {
    const token = window.localStorage.getItem('token');
    return token ? true : false;
  });
  const [headerElements, setHeaderElements] = useState([]);

  useEffect(() => {
    if (isLogin) {
      setHeaderElements(
        <>
          <li>
            <Button
              className="bg-grey-500 text-white py-2 px-4 rounded hover:bg-grey-700"
              name={'Dashboard'}
            />
          </li>
          <li>
            <Button
              className="bg-grey-500 text-white py-2 px-4 rounded hover:bg-grey-700"
              name={'Profile'}
            />
          </li>
        </>
      );
    }
  }, [isLogin]);
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Social Network</div>
        <ul className="flex space-x-4">
          {headerElements}
          <li>
            <Button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              name={'Logout'}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};
