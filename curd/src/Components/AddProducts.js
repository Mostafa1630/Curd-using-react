import { useEffect, useState } from 'react';
import './addProducts.css'
import { Link, useNavigate } from 'react-router-dom';
function AddProducts() {
  let [title , setTitle] = useState('');
  let [price , setPrice] = useState(0);
  let [category , setCategory] = useState('');
  let [count , setCount] = useState(0);
  let [description , setDescription] = useState('');
  let navigate = useNavigate();
  const api_url = 'http://localhost:9000/products';
  const addData = () =>{
    fetch(api_url,{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        title,
        price,
        category,
        description,
        count :count,
      })
    })
    .then((response) => response.json())
    .then((data) => navigate('/'))
  }
  const formSubmit = (event) => {
    event.preventDefault();
    addData();
  }
  return (
    <div className="most">
      <div className="contain">
        <h1 className="form-title">Add New Product</h1>
        <form onSubmit={formSubmit}>
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Enter Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              </div>
            <div className="user-input-box">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Enter category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="count">count</label>
              <input
                type="number"
                id="count"
                name="count"
                placeholder="Enter count"
                onChange={(e) => setCount(e.target.value)}
              />
            </div>
            <textarea placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)}>
            </textarea>
          </div>
          <div className="form-submit-btn">
            <button value="Add" >Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddProducts;
