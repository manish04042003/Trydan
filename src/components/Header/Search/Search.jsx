import "./Search.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from '../../../hooks/useFetch'
const Search = ({ setshowSearch }) => {
  const navigate = useNavigate();

  const [query,setQuery] = useState('');

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  let {data} = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)

  if(!query.length){
    data = null;

  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search For Product" value={query} onChange={onChange} />
        <MdClose onClick={() => setshowSearch(false)} />
      </div>
      <div className="search-results-content">
        <div className="search-results">
          {data?.data.map(item =>{

              return (<div key={item.id} className="search-result-item" onClick={()=>{
                navigate(`/product/${item.id}`);
                setshowSearch(false)
              }} >
                <div className="img-container">
                  <img src={process.env.REACT_APP_DEV_URL + item?.attributes?.img.data[0].attributes.url} alt="Product" />
                </div>
                <div className="prod-details">
                  <span className="name">{item.attributes.title}</span>
                  <span className="desc">{item.attributes.desc} </span>
                </div>
              </div>)

          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
