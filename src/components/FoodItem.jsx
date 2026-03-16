export default function FoodItem({ food, onDelete }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white/50 hover:bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 transition-all shadow-sm">
      <div>
        <div className="font-bold text-slate-800">{food.name}</div>
        <div className="text-xs font-semibold text-brand-primary uppercase tracking-wider">{food.calories} kcal</div>
      </div>
      <button 
        onClick={() => onDelete(food.id)} 
        className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors font-bold text-xs"
      >
        REMOVE
      </button>
    </div>
  );
}