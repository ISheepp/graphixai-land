import React from 'react';
import AppCard from "./AppCard";

const Main = ({cards}) => {
  return (
    <main className="bg-slate-50 dark:bg-inherit flex-grow p-20">
      <div className="container mx-auto text-center mb-8">
        <h1 className="font-mono font-bold text-5xl mb-10 mt-5">Quality crafted apps</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 展示卡片 */}
        {cards.map(card => (
          <AppCard key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
};

export default Main;