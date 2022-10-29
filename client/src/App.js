import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Diseases from "./pages/Diseases";
import DiseaseInfo from "./pages/Diseases/diseaseInfo";
import ProductInfo from "./pages/Products/productInfo";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import MyAccount from "./pages/MyAccount";
import CartList from "./pages/CartList";
import Admin from "./pages/Admin";
import Success from "./pages/Success";
import Orders from "./pages/Orders";
import Doctors from "./pages/Doctors";
function App() {
  // const { loginin, admin } = useSelector((state) => state.authReducer);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/disease" element={<Diseases />} />
        <Route path="/disease/:id" element={<DiseaseInfo />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/cartlist" element={<CartList />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/doctor" element={<Doctors />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
