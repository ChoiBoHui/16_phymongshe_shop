import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const List = ({ shopList }) => {
    //const cateList = [...shopList];

    const [sortList, onSortList] = useState(shopList)
    const rowPrice = [...sortList].sort(
        (a, b) => (a.price - b.price)
    );
    const hiPrice = [...sortList].sort(
        (a, b) => (b.price - a.price)
    );
    const newProduct = [...sortList].sort(
        (a, b) => (b.id - a.id)
    );
    const inkki = [...sortList].sort(
        (a, b) => (b.name.length - a.name.length)
    );

    const newSort = (it) => {
        onSortList(it)
    }



    return (
        <section className='shopList pn'>
            <div className="category">
                홈 : all
            </div>
            <h2>모든 제품</h2>
            <ul className="list">
                <li>total product : {shopList.length}</li>
                <li className='line'>line</li>
                <li>
                    <ul className='option'>
                        <li onClick={() => newSort(rowPrice)}>낮은가격</li>
                        <li onClick={() => newSort(hiPrice)}>높은가격</li>
                        <li onClick={() => newSort(newProduct)} >신상품</li>
                        <li onClick={() => newSort(inkki)}>인기상품</li>
                    </ul>
                </li>
            </ul>
            <div className='inner'>
                {
                    sortList.map(it => {
                        return (
                            <figure key={it.id}>
                                <Link to={'/shopItem/' + it.id}>
                                    <div className="box">
                                        <img src={it.src} alt="" />
                                    </div>
                                    <div className='name'>{it.name}</div>
                                    <div className='des'>{it.des.substring(0, 100)} ...</div>
                                    <div className='price'><span>{it.price.toLocaleString()}</span> 원</div>
                                    {/* <div className='ddd'><span>{new Date(Date.parse(it.time)).toLocaleDateString()}</span></div> */}
                                </Link>
                            </figure>
                        )
                    })
                }
            </div>
        </section>

    )
}

export default List