// import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <header className="w-full py-5 flex justify-between items-center px-10 bg-gray-800">
        <div className="flex items-center">
          {/* <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" /> */}
          <h1 className="text-1xl font-bold">DevConnector By Deepak!!</h1>
        </div>
        <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </Link>
      </header>
      <main className="flex flex-col items-center mt-10">
        <section className="text-center max-w-2xl mb-10">
          <h2 className="text-4xl font-bold mb-5">🌟Welcome to DevConnector🌟</h2>
          <p className="mb-5">
            This platform allows developers to connect, share their work, and collaborate on projects. Join us and be a part of a thriving developer community.
          </p>
          <ul className="text-center list-none pl-5">
            <li>Login as a developer and showcase your portfolio.</li>
            <li>Connect with other developers to share ideas and projects.</li>
            <li>Collaborate on open-source projects and learn from others.</li>
          </ul>
        </section>
        <section className="text-center max-w-2xl mb-10">
          <h2 className="text-2xl font-bold mb-5">Access the Project on GitHub</h2>
          <p className="mb-5">
            To access the source code, documentation, and contribute to the project, please visit the GitHub page.
          </p>
          <a href="https://github.com/your-github-repo" className="text-blue-400 underline">View DevConnector on GitHub</a>
        </section>
        <section className="text-center max-w-2xl mb-10">
          <h2 className="text-2xl font-bold mb-5">Login and Sign Up</h2>
          <p className="mb-5">Register with a valid email, verify your email, and start using DevConnector.</p>
          <div className="flex space-x-5 justify-center">
            <Link to="/login" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Login
            </Link>
            <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </Link>
          </div>
        </section>
        <section className="text-center max-w-2xl mb-10">
          <h2 className="text-2xl font-bold mb-5">What I Learned</h2>
          <ul className="text-left list-disc pl-5">
            <li>Role-based JWT authentication and authorization</li>
            <li>Encrypted passwords and email verification</li>
            <li>Logging actions and requests</li>
            <li>Forgot/reset password functionality</li>
            <li>Googles ReCaptcha implementation</li>
            <li>Auto-expire MongoDB documents</li>
          </ul>
        </section>
        <section className="text-center max-w-2xl mb-10">
          <h2 className="text-2xl font-bold mb-5">Conditions and Rules</h2>
          <p className="mb-5">
            As this project is hosted on a free server (Render), please be patient while it loads the data (free instance will spin down with inactivity, which can delay requests by 50 seconds or more). Also, we are using the free tier of MongoDB Atlas for storing data. Therefore, all data will be deleted after every 2 days.
          </p>
        </section>
      </main>
      <footer className="w-full py-5 bg-gray-800 text-center">
        <p>&copy; 2024 DevConnector by Deepak. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
