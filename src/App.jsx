import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Tracker from './components/Tracker';
import Profile from './components/Profile';

function App() {
  // Navigation State
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  // Data State (Global to the app)
  const [foods, setFoods] = useState([
    { id: 1, name: 'Greek Yogurt', calories: 150 },
    { id: 2, name: 'Almonds', calories: 164 }
  ]);

  // Logic Functions
  const addFood = (name, kcal) => {
    setFoods([...foods, { id: Date.now(), name, calories: parseInt(kcal) }]);
  };

  const deleteFood = (id) => {
    setFoods(foods.filter(f => f.id !== id));
  };

  // Rendering Logic based on currentPage
  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard': return <Dashboard foods={foods} />;
      case 'tracker':   return <Tracker foods={foods} onAdd={addFood} onDelete={deleteFood} />;
      case 'profile':   return <Profile />;
      default:          return <Dashboard foods={foods} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default App;