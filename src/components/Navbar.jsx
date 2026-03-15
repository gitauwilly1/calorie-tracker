export default function Navbar({ currentPage, setPage }) {
  const navItems = ['dashboard', 'tracker', 'profile'];
  
  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
      <h2 className="text-xl font-black text-brand-primary tracking-tighter">VITA-TRACK</h2>
      <div className="flex gap-6 uppercase text-xs font-bold tracking-widest">
        {navItems.map(item => (
          <button 
            key={item}
            onClick={() => setPage(item)}
            className={`transition-colors ${currentPage === item ? 'text-brand-primary' : 'text-slate-400 hover:text-slate-600'}`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}