import React from 'react';

function RightSection({imageUrl, productName, productDescription, learnMore}) {
    return ( 
        <div className='container p-2'>
            <div className='row'>
                <div className='col-5 p-5 mt-5 text-muted'>
                    <br/><br/><br/><br/>
                    <h4>{productName}</h4>
                    <p style={{lineHeight:"40px"}}>{productDescription}</p>
                    <p><a href={learnMore} style={{textDecoration:"None"}}>Learn More →</a> </p>
                </div>
                <div className='col-7 p-5'>
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;