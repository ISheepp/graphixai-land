import React from 'react';
import Markdown from "react-markdown";
import ReactPlayer from 'react-player'


const AppDetailFour = () => {

  const markdown = `
  ## Hello graphIxAI
  
  if you want to add more information, you can add it here.
  
  
  
  
  `
  // const markdown = '##  Hi, *Pluto*! ---'

  return (
    <div className="container mx-auto p-20">
      {/* App 图标 */}
      <div className="flex justify-center mb-4">
        <img src="/assets/Logo（Styleme）.png" alt="App Icon" className="w-1/5 h-1/5 rounded-lg" />
      </div>

      {/* App 名称 */}
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold">Style Me</h1>
      </div>

      {/* App 短描述 */}
      <div className="text-center mb-4">
        <p className="text-gray-600 text-xl font-mono">Style Me Magic Camera is an AI photo editing application that can generate new image photos based on reference photos and maintain a high degree of consistency with the original characters. You can choose from many built-in characters or upload your own character photos, make yourself look like a Hollywood star with photo effects.</p>
      </div>

      {/* 下载链接 */}
      <div className="flex justify-center items-center mb-6 ml-6">
        <a href="https://apps.apple.com/us/app/style-me-ai-magic-camera/id6477325115?platform=iphone" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src="/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-14" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.ligan.styleme" target="_blank" rel="noopener noreferrer">
          <img src="/google-play-badge.png" alt="Google Play" className="h-20" />
        </a>
      </div>

      {/* App 截图 */}
      <div className="flex justify-center items-center">
        {/* <img src="https://sindresorhus.com/_astro/screenshot1.1a1a5f39.jpg" alt="Screenshot 1" className="rounded-lg"/> */}
        {/* <img src="https://sindresorhus.com/_astro/screenshot1.1a1a5f39.jpg" alt="Screenshot 2" className="rounded-lg"/> */}
        {/* Add more screenshots as needed */}
        {/* 放视频 */}
        <ReactPlayer url='https://pub-1bf50875d08348f2831122d15ffbb40c.r2.dev/Style%20Me%E7%BD%91%E7%AB%99%E8%A7%86%E9%A2%91.mp4' playing loop muted width={"80%"} height={"100%"} />

      </div>

      {/* Markdown 渲染 */}
      {/* <div className="flex justify-center mt-8">
        <Markdown className="prose lg:prose-xl" children={markdown} />
      </div> */}

    </div>
  );
};

export default AppDetailFour;