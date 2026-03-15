import React, { useState } from 'react';
import FoodList from './FoodList';

export default function Tracker({ foods, onAdd, onDelete }) {
  const [name, setName] = useState('');
  const [kcal, setKcal] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if(name && kcal) { onAdd(name, kcal); setName(''); setKcal(''); }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
      <h2 className="text-2xl font-bold mb-6">Log Food</h2>
      <form onSubmit={submit} className="flex gap-2 mb-8">
        <input className="flex-grow p-3 border rounded-xl outline-brand-primary" placeholder="Food name..." value={name} onChange={e => setName(e.target.value)} />
        <input className="w-24 p-3 border rounded-xl outline-brand-primary" type="number" placeholder="kcal" value={kcal} onChange={e => setKcal(e.target.value)} />
        <button className="bg-brand-primary text-white px-6 rounded-xl font-bold">ADD</button>
      </form>
      <FoodList foods={foods} onDelete={onDelete} />
    </div>
  );
}