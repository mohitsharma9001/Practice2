import React from 'react'

export const Navbar = () => {
  return (
    <div style={{display : "flex",justifyContent : "space-between",padding : "10px",background : "gray",height : "50px"}}>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoeoKe8RKeo9VpcGrXlWkTpHQgV0NkF7hyfw&usqp=CAU" alt=""  width={"100px"} height = {"50px"}/>
    </div>
    <div style={{display : "flex",justifyContent : "space-around",width: "50%",fontSize : '20px',fontWeight : "600"}}>
    <p>Home</p>
    <p>Product</p>
    <p>Login</p>

    
    </div>
</div>
  )
}
