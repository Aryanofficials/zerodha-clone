import React from 'react';

function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container'>
            <div className='row p-3'>
                <div className='col-7 p-5'>
                    <img src={imageUrl} />
                </div>
                <div className='col-5 p-5 text-muted'>
                    <h4>{productName}</h4>
                    <p style={{lineHeight:"40px"}}>{productDescription}</p>
                    <a href={tryDemo} style={{textDecoration:"None"}}>Try Demo →</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={learnMore} style={{textDecoration:"None"}}>Learn More →</a> <br /><br />
                    <a href={googlePlay}><img src='media/googlePlayBadge.svg'/></a>.      &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={appStore}><img src='media/appstore-badge-light.svg' /></a>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;