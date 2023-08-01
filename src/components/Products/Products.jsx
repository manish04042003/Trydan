import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ products, headingText }) => {
  return (
    <div className="products-container">
      <div className="sec-heading">{headingText}</div>
      <div className="products">
        {/* {console.log(products?.data)} */}
        {products?.data?.map((item) => {
            return (<Product key={item.id} id={item.id} data={item.attributes} />);
          
        })}
      </div>
    </div>
  );
};

export default Products;
