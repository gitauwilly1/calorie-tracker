export default function Profile() {
  return (
    <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/50 animate-in fade-in duration-500">
      <h2 className="text-2xl font-black text-slate-800 mb-8">User Profile</h2>
      <div className="flex items-center gap-6 mb-8 p-6 bg-white/40 rounded-2xl border border-white/60">
        <div className="w-20 h-20 bg-gradient-to-tr from-brand-primary to-blue-400 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-inner">
          JD
        </div>
        <div>
          <div className="text-xl font-bold text-slate-800">John Doe</div>
          <div className="text-sm font-medium text-brand-primary uppercase tracking-wider">Premium Member</div>
        </div>
      </div>
      <div className="space-y-4 text-slate-600">
        <div className="flex justify-between border-b border-slate-200/50 pb-3">
          <span>Daily Goal:</span> <b className="text-slate-800">2000 kcal</b>
        </div>
        <div className="flex justify-between border-b border-slate-200/50 pb-3">
          <span>Current Weight:</span> <b className="text-slate-800">75 kg</b>
        </div>
      </div>
    </div>
  );
}