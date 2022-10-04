import React from 'react'
import { Link } from 'react-router-dom';
import MainCategory from './MainCategory';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const CategorySlider = ({ shopList, category, arrow, dots }) => {
    const Mainlist = shopList.filter(it => category === it.cate);
    return (
        <Slider
            arrows={arrow}
            slidesToShow={5}
            dots={dots}
        >
            {
                Mainlist.map(it => {
                    return (
                        <figure key={it.id}>

                            <div className="box">
                                <Link to={'/shopItem/' + it.id}><img src={it.src} alt="" /></Link>
                            </div>
                            <div className='name'> <Link to={'/shopItem/' + it.id}>{it.name}</Link></div>
                            <div className='des'>{it.des.substring(0, 100)} ...</div>
                            <div className='price'><span>{it.price.toLocaleString()}</span> 원</div>

                        </figure>
                    )
                })
            }
        </Slider>
    )
}

export default CategorySlider