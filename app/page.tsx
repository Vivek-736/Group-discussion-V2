import React from 'react';
import FeatureCard from './components/FeatureCard';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-4 p-8 bg-white rounded-lg shadow-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4">
          Welcome to Gobbledygook!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Your ultimate chat app for connecting with friends and discussing the latest in tech, style, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="Chat with Friends"
            description="Stay connected with your friends and share your thoughts on the latest tech trends."
            bgColor="bg-purple-50"
            textColor="text-purple-800"
          />
          <FeatureCard
            title="Discuss Tech"
            description="Dive into discussions about cutting-edge technology, gadgets, and innovations."
            bgColor="bg-indigo-50"
            textColor="text-indigo-800"
          />
          <FeatureCard
            title="Share Style Tips"
            description="Exchange fashion ideas, style tips, and trends with your friends."
            bgColor="bg-purple-50"
            textColor="text-purple-800"
          />
          <FeatureCard
            title="Stay Updated"
            description="Never miss out on the latest news and updates in tech and style."
            bgColor="bg-indigo-50"
            textColor="text-indigo-800"
          />
        </div>

        <Link href={'/chat'}>
          <button className="mt-8 px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors">
            Start Chatting Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
