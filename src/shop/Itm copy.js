import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { main_content } from '../data/common'

const Itm = ({ cart, addCart }) => {
    const { url } = useParams();
    const navi = useNavigate();
    const onCart = () => {
        addCart([
            ...cart, { id: main_content[url].id, pro: main_content[url].content, num: 1 }
        ])
    }
    return (
        <div style={{ paddingTop: '500px' }}>

            Itm
            <button onClick={() => {
                onCart();
                navi('/cart')
            }}>ADD CART</button>
        </div>
    )
}

export default Itm