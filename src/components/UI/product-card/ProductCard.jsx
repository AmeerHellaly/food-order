import React from "react";
import productImg from "../../../assets/images/product_2.1.jpg";
import { Link } from "react-router-dom";
import "../../../styles/product-card.css";

import { useDispatch } from "react-redux";
import { cartAction } from "../../../store/shopping-cart/cartSlice";
const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img " className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link className="text-decoration-none" to={`/foods/${id}`}>
            {title}
          </Link>
        </h5>
        <div className="d-flex aligm-item-center justify-content-between">
          <span className="products__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            {" "}
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
