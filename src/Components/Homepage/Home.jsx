import React from 'react'

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
  fetch(`https://fakestoreapi.com/products`)
  .then((res)=>res.json())
  .then((res)=>setProduct(res))
  .catch(()=>setError(true))
  .finally(()=>setLoding(false))
}



// const prodStyle = {
//   display : "grid"
//   grid
// }
  return (
   <div style={{width:"300px", height : "300px"}}>
{
  loding ? (<div>Loding...</div>) : error ?( <div>somthing went wrong</div>) :( <div style={{ display : "grid",gridTemplateColumns:"repeat(4,1fr)",width : "200px",gap : "30px"}}>
    {
    product.map((data)=>{
      return <div >
 <img src={data.image} alt="" width={"350px"}/>
      <h3>{data.title}</h3>
      <h4>{data.description}</h4>
      </div>
     
    })
    
    }
  </div>)
}
   </div>
  )
}
