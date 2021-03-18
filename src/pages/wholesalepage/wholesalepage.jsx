import React from 'react';
import WholeSaleBottom from './components/wholesale-bottom/WholeSaleBottom';
import WholeSaleMid from './components/wholesale-mid/WholeSaleMid';
import WholeSaleTop from './components/wholesale-top/WholeSaleTop';
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
