import FoodItem from './FoodItem';

function FoodList({ foods, onDelete }) {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Your Log</h2>
      {foods.length === 0 ? (
        <p className="text-center text-slate-400 py-4 italic">No items logged yet...</p>
      ) : (
        foods.map((food) => (
          <FoodItem key={food.id} food={food} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default FoodList;