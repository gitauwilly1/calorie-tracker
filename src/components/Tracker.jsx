import React, { useState } from 'react';
import FoodList from './FoodList';

export default function Tracker({ foods, onAdd, onDelete }) {
  const [name, setName] = useState('');
  const [kcal, setKcal] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if(name && kcal) { 
      onAdd(name, kcal); 
      setName(''); 
      setKcal(''); 
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 animate-in fade-in duration-500">
      <h2 className="text-2xl font-black text-slate-800 mb-6">Log Entry</h2>
      <form onSubmit={submit} className="flex gap-3 mb-6">
        <input 
          className="flex-grow p-3 bg-white/70 border border-white rounded-xl outline-none focus:ring-2 focus:ring-brand-primary shadow-sm" 
          placeholder="Food name..." 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />
        <input 
          className="w-24 p-3 bg-white/70 border border-white rounded-xl outline-none focus:ring-2 focus:ring-brand-primary shadow-sm" 
          type="number" 
          placeholder="kcal" 
          value={kcal} 
          onChange={e => setKcal(e.target.value)} 
        />
        <button className="bg-brand-primary text-white px-6 rounded-xl font-bold shadow-md hover:opacity-90 transition-opacity">
          ADD
        </button>
      </form>
      <FoodList foods={foods} onDelete={onDelete} />
    </div>
  );
}