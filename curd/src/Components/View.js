import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './view.css';

function View(){
  let {viewid} = useParams()
  let [product , setProduct] = useState({});
  const api_url = `http://localhost:9000/products`;
  useEffect(() => {
    fetch(`${api_url}/${viewid}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));
  },[]);
  return(
    <div className="Item">
      <img src={product.image} />
      <div className="content">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <div className="info">
          <p>Price: <span>{product.price}$</span> </p>
          <p>Category: <span>{product.category}</span></p>
      </div>
    </div>
  );
}
export default View;