import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AI Website</h1>
      <Link to="/create" className="text-blue-500">Create New AI</Link>
    </div>
  );
};

export default HomePage;