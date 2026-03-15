import FoodItem from './FoodItem';

export default function FoodList({ foods, onDelete }) {
  return (
    <div className="space-y-2">
      {foods.map(f => <FoodItem key={f.id} food={f} onDelete={onDelete} />)}
    </div>
  );
}