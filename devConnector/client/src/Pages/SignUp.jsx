import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../contexts/AuthContext';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, data);
      toast.success('Registration successful!');
      login(res.data.user, res.data.token);
      navigate('/dashboard');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg === 'User already exists') {
        toast.error('Email already exists. Please use a different email.');
      } else {
        toast.error('Registration failed. Try again.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" autoComplete='off'>
          <div>
            <label className="block text-white mb-2 text-sm font-medium" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Full Name is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="e.g. Kusumkar Deepak Prakash"
            />
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-white mb-2 text-sm font-medium" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="e.g. mail@example.com"
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-white mb-2 text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              {...register('password', { required: 'Password is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="*********"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="mt-2 text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
            {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-white text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-blue-400 hover:text-blue-600 font-semibold">
            Login
          </a>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
