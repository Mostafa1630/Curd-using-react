import { Link } from 'react-router-dom';
// import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import'./curd.css';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
function Curd(){
  let [products , setProducts] = useState([]);
  
  const api_url = 'http://localhost:9000/products';
  useEffect(() => {
    getProducts();
    
  },[]);
  let getProducts = () => {
    
        fetch(api_url)
        .then((respons) => respons.json())
        .then((data) => setProducts(data));
      }

  const deleteItem = (product) => {
    Swal.fire({
      title: `Are you sure Delete ${product.title}?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${api_url}/${product.id}`,{
          method: 'DELETE'
        }
        ).then((res) => res.json())
        .then(() => {
          getProducts()
        })
      }
    })
}
  return(
    <div class="container">
      <div className='users'>
        <h2>All products</h2>
        <Link to="/addProducts">Add product +</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>category</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return(
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <a onClick={() => {
                    deleteItem(product);
                  }}>delete</a>
                  <Link to={`/${product.id}`}>view</Link>
                  <Link to={`edit/${product.id}`}>edit</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Curd;