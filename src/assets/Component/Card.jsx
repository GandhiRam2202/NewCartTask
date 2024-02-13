import React, { useState } from 'react';


const Card = ({setValue,value,work,size,price,index,src}) => {

    const [status, setStatus]=useState(true)

    const addToCart=()=>{
        setValue(value=value+1);
        setStatus(false)
    }
    const removeFromCart=()=>{
        setValue(value=value-1)
        setStatus(true)
    }
    return (
        <>
        
        

                    <div className="col-sm-12 col-md-6 col-lg-3 text-center p-2" key={index}>
 
                        <div className="card rounded-5">
                        <div className="card-header bg-primary text-white fw-bolder rounded-top-5">
                            {work}
                        </div>
                        <div className="card-img">
                            <img src={src} alt="" width='100%'/>
                        </div>
                        <div className="card-text">
                            Size:{size}
                        </div>
                        <div>
                        Price:{price}
                        </div>
                        
                           {status ? <button className='addTocart border rounded-bottom-5 text-white' onClick={addToCart}>Add to Cart</button>:<button className='danger border rounded-bottom-5 text-white' onClick={removeFromCart}>Remove From Cart</button>}
                        
                        </div>
                   </div>
        </>
                   )
 
    
        
    
};

export default Card;