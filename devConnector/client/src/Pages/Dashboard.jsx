import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar username={auth.user?.name} />
      <main className="flex flex-col items-center justify-center flex-grow">
        <section className="text-center max-w-4xl px-5 py-10">
          <h2 className="text-3xl font-bold mb-5">Welcome to Your Dashboard</h2>
          <p className="mb-5">
            This is your personal dashboard where you can manage your posts, create new content, and view your profile.
            Please make sure to complete your profile in the Profile section to get the most out of the platform.
          </p>
          <p className="mb-5">
            Explore the features, connect with others, and make the most of your experience here!
          </p>
        </section>
        <section className="text-center max-w-4xl px-5 py-10">
          <h2 className="text-2xl font-bold mb-5">Profile Setup</h2>
          <p className="mb-5">
            To get started, please create and complete your profile in the Profile section.
            This will help you connect with others and make your experience more personalized.
          </p>
        </section>
      </main>
      <footer className="w-full py-5 bg-gray-800 text-center">
        <p>&copy; 2024 DevConnector by Deepak. All rights reserved.</p>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Logout
        </button>
      </footer>
    </div>
  );
};

export default Dashboard;
