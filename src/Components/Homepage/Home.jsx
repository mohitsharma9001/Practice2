import React from 'react'
import { Link } from "react-router-dom"

export const Home = () => {
const [product,setProduct] = React.useState([])
const [error,setError] = React.useState(false);
const [loding,setLoding] = React.useState(false)
console.log(product)
  React.useEffect(()=>{
    getData()
  },[])

const getData = ()=>{
  setLoding(true)
  fetch(`https://fakestoreapi.com/products?limit=4`)
  .then((res)=>res.json())
  .then((res)=>setProduct(res))
  .catch(()=>setError(true))
  .finally(()=>setLoding(false))
}


  return (
   <div>
{
  loding ? (<div>Loding...</div>) : error ?( <div>somthing went wrong</div>) :( <div style={{ display : "grid",gridTemplateColumns:"repeat(4,1fr)",width : "200px",height:"100px",gap : "100px"}}>
    {
    product.map((data)=>{
      return <div style={{width:"300px"}}>
 <img src={data.image} alt="" width={"350px"}/>
      <h3>{data.title}</h3>
      <h4>{data.price}</h4>
      </div>
     
    })
    
    }
    <Link to="/AllProduct" >More Product</Link>
  </div>)
}

   </div>
  )
}
