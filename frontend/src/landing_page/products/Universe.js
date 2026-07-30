import React from 'react';

function Universe() {
    return (
        <div className='container p-5'>
            <div className='row text-muted'>
                <div className='text-center mt-5'>
                <h3>The Zerodha Universe</h3>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                </div>

                <div className='col-4 p-5 text-center' style={{fontSize:"13px"}}>
                    <img src="media/smallcaseLogo.png" style={{width:"130px"}}/>
                    <p className='text-muted mt-4'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>

                <div className='col-4 p-5 text-center' style={{fontSize:"13px"}}>
                    <img src="media/sensibullLogo.svg" style={{width:"130px"}}/>
                    <p className='text-muted mt-4'>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.

                    </p>
                </div>

                <div className='col-4 p-5 text-center' style={{fontSize:"13px"}}>
                    <img src="media/streakLogo.png" style={{width:"130px"}}/>
                    <p className='text-muted mt-4'>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
            </div>

            <div className='row'>

                <div className='col-4 p-5 text-center' style={{fontSize:"13px"}}>
                    <img src="media/zerodhaFundhouse.png" style={{width:"130px"}}/>
                    <p className='text-muted mt-4'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>

                <div className='col-4 p-5 text-center' style={{fontSize:"13px"}}>
                    <img src="media/goldenpiLogo.png" style={{width:"130px"}}/>
                    <p className='text-muted mt-4'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.

                    </p>
                </div>

                <div className='col-4 p-5 text-center'style={{fontSize:"13px"}}>
                    <img src="media/dittoLogo.png" style={{width:"130px"}}/>
                    <p className='text-muted mt-4'>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup For Free</button>
            </div>
        </div>
    );
}

export default Universe;