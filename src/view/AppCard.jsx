import React from 'react';

const AppCard = ({card}) => {
  return (
    <div
      className="transition duration-300 hover:scale-105 hover:shadow-lg bg-white p-4 rounded-lg shadow-md flex items-center">
      {/* 图片 */}
      <div className="w-1/3">
        <img src="https://sindresorhus.com/apps/ai-actions/icon.png" alt="App" className="rounded-lg"/>
      </div>
      {/* 描述 */}
      <div className="w-2/3 pl-4">
        <h2 className="text-lg font-bold mb-2">App Name</h2>
        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="/detail-one" className="text-blue-500 hover:underline">Details</a>
      </div>
    </div>
  );
};

export default AppCard;