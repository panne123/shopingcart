import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const pagedata='data';
const pagecart='cart';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [cart,setcart]=useState([])
  const [page,setpage]=useState("pagedata")

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);


  const AddtoCart = (product)=>{
       setcart([...cart,product]);
  }

const navigateTo=(nextpage)=>{
  setpage(nextpage)
}

  const renderdata=()=>(

<>
{data.map((product,index)=> ( 
          <Card style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src={product.image} alt="#" />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Price:{product.price}
            </Card.Text>
            <Card.Text>Category:{product.category}
            </Card.Text>      
            <Button variant="primary"  onClick={()=>AddtoCart(product)}>Add to Cart</Button>
          </Card.Body>
        </Card>

      ))}
</>
  )


  const rendercart=()=>(
    <>
{cart.map((product,index)=> ( 
          <Card style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src={product.image} alt="#" />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Price:{product.price}
            </Card.Text>
            <Card.Text>Category:{product.category}
            </Card.Text>      
            <Button variant="primary"  onClick={()=>AddtoCart(product)}>Add to Cart</Button>
          </Card.Body>
        </Card>

      ))}
    </>
  )
  return (
<>

<div className='navbar'>
        <h1>Shopping App</h1>
        <div className="CARTBUTTON">
        
          <i onClick={()=>navigateTo(pagecart)} className="bi bi-cart"><span className="text-danger">{cart.length}</span></i>
        </div>
        
  </div>
    <div className="products-container">
  
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}
     

      {page==="pagedata" &&renderdata()}
      {page==="cart" &&rendercart()}
      
      
    </div>
    </>
  );
};



export default Products;
