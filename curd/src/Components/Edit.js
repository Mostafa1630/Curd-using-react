import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit(){
  const {editId} = useParams();
  let [products , setProducts] = useState([]);
  let [title , setTitle] = useState('');
  let [price , setPrice] = useState(0);
  let [category , setCategory] = useState('');
  let [count , setCount] = useState(0);
  let [description , setDescription] = useState('');
  let navigate = useNavigate();
  const api_url = 'http://localhost:9000/products';
  useEffect(()=>{
    fetch(`${api_url}/${editId}`)
    .then((response) => response.json())
    .then((data) => setProducts(data));
  },[])
  const editData = () =>{
    fetch(`${api_url}/${editId}`,{
      method:'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        title,
        price,
        category,
        description,
      })
    })
    .then((response) => response.json())
    .then((data) => navigate('/'))
    // fetch(api_url,{
    //   method:'PUT',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body:JSON.stringify({
    //     title,
    //     price,
    //     category,
    //     description,
    //   })
    // })
    // .then((response) => response.json())
    // .then((data) => navigate('/'))
  }
  const formSubmit = (event) => {
    event.preventDefault();
    editData();
    console.log(title);
    console.log(price);
    console.log(category);
    console.log(description);
  }

  return(
    <div className="Edit">
      <div className="most">
      <div className="contain">
        <h1 className="form-title">Edit Product {editId}</h1>
        <form onSubmit={formSubmit}>
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={products.title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={products.price}
                onChange={(e) => setPrice(e.target.value)}
              />
              </div>
            <div className="user-input-box">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                name="category"
                value={products.category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="count">count</label>
              <input
                type="text"
                id="count"
                name="count"
                // value={products.image}
                onChange={(e) => setCount(e.target.value)}
              />
            </div>
            <textarea  value={products.description} onChange={(e) => setDescription(e.target.value)}>
            </textarea>
          </div>
          <div className="form-submit-btn">
            <button value="Add" >Edit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
export default Edit;