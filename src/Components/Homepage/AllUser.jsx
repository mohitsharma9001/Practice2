import React from 'react'

export const AllUser = () => {
    const [user,setUser] = React.useState([]);
    const [loding,setLoding] = React.useState(false)
    const [error,setError] = React.useState(false)
console.log(user)
    React.useEffect(()=>{
        getUser()
    },[])
  
   const getUser = ()=>{
    setLoding(true)
    fetch(`https://reqres.in/api/users?page=2`)
    .then((res)=>res.json())
    .then((res)=>setUser(res.data))
    .catch(()=>setError(true))
    .finally(()=>setLoding(false))
   }
  return (
    <div >
        {
            loding ? (<div>Loding...</div>) : error ? (<div>Somthing went wrong</div>) : (<div style={{display : "grid",gridTemplateColumns : "repeat(3,1fr)",marginTop:"50px",width:"70%",margin:"auto",gap:"20px"}}>{user.map((data)=>{
              return <div key={data.id} style={{border : "1px solid black",textAlign : "center",marginTop : "20px"}}>
                   <img src={data.avatar} alt="" style={{marginTop : "20px"}}/>
                   <h3>{data.first_name+" "+data.last_name}</h3>
                   <h3>{data.email}</h3>
                </div>
            })}</div>)
        }
    </div>
  )
}
