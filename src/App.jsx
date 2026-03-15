import React, { useState } from 'react';
import FoodList from './FoodList';

function App() {
  const [newName, setNewName] = useState('');
  const [newCalories, setNewCalories] = useState('');
  const handleDeleteFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };
  const [foods, setFoods] = useState([
    { id: 1, name: 'Apple', calories: 95 },
    { id: 2, name: 'Banana', calories: 105 },
    { id: 3, name: 'Grilled Chicken Breast', calories: 284 },
     const handleAddFood = (e) => {
    e.preventDefault();
    if (!newName || !newCalories) return;

    const newFood = {
      id: Date.now(),
      name: newName,
      calories: parseInt(newCalories, 10),
    };

    setFoods([...foods, newFood]);
    setNewName('');
    setNewCalories('');
  };
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Calorie Tracker</h1>
        <form onSubmit={handleAddFood} className="mb-6 flex gap-2">
          <input
            type="text"
            placeholder="Food name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-3 py-2"
          />
          <input
            type="number"
            placeholder="Calories"
            value={newCalories}
            onChange={(e) => setNewCalories(e.target.value)}
            className="w-24 border border-gray-300 rounded-md px-3 py-2"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Add
          </button>
        </form>
        <FoodList foods={foods} onDelete={handleDeleteFood} />
      </div>
    </div>
  );
}

export default App;