import React, { useEffect, useState } from 'react';
import Customer from './Customer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useLocation, useParams } from 'react-router-dom';

const SideBanner = ({ shopList }) => {
    const [on, setOn] = useState(false);
    const sideSlide = shopList.slice(0, 30)
    // const sideSlide = shopList.filter((it, idx, arry) => it === arry[idx] < 10)
    // console.log(sideSlide, shopList)
    return (
        <div className={`SideBanner slide_ sc ${on ? 'on' : ''}`}>
            <Slider className='slide_'
                arrows={false}
                autoplay={true}
                pauseOnHover={false}
                slidesToShow={2}
            >
                {
                    sideSlide.map((it, idx) => {
                        return (
                            <figure key={idx}>
                                <img src={it.src} alt="" />
                            </figure>
                        )
                    })
                }

            </Slider>
            <i className={`xi-angle-left  ${on ? 'on' : ''}`}
                onClick={() => setOn(!on)}
            ></i>
            <div className="case">
                <Customer />
            </div>
        </div>
    )
}

export default SideBanner