import React, { useState } from 'react';
import Comp from './assets/Component/Comp';




const App = () => {
  const[status,setStatus]=useState(true)
  const[value, setValue]=useState(0)
  
  const obj = [
    {id:1,work:'Pencil Art',size:'A4',price:1400},
    {id:2,work:'Pencil Art',size:'A3',price:2400},
    {id:3,work:'Pencil Art',size:'A2',price:3400},
    {id:4,work:'Color Pencil Art',size:'A4',price:1400},
    {id:5,work:'Color Pencil Art',size:'A3',price:2400},
    {id:6,work:'Color Pencil Art',size:'A2',price:3400},
    {id:7,work:'Mosic Frame',size:'A4',price:1400},
    {id:8,work:'Mosic Frame',size:'A3',price:2400},
    {id:9,work:'Mosic Frame',size:'A2',price:3400},
    {id:10,work:'Photo Mug',size:'A4',price:1400},
    {id:11,work:'Light Mirror',size:'A4',price:1400},
    {id:12,work:'Memory Tree',size:'A3',price:2400},
    {id:13,work:'Dream Capture',size:'A2',price:3400},
    {id:14,work:'Globe Picture',size:'A4',price:1400},
    {id:15,work:'Pencile Carving',size:'A4',price:2400},
    {id:16,work:'Wood Carving',size:'A3',price:3400},
    {id:17,work:'Miniture',size:'A2',price:1400},
    {id:18,work:'Photo Frame',size:'A4',price:2400},
    {id:19,work:'Light Frame',size:'A3',price:3400},
    {id:20,work:'Coffee Mug',size:'A2',price:400},
  ]
  const[products, setProducts]=useState(obj)
  return (
      <>
      
      {status ? <Comp setValue={setValue} value={value} setProducts={setProducts} products={products}/> : '' }
      
      
      </>
  );
};

export default App;