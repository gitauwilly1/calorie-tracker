import FoodItem from './FoodItem';

export default function FoodList({ foods, onDelete }) {
  if (foods.length === 0) {
    return <p className="text-center text-slate-400 italic py-6">No items logged today.</p>;
  }

  return (
    <div className="space-y-3 mt-6 max-h-72 overflow-y-auto pr-2">
      {foods.map(f => <FoodItem key={f.id} food={f} onDelete={onDelete} />)}
    </div>
  );
}