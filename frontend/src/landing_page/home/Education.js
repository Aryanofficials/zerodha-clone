import React from 'react';

function Education() {
    return (  
        <>
        <div className='container p-5'>
            <div className='row p-5'>

                 <div className='col-6 p-5'>
                <img src="media/education.svg" style={{width: "85%"}}/>
                </div>

                <div className='col-6 p-5'>
                    <h3>Free and open market education</h3>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                    <a href="" style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right-long"
                     aria-hidden="true"></i></a>

                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"
                     aria-hidden="true"></i></a>

                </div>
            </div>
        </div>
        </>
    );
}

export default Education;