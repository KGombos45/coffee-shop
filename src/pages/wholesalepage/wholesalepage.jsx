import React from 'react';
import WholeSaleBottom from './wholesale-bottom/WholeSaleBottom';
import WholeSaleMid from './wholesale-mid/WholeSaleMid';
import WholeSaleTop from './wholesale-top/WholeSaleTop';
import './wholesalepage.scss';


function WholesalePage() {
    return (
        <div>
            <WholeSaleTop/>
            <WholeSaleMid/>
            <WholeSaleBottom/>
        </div>
    )
}

export default WholesalePage
