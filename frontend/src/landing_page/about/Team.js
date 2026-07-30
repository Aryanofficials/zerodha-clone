import React from 'react';

function Team() {
    return ( 
          <div className='container text-muted'>
           <div className='row border-top text-center ms-5' style={{width:'1100px'}}>
                  <h3 className='mt-5'>People</h3>
            </div>    
             <div className='row p-2 mt-3 mx-auto text-center'> 
             <div className='col-5 p-5' style={{lineHeight:"1.8",
             fontSize:"1.1em"
             }}>
                <img src="media/nithinKamath.jpg" style={{borderRadius:"100%", height:"320px"
                }}/>
                <h5 className='my-4'>Nithin Kamath</h5>
                <p style={{fontSize:"15px"}}>Founder, CEO</p>
             </div>
             <div className='col-7 p-5 text-start' style={{lineHeight:"1.8",
             fontSize:"1.1em"}}>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <a href="" style={{textDecoration:"None"}}>Homepage</a> / <a href="" style={{textDecoration:"None"}}>TradingQnA</a> / <a href="" style={{textDecoration:"None"}}>Twitter</a></p>
             </div>
            </div>
        </div>
     );
}

export default Team;