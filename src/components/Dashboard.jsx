export default function Dashboard({ foods }) {
  const total = foods.reduce((sum, f) => sum + f.calories, 0);
  
  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl text-center border border-slate-100">
      <h2 className="text-slate-400 text-sm font-bold uppercase mb-2">Today's Progress</h2>
      <div className="text-7xl font-black text-slate-900 mb-4">{total} <span className="text-xl text-slate-300 italic">kcal</span></div>
      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
        <div className="bg-brand-primary h-full transition-all duration-500" style={{ width: `${Math.min((total/2000)*100, 100)}%` }}></div>
      </div>
      <p className="mt-4 text-slate-500 text-sm">Target: 2,000 kcal</p>
    </div>
  );
}