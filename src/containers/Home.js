
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar/navbar";
import Header from "../components/Header/header";
import Featured from "../components/Features/featured";
import About from "../components/About/about";
import Gallery from "../components/Gallery/gallery";
import Footer from "../components/Footer/footer";
import CustomCursor from "../CustomCursor/Cursor";
import useLocoScroll from "../hooks/useLocalScroll";

// import "../styles/home.scss";

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);
  const [timer, setTimer] = useState(3);
  const id = useRef(null);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      <CustomCursor />

      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Welcome</h1>
          <h2>Please wait</h2>
        </div>
      ) :
        (
          <div
            className="main-container"
            id="main-container"
            data-scroll-container
            ref={ref}
          >

            
            {/* <Navbar /> */}
            <Header />
            <Featured />
            <About />
            <Gallery />
            <Footer />
          </div>
        )}

    </>
  );
};
export default Home;