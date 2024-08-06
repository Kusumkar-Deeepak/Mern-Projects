// import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({ username }) => {
  return (
    <header className="w-full py-5 flex justify-between items-center px-10 bg-gray-800">
      <div className="text-white text-xl font-bold">
        Welcome, {username}
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/posts" className="text-blue-400 hover:underline">All Posts</Link>
          </li>
          <li>
            <Link to="/create-post" className="text-blue-400 hover:underline">Create Post</Link>
          </li>
          <li>
            <Link to="/profile" className="text-blue-400 hover:underline">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
