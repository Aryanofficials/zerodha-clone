import React from 'react';


function States() {
    return ( 
        <>
        <div className='container p-5'>
            <div className='row'>
                <div className='col-5 p-5'>
                    <h3>Trust with confidence</h3>
                    <h5 className='mt-5'>Customer-first always</h5>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h5 className='mt-5'>No spam or gimmicks</h5>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h5 className='mt-5'>The Zerodha universe</h5>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h5 className='mt-5'>Do better with money</h5>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-7 p-5'>
                <img src="media/ecosystem.png" style={{width: "85%"}}/>
                <div className='text-center p-5'>
                    <a href="/" className='mx-5' style={{textDecoration:"none"}}>Explore our poducts <i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
                    <a href="/" style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"
                     aria-hidden="true"></i></a>
                </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default States;