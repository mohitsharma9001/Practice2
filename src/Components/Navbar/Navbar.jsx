import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div style={{display : "flex",justifyContent : "space-between",padding : "10px",background : "gray",height : "40px"}}>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoeoKe8RKeo9VpcGrXlWkTpHQgV0NkF7hyfw&usqp=CAU" alt=""  width={"90px"} height = {"40px"}/>
    </div>
    <div style={{display : "flex",justifyContent : "space-around",width: "50%",fontSize : '20px',fontWeight : "600"}}>

    <Link to={"/"}>Home</Link>
    <Link to={"/product"}>Product</Link>
    <Link to={"/form"}>Form</Link>
    <Link>Login</Link>
  

    
    </div>
</div>
  )
}
