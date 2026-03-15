import React, { useState } from 'react';
import FoodList from './FoodList';

function App() {
  const [foods, setFoods] = useState([
    { id: 1, name: 'Apple', calories: 95 },
    { id: 2, name: 'Banana', calories: 105 },
    { id: 3, name: 'Grilled Chicken Breast', calories: 284 },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Calorie Tracker</h1>
        <FoodList foods={foods} />
      </div>
    </div>
  );
}

export default App;