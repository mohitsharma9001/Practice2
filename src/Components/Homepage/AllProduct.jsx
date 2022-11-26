import React, { useState } from "react";




export const AllProduct = () => {
  const [isActive, setActive] = useState("false");
  const [show,setShow]=useState(true)
  const [data,setData] = useState(true)
 
  return (
    <div className="App">
      <div>
    {
      show?<h1>Hello World !</h1>:null
    }
<button onClick={()=>setShow(!show)} >Toggle</button> 

      </div>
      <div>
{
  data?<h1>The exact problem Toggle On Button Click In React Js Functional Component can be fixed by employing an alternative technique, which is outlined in the next section along with some code samples for reference.</h1>:null
}
<button onClick={()=>setData(!data)} >Toggle</button> 
      </div>
   </div>
  )
}
