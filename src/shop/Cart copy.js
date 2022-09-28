import React from 'react'


const Cart = ({ cart }) => {
    const ncart = cart.filter(
        (arr, index, callback) => index === callback.findIndex(t => t.id === arr.id)//중복제거
    );
    return (
        <div style={{ paddingTop: '300px' }}>
            {
                ncart.map(ca => {
                    return (
                        <>
                            <div>{ca.id}</div>
                            <div>{ca.pro}</div>
                            <div>{ca.num}</div>
                        </>

                    )
                })
            }
        </div>
    )
}

export default Cart