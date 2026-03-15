export default function Summary({ foods }) {
  const totalCalories = foods.reduce((sum, item) => sum + item.calories, 0);

  return (
    <div className="text-center animate-in fade-in zoom-in duration-300">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Daily Analytics</h1>
      
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
        <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Total Consumption</p>
        <p className="text-5xl font-black text-brand-primary mt-2">{totalCalories}</p>
        <p className="text-slate-400 text-xs mt-1">kilocalories</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-xl">
          <p className="text-xs text-blue-600 font-bold">Items</p>
          <p className="text-xl font-bold text-blue-900">{foods.length}</p>
        </div>
        <div className="p-4 bg-green-50 rounded-xl">
          <p className="text-xs text-green-600 font-bold">Avg kcal</p>
          <p className="text-xl font-bold text-green-900">
            {foods.length > 0 ? Math.round(totalCalories / foods.length) : 0}
          </p>
        </div>
      </div>
    </div>
  );
}