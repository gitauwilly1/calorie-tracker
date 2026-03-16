export default function Dashboard({ foods }) {
  const total = foods.reduce((sum, f) => sum + f.calories, 0);
  const target = 2000;
  const percentage = Math.min((total / target) * 100, 100);

  return (
    <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/50 text-center animate-in fade-in duration-500">
      <h2 className="text-slate-500 text-sm font-bold uppercase mb-2">Today's Intake</h2>
      <div className="text-7xl font-black text-slate-800 mb-6">
        {total} <span className="text-xl text-slate-400 italic">kcal</span>
      </div>
      
      <div className="w-full bg-slate-200/50 h-4 rounded-full overflow-hidden shadow-inner">
        <div 
          className="bg-brand-primary h-full transition-all duration-1000 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="mt-4 text-slate-500 text-sm font-medium">Daily Target: {target} kcal</p>
    </div>
  );
}