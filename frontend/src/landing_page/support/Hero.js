import React from 'react';

function Hero() {
    return ( 
         <section className='container-fluid' id="supportHero">
            <div className='p-3' id="supportWrapper">
              <h3>Support Portal</h3>
              <a href="">Track Tickets</a>
        </div>

        <div className='row p-3'>
            <div className='col-6 p-5'>
           <h1 className='fs-2'>Search for an answer or browser help topics to creat a tickets</h1>
           <input placeholder='Eg. how do I activate F&O, why my order is getting rejected ' /><br/>
            <a href=""> Track account opening </a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href=""> Track segment activation </a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href=""> Intraday margins </a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href=""> Kite user manual </a>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>

            <div className='col-1 mb-5 p-5'>
            </div>

            <div className='col-5 mb-5 p-5'>
           <h1 className='fs-2'>Featured</h1>
            
            <ol>
          <li> <a href=""> Current Takeovers and Delisting - Jnuary 2024</a></li> <br/>
           <li> <a href=""> Latest Intraday leverages - MIS & CO </a></li>
            </ol>
            </div>
        </div>
        </section >
     );
}

export default Hero;