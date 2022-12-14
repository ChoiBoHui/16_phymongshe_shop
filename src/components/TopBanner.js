import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { top_banner } from "../data/common";
import "../css/TopBanner.scss"
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight, IconName } from "react-icons/fi";

const TopBanner = () => {
    const topSlider = useRef(null);
    return (
        <div className="TopBanner">
            <Slider
                arrows={false}
                fade={true}
                autoplay={true}
                ref={topSlider}
            >
                {
                    top_banner.map((it, idx) => {
                        return (
                            <div key={it.id}>
                                <Link to={it.link}>{it.content}</Link>
                            </div>
                        )
                    })
                }
            </Slider>
            <FiArrowLeft onClick={() => topSlider.current.slickPrev()} className="icon left" />
            <FiArrowRight onClick={() => topSlider.current.slickNext()} className="icon right" />

        </div>
    )
}

export default TopBanner;