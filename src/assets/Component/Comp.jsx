import React from 'react';
import Card from './Card';


const Comp = ({ setValue, value, products }) => {


    return (
        <>
            <div>
                <nav className="navbar bg-primary p-0 sticky-top">
                    <div className="container-fluid bg-primary p-0">
                        <a className="navbar-brand text-white" href="#"><h1 className='navMy d-none d-sm-block p-2'>KS Arts & Frames</h1><h1 className='d-block d-sm-none p-3'>KS</h1></a>
                        <button className="button text-white fw-bolder" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">Cart<i className="fa-solid fa-cart-shopping">{value}</i></button>

                    </div>
                </nav>
                <div className="offcanvas offcanvas-end bg-primary" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <button type="button" className="btn-close bg-primary" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <div className="text-white bg-primary text-center">
                        <h5 className="text-center">CART<i className="fa-solid fa-cart-shopping"></i></h5>
                    </div>
                    <div className="offcanvas-body bg-white">
                        <div>

                        </div>
                    </div>
                </div>
                <div className='text-center bg-primary text-white p-4'>
                    <h1 className='quotes'>Its not Just a Gift<br />Its giving your Soul a Lift</h1>
                </div>
                <div className="container">
                    <div className='row'>
                        {products.map((item, index) => {
                            return (
                                <>

                                    <Card setValue={setValue} value={value} work={item.work} index={index} size={item.size} price={item.price} src={item.src} />
                                </>
                            )
                        }
                        )}
                    </div>
                </div>

            </div>
        </>

    );
};

export default Comp;