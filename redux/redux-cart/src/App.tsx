import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
function App() {
  return (
    <Router>
      <Nav />
    <Routes>
      
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route />
    </Routes>
    </Router>
  );
}

export default App
