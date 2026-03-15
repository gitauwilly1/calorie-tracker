import React from 'react';
import FoodItem from './FoodItem';

function FoodList({ foods }) {
  if (foods.length === 0) {
    return <p className="text-center text-gray-500">No foods logged yet.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}

export default FoodList;