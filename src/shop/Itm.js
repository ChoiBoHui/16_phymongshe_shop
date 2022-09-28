import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Itm = ({ shopList, cart, setCart }) => {
    const { itm } = useParams();
    const navigate = useNavigate();
    const matchItm = shopList.find(it => itm == it.id);

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            window.scrollTo(0, 0);
        }

    }, [])
    // 스크롤 안해도 되게 하는 코드!! 위에 useEffect임!!
    return (
        <section className='shopItm'>
            <div>
                <div className="box">
                    <img src={matchItm.src} alt="" />
                </div>
                <div className='name'>{matchItm.name}</div>
                <div className='des'>{matchItm.des.substring(0, 100)} ...</div>
                <div className='price'><span>{matchItm.price.toLocaleString()}</span> 원</div>
                <button onClick={() => {
                    setCart([
                        ...cart,
                        { id: matchItm.id, itm: matchItm.name }
                    ])
                    navigate('/cart')
                }
                }>장바구니 담기</button>
            </div>
        </section>

    )
}

export default Itm