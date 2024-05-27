import React, { useEffect, useState } from 'react';
export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gdpr, setGdpr] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    let newUser = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      image: image,
      email: email,
      password: password,
      gdpr: gdpr,
    };

    let formdata = new FormData();

    formdata.append('firstName', firstName);
    formdata.append('lastName', lastName);
    formdata.append('username', username);
    formdata.append('image', image);
    formdata.append('email', email);
    formdata.append('password', password);
    formdata.append('gdpr', gdpr);
    let request = {
      method: 'POST',

      // body: JSON.stringify(newUser),
      body: formdata,
    };
    let apiRequest = await fetch(
      'http://localhost:3001/api/guest/register',
      request
    );
    let result = await apiRequest.json();
    console.log(result);
  }
  useEffect(() => {
    console.log({
      firstName: firstName,
      lastName: lastName,
      username: username,
      image: image,
      email: email,
      password: password,
      gdpr: gdpr,
    });
  }, [firstName, lastName, username, image, email, password, gdpr]);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form>
        <div className="mb-4">
          <label
            for="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            for="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            for="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            for="profileImage"
            className="block text-sm font-medium text-gray-700"
          >
            Profile Image
          </label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => {
              console.log(e);
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            for="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            for="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="gdpr"
            name="gdpr"
            className="mr-2"
            onChange={(e) => setGdpr(e.target.value)}
          />
          <label for="gdpr" className="text-sm font-medium text-gray-700">
            I agree to the GDPR policy
          </label>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};
