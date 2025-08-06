import React from 'react';
import { useParams } from 'react-router-dom';

const ViewAI: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">View AI {id}</h2>
      <p>Details about AI {id}...</p>
    </div>
  );
};

export default ViewAI;