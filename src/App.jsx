import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
