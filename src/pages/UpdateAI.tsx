import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateAI: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const handleUpdate = () => {
    // Handle update logic
    console.log('Updating AI with ID:', id);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Update AI {id}</h2>
      <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2">Update</button>
    </div>
  );
};

export default UpdateAI;