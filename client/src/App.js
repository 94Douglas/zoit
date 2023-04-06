import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
function App() {
  return (
    <div className="">
      <Router>
        <div>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
