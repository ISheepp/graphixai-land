import React from 'react';
import Markdown from "react-markdown";
import ReactPlayer from 'react-player'


const AppDetailOne = () => {

  const markdown = `
  ## Hello graphIxAI
  
  if you want to add more information, you can add it here.
  
  
  
  
  `
  // const markdown = '##  Hi, *Pluto*! ---'

  return (
    <div className="container mx-auto p-20">
      {/* App 图标 */}
      <div className="flex justify-center mb-4">
        <img src="/assets/Logo（ClearAI）.jpg" alt="App Icon" className="w-1/5 h-1/5 rounded-lg" />
      </div>

      {/* App 名称 */}
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold">ClearAI</h1>
      </div>

      {/* App 短描述 */}
      <div className="text-center mb-4">
        <p className="text-gray-600 text-xl font-mono">Clear AI is a photo enhancement and editing application. It can greatly enhance the clarity of blurred photos, and has a better effect on portrait clarity. It also has automatic portrait extraction, portrait beautification, coloring of black and white photos, and facial retouching. Blur and many other AI functions. Easy to use and great results.</p>
      </div>

      {/* 下载链接 */}
      <div className="flex justify-center items-center mb-6 ml-6">
        <a href="https://apps.apple.com/us/app/clearaiphoto-repair-photo-edit/id1578054485?platform=iphone" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src="/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-14" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.ligan.clearai" target="_blank" rel="noopener noreferrer">
          <img src="/google-play-badge.png" alt="Google Play" className="h-20" />
        </a>
      </div>

      {/* App 截图 */}
      <div className="flex justify-center items-center">
        {/* <img src="https://sindresorhus.com/_astro/screenshot1.1a1a5f39.jpg" alt="Screenshot 1" className="rounded-lg"/> */}
        {/* <img src="https://sindresorhus.com/_astro/screenshot1.1a1a5f39.jpg" alt="Screenshot 2" className="rounded-lg"/> */}
        {/* Add more screenshots as needed */}
        {/* 放视频 */}
        <ReactPlayer url='https://pub-1bf50875d08348f2831122d15ffbb40c.r2.dev/clearai.mp4' playing loop muted width={"80%"} height={"100%"} />

      </div>

      {/* Markdown 渲染 */}
      {/* <div className="flex justify-center mt-8">
        <Markdown className="prose lg:prose-xl" children={markdown} />
      </div> */}

    </div>
  );
};

export default AppDetailOne;