import React from 'react';

const AppCard = ({card}) => {
  return (
    <div
      className="transition duration-300 hover:scale-105 hover:shadow-lg bg-white p-4 rounded-lg shadow-md flex items-center">
      {/* 图片 */}
      <div className="w-1/4">
        {/* 图片拿assets里的 */}
        <img src={card.logo} alt={card.name} className="rounded-lg"/>
        {/* <img src="/assets/Logo（ClearAI）.jpg" alt={card.name} className="rounded-lg"/> */}
      </div>
      {/* 描述 */}
      <div className="w-2/3 pl-4">
        <h2 className="text-lg font-bold mb-2">{card.name}</h2>
        <p className="text-gray-700 mb-4">
          {card.content}
        </p>
        <button className='btn btn-sm'><a href={card.router}>Details</a></button>
      </div>
    </div>
  );
};

export default AppCard;