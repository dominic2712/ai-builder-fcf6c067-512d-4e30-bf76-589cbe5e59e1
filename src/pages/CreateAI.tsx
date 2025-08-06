import React, { useState } from 'react';

const CreateAI: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle create logic
    console.log('Creating AI:', { name, description });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create AI</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">AI Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
};

export default CreateAI;