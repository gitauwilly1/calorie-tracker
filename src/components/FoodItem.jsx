export default function FoodItem({ food, onDelete }) {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
      <div>
        <div className="font-bold text-slate-800">{food.name}</div>
        <div className="text-xs text-slate-500">{food.calories} kcal</div>
      </div>
      <button onClick={() => onDelete(food.id)} className="text-red-400 hover:text-red-600 font-bold text-xs">REMOVE</button>
    </div>
  );
}