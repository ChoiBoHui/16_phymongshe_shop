import React from 'react'
import Customer from './Customer';
import '../css/Footer.scss'
import company from '../data/profile';

const Footer = () => {
    return (

        <footer className='Footer'>
            <div className="top">
                <div className="inner">
                    <Customer />
                </div>
            </div>
            <div className="bottom">
                <div className="inner">
                    <p>
                        ADDRESS : {company.address} <br />
                        &copy; {company.company}.allright reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer