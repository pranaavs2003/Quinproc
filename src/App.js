import "./app.scss";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import Product1 from "./Components/Product1/Product1";
import Features from "./Components/Features/Features";
import About from "./Components/About/About";
import Article from "./Components/Article/Article";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Product1 />
      {/* <Product /> */}
      <Features />
      <About />
      <Article />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
