import React from 'react';

function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className='row text-center'>
                <h2 className='mt-5'>Charges</h2>
                <p className='text-muted fs-5'>List of all charges and taxes</p>

                <div className='col-4'>
                    <img src="media/pricing0.svg" style={{width:"250px"}}/>
                    <h3 className='mt-3 mb-4'>Free equity delivery</h3>
                    <p className='text-muted text-center' style={{fontSize:"17px"}}>All equity delivery investments (NSE, BSE), <br />are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                <div className='col-4'>
                    <img src="media/intradayTrades.svg" style={{width:"250px"}}/>
                    <h3 className='mt-3 mb-4'>Intraday and F&O trades</h3>
                    <p className='text-muted text-center' style={{fontSize:"17px"}}>
                        Flat ₹ 20 or 0.03% (whichever is lower) per <br />executed order on intraday trades across <br />equity, currency, and commodity trades. Flat <br />₹20 on all option trades.
                    </p>
                </div>

                <div className='col-4'>
                    <img src="media/pricingMF.svg" style={{width:"250px"}}/>
                    <h3 className='mt-3 mb-4'>Free direct MF</h3>
                    <p className='text-muted text-center' style={{fontSize:"17px"}}>All direct mutual fund investments are <br /> absolutely free — ₹ 0 commissions & DP <br />charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;