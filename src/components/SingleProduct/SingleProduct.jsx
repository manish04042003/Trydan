import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import prod from "../../assets/products/earbuds-prod-1.webp";
const SingleProduct = () => {
  const { id } = useParams();

  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  if (!data) return;
  // console.log(data.data[0].attributes)
const product = data.data[0].attributes
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={process.env.REACT_APP_DEV_URL + product?.img.data[0].attributes.url} alt="earbud" />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377; {product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>4</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} /> ADD TO CART
              </button>
            </div>

            <span className="divider"></span>

            <div className="info-item">
              <span className="text-bold">
                Category: {'  '}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
