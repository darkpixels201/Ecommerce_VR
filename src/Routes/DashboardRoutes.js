import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderDashboard from "../Components/DashboardComponent/HeaderDashboard";
import NavbarDashboard from "../Components/DashboardComponent/NavbarDashboard";
import Dashboard from "../Screens/Dashboard/Dashboard";
import Order from "../Screens/Dashboard/Order";
import AddProduct from "../Screens/Dashboard/Products/AddProduct";
import ProductDetail from "../Screens/Dashboard/Products/ProductDetail";
import ProductsList from "../Screens/Dashboard/Products/ProductsList";
import Stock from "../Screens/Dashboard/Stock";
import { colors } from "../utils/Colors";

const DashboardRoutes = () => {
  return (
    <div
      style={{
        // padding: 20,
        height: "100vh",
        backgroundColor: "#503E9D",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NavbarDashboard />
      <div
        style={{
          width: window.innerWidth <= 480 ? "100%" : "80%",
          backgroundColor: colors.white1,
          borderRadius: window.innerWidth <= 480 ? 0 : 20,
          height: window.innerWidth <= 480 ? "100vh" : "90vh",
        }}
      >
        {/* <div style={{width:"100%"}} > */}
        <HeaderDashboard />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductsList />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="order" element={<Order />} />
          <Route path="stock" element={<Stock />} />
        </Routes>
      </div>
      {/* </div> */}
    </div>
  );
};

export default DashboardRoutes;
