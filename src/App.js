import "./app.scss";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import Product1 from "./Components/Product1/Product1";
import Features from "./Components/Features/Features";
import Features1 from "./Components/Features1/Features1";
import About from "./Components/About/About";
import About1 from "./Components/About1/About1";
import Article from "./Components/Article/Article";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import { useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function App() {
  const { width, height } = getWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);

  const offLoading = () => {
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  };
  offLoading();

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Header />
          {width > 1000 ? <Product1 /> : <Product />}
          {width > 1000 ? <Features1 /> : <Features />}
          {width > 700 ? <About1 /> : <About />}
          <Article />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
