import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Container = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      {children}
      <Footer val="Copyright © 2024 - All right reserved by ACME Industries Ltd"/>
    </div>
  );
};

export default Container;