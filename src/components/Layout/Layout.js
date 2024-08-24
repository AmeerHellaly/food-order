import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import {Routers} from "../../routes/Routers";
import Cart from "../UI/cart/Cart.jsx";
import { UseSelector, useSelector } from "react-redux";
const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisiable);
  return (
    <div>
      <Header />

      {showCart && <Cart />}

      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
