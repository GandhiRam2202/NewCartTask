import React, { useState } from 'react';
import Comp from './assets/Component/Comp';




const App = () => {
  const[status,setStatus]=useState(true)
  const[value, setValue]=useState(0)
  
  const obj = [
    {id:1,work:'Pencil Art',size:'A4',price:1400,src:'./public/Images/Annotation 2024-02-12 123501.png'},
    {id:2,work:'Pencil Art',size:'A3',price:2400,src:'./public/Images/4.png'},
    {id:3,work:'Pencil Art',size:'A2',price:3400,src:'./public/Images/6.png'},
    {id:4,work:'Color Pencil Art',size:'A4',price:1400,src:'./public/Images/3.png'},
    {id:5,work:'Color Pencil Art',size:'A3',price:2400,src:'./public/Images/4.png'},
    {id:6,work:'Color Pencil Art',size:'A2',price:3400,src:'./public/Images/5.png'},
    {id:7,work:'Mosic Frame',size:'A4',price:1400,src:'./public/Images/6.png'},
    {id:8,work:'Mosic Frame',size:'A3',price:2400,src:'./public/Images/1.png'},
    {id:9,work:'Mosic Frame',size:'A2',price:3400,src:'./public/Images/Annotation 2024-02-12 123501.png'},
    {id:10,work:'Photo Mug',size:'A4',price:1400,src:'./public/Images/2.png'},
    {id:11,work:'Light Mirror',size:'A4',price:1400,src:'./public/Images/3.png'},
    {id:12,work:'Memory Tree',size:'A3',price:2400,src:'./public/Images/4.png'},
    {id:13,work:'Dream Capture',size:'A2',price:3400,src:'./public/Images/5.png'},
    {id:14,work:'Globe Picture',size:'A4',price:1400,src:'./public/Images/6.png'},
    {id:15,work:'Pencile Carving',size:'A4',price:2400,src:'./public/Images/Annotation 2024-02-12 123501.png'},
    {id:16,work:'Wood Carving',size:'A3',price:3400,src:'./public/Images/1.png'},
    {id:17,work:'Miniture',size:'A2',price:1400,src:'./public/Images/2.png'},
    {id:18,work:'Photo Frame',size:'A4',price:2400,src:'./public/Images/3.png'},
    {id:19,work:'Light Frame',size:'A3',price:3400,src:'./public/Images/4.png'},
    {id:20,work:'Coffee Mug',size:'A2',price:400,src:'./public/Images/5.png'},
  ]
  const[products, setProducts]=useState(obj)
  return (
      <>
      
      {status ? <Comp setValue={setValue} value={value} setProducts={setProducts} products={products}/> : '' }
      
      
      </>
  );
};

export default App;