import React, { useState } from 'react';
import { Modal } from '../Modals/Modal';
import { Register } from '../Modals/Register';

export const GuestHeader = () => {
  const [modal, setModal] = useState();
  // TODO: faire une modale login / register
  return (
    <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Social Network</div>
      <ul className="flex space-x-4">
        <li>
          <button className=" text-center bg-gray-300 py-2 px-4 rounded hover:bg-gray-500">
            Login
          </button>
        </li>
        <li>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => {
              setModal(
                <Modal>
                  <Register />
                </Modal>
              );
            }}
          >
            Register
          </button>
        </li>
      </ul>
      {modal}
    </div>
  );
};
