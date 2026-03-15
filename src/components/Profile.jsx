export default function Profile() {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
      <h2 className="text-2xl font-bold mb-6">User Profile</h2>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">JD</div>
        <div>
          <div className="font-bold">John Doe</div>
          <div className="text-sm text-slate-500">Premium Member</div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between border-b pb-2"><span className="text-slate-500">Goal:</span> <b>2000 kcal</b></div>
        <div className="flex justify-between border-b pb-2"><span className="text-slate-500">Weight:</span> <b>75 kg</b></div>
      </div>
    </div>
  );
}