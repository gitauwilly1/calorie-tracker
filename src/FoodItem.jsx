function FoodItem({ food, onDelete }) {
  return (
    <div className="group flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-primary transition-colors">
      <div>
        <p className="font-bold text-slate-800">{food.name}</p>
        <p className="text-xs font-medium text-slate-500">{food.calories} kcal</p>
      </div>
      <button 
        onClick={() => onDelete(food.id)}
        className="text-slate-300 hover:text-brand-danger transition-colors p-2"
        title="Delete Item"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}

export default FoodItem;