import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Helmet from "react-helmet";
import { DataProvider } from "./DataProvider";
import ProtectedRoute from "./utils/ProtectedRoutes";

import Home from "./pages/Home";
import ShopProducts from "./pages/ShopProducts";
import Product from "./pages/Product";
import Pastries from "./pages/Pastries";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HeaderBlue from "./components/HeaderBlue";
import AdminHeader from "./components/AdminHeader";
import Footer from "./components/Footer";

import "./assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <DataProvider>
        <AppContent />
      </DataProvider>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>Dover's Best Of Britain</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {location.pathname === "/dashboard" ? <AdminHeader /> : <HeaderBlue />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/products/:categoryId" element={<ShopProducts />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/pastries" element={<Pastries />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
