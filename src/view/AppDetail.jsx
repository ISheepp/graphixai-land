import React from 'react';
import Markdown from "react-markdown";


const AppDetail = () => {

  const markdown = `
  # Hello
  
  ## World
  
  1. 2333
  2. hgi
  
  
  `
  // const markdown = '##  Hi, *Pluto*! ---'

  return (
    <div className="container mx-auto p-20">
      {/* App 图标 */}
      <div className="flex justify-center mb-4">
        <img src="https://sindresorhus.com/apps/ai-actions/icon.png" alt="App Icon" className="w-1/5 h-1/5 rounded-lg"/>
      </div>

      {/* App 名称 */}
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold">App Name</h1>
      </div>

      {/* App 短描述 */}
      <div className="text-center mb-4">
        <p className="text-gray-600">A short description of the app goes here.</p>
      </div>

      {/* 下载链接 */}
      <div className="flex justify-center items-center mb-6 ml-6">
        <a href="app-store-link" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src="/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-14"/>
        </a>
        <a href="google-play-link" target="_blank" rel="noopener noreferrer">
          <img src="/google-play-badge.png" alt="Google Play" className="h-20"/>
        </a>
      </div>

      {/* App 截图 */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <img src="https://sindresorhus.com/_astro/screenshot1.1a1a5f39.jpg" alt="Screenshot 1" className="rounded-lg"/>
        <img src="https://sindresorhus.com/_astro/screenshot1.1a1a5f39.jpg" alt="Screenshot 2" className="rounded-lg"/>
        {/* Add more screenshots as needed */}
      </div>

      {/* Markdown 渲染 */}
      <div className="mb-4">
        <Markdown>
          {markdown}
        </Markdown>
      </div>
    </div>
  );
};

export default AppDetail;