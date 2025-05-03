import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Homepage from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Product from "./components/Products/Product";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
