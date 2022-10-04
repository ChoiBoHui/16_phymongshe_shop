import React from 'react';
import company from '../data/profile';
import '../css/Customer.scss'
const Customer = () => {
    return (
        <>
            <div className='Customer'>
                <h3>CS CENTER</h3>
                <div className='tel'>{company.tel}</div>
                <ul className='open'>
                    {
                        company.open.map((it, idx) => <li key={idx}>{it}</li>)
                    }
                </ul>
            </div>
            <div className='Customer'>
                <h3>BANK INFO</h3>
                <p>{company.bank}</p>
                <div>예금주 : {company.company}</div>
            </div>
            <div className='Customer'>
                <h3>COMPANY</h3>
                <strong>{company.address}</strong>
                <ul className='sns'>
                    <li>
                        <a href="/" target="_blank">
                            <i className='xi-kakaotalk'></i>
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank">
                            <i className='xi-facebook'></i>
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank">
                            <i className='xi-instagram'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Customer