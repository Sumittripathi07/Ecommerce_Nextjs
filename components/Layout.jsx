import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Scroll from './Scrol'
const Layout = ({children}) => {
  return (
    <>
      <div className="layout">
        <header>
          <Navbar />
        </header>
        <main className="main-container">
        {children}
        </main>
        <Scroll showBelow={250}/>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  );
};

export default Layout;
