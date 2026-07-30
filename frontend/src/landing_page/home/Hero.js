import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5 mb-5"> 
          <div className='row text-center'>
          <img src='media/homeHero.png' alt='Hero Image' className='mb-5'/>
          <h2 className='mt-5'>Invest in everything</h2>
          <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button style={{width:"20%",margin: "0 auto"}} className='p-2 btn btn-primary mb-5'>Signup now</button>
          </div>
        </div>
     );
}

export default Hero;