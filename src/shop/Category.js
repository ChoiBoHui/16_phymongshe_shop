import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const List = ({ shopList }) => {

    const { cate } = useParams();
    const cateList = shopList.filter(it => cate === it.cate);
    const [sortList, onSortList] = useState(cateList);
    useEffect(() => {
        onSortList(cateList);
    }, [cate])

    const rowPrice = [...sortList].sort(
        (a, b) => (a.price - b.price)
    );
    const hiPrice = [...sortList].sort(
        (a, b) => (b.price - a.price)
    );
    const newProduct = [...sortList].sort(
        (a, b) => (b.time - a.time)
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
                홈 : {cate}
            </div>
            <h2>{cate}</h2>
            <ul className="list">
                <li>total product : {cateList.length}</li>
                <li className='line'>line</li>
                <li>
                    <ul className='option'>
                        <li onClick={() => newSort(rowPrice)}>낮은가격</li>
                        <li onClick={() => newSort(hiPrice)}>높은가격</li>
                        <li onClick={() => newSort(newProduct)} >신상품</li>
                        <li onClick={() => newSort(inkki)}>인기상품</li>
                    </ul>
                </li>

                {/* <li><Link to='/'><i className="xi-home-o"></i></Link></li> */}
            </ul>
            <div className='inner'>
                {
                    sortList.map((it, idx) => {
                        return (
                            <figure key={it.id}>
                                <Link to={'/shopItem/' + it.id}>
                                    <div className="box">
                                        <img src={it.src} alt="" />
                                    </div>
                                    <div className='name'>{it.name}</div>
                                    <div className='des'>{it.des.substring(0, 100)} ...</div>
                                    <div className='price'><span>{it.price.toLocaleString()}</span> 원</div>
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