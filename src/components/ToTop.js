import React, { useEffect, useState } from 'react';


const ToTop = () => {
    const [on, setOn] = useState(false);
    useEffect(() => {
        const scrollEvent = () => {
            let SCY = window.scrollY;
            SCY > 200 ? setOn(true) : setOn(false);
        }
        window.addEventListener('scroll', scrollEvent);
        return () => {
            window.removeEventListener('scroll', scrollEvent);
        }
    }, []);


    return (
        <div className={`ToTop ${on ? "on" : ""}`} onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }}>
            <i className='xi-arrow-top'></i>
        </div>
    )
}

export default ToTop