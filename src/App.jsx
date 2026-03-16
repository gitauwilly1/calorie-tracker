import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Tracker from './components/Tracker';
import Profile from './components/Profile';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [foods, setFoods] = useState([
    { id: 1, name: 'Greek Yogurt', calories: 150 },
    { id: 2, name: 'Almonds', calories: 164 }
  ]);

  const addFood = (name, kcal) => {
    setFoods([...foods, { id: Date.now(), name, calories: parseInt(kcal) }]);
  };

  const deleteFood = (id) => {
    setFoods(foods.filter(f => f.id !== id));
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard': return <Dashboard foods={foods} />;
      case 'tracker':   return <Tracker foods={foods} onAdd={addFood} onDelete={deleteFood} />;
      case 'profile':   return <Profile />;
      default:          return <Dashboard foods={foods} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow flex items-center justify-center p-6 w-full max-w-2xl mx-auto">
        <div className="w-full">
          {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;