import React from 'react';

function FoodItem({ food, onDelete }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{food.name}</h3>
        <p className="text-sm text-gray-600">{food.calories} kcal</p>
        <button
        onClick={() => onDelete(food.id)}
        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-md transition"
      >
        Delete
      </button>
      </div>
    </div>
  );
}

export default FoodItem;