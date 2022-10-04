import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MainCategory from './MainCategory'
import CategorySlider from './CategorySlider'

const MainTab = ({ shopList, arrow, dots }) => {
    const link = [
        'pencil', 'liquid', 'powder'
    ];
    const [alink, setAlink] = useState(0);
    return (
        <section className='sce slide_'>
            <h2>Best Product</h2>
            <ul className='bp_tab'>
                {
                    link.map((it, idx) => {
                        return <li onClick={() => setAlink(idx)} key={idx}>{it}</li>
                    })
                }
            </ul>
            <div className="inner">
                <CategorySlider shopList={shopList} category={link[alink]} arrow={arrow} dots={dots} />
            </div>


        </section>
    )
}

export default MainTab