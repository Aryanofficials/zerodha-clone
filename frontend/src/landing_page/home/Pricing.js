import React from 'react';


function Pricing() {
    return ( 
        <>
        <div className='container p-5'>
            <div className='row'>
                <div className='col-4 p-5'>
                    <h4>Unbeatable pricing</h4>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right-long"
                     aria-hidden="true"></i></a>
                </div>

                    <div className='col-2'>            </div>

                    <div className='col-6 p-5'>
                        <div className='row text-center'>
                            <div className='col p-2 border'>
                                <h1>₹0</h1>
                                <p className='text-muted'>Free equity delivery
                                and direct mutual funds</p>
                            </div>    
                            <div className='col p-2 border'>
                                <h1> ₹20 </h1>
                                Intraday and F&O   
                            </div>    
                        </div>
                    </div>
            </div>
        </div>
        </>
     );
}

export default Pricing;
