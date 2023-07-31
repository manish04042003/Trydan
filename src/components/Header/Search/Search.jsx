import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

const Search = ({ setshowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search For Product" />
        <MdClose onClick={() => setshowSearch(false)} />
      </div>
      <div className="search-results-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="Product" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name </span>
              <span className="desc">Product Name </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
