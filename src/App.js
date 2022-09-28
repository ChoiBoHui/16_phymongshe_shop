import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import List from './shop/List';
import Itm from './shop/Itm';
import Cart from './shop/Cart'
import './css/ShopDetail.scss';
import { Route, Routes } from 'react-router-dom';
//https://desipossa.github.io/shop_cra/assets/data.json
const App = () => {
    const [itm, setItm] = useState();
    const [cart, setCart] = useState([
        { id: 1, itm: "ssssssssssssssssssss", price: 5000 }
    ]);
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     return () => {
    //         window.scrollTo(0, 0);
    //     }
    // }, []);
    // 스크롤 자동으로 위로 올라가게 하는 거였는데, 안됨...
    useEffect(() => {
        const url = 'https://desipossa.github.io/shop_cra/assets/data.json'
        const getProduct = async () => {
            const res = await axios.get(url);

            const shopdata = res.data.slice(50, 140).map(it => {
                return {
                    id: it.id,
                    name: it.name,
                    src: it.image_link,
                    brand: it.brand,
                    cate: it.category,
                    price: it.price * 1450,
                    des: it.description,
                    color: it.product_colors,
                    time: it.created_at,
                    type: it.product_type,
                }
            })
            setItm(shopdata);
            console.log(res.data);
            console.log(shopdata);
        }
        getProduct();
    }, [])
    return (
        <>
            <Header />

            {
                itm ?
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/cart' element={<Cart cart={cart} />} />
                        <Route path='/shopList' element={<List shopList={itm} />} />
                        <Route path='/shopItem/:itm' element={<Itm shopList={itm} cart={cart} setCart={setCart} />} />
                    </Routes>

                    : <div>로딩 중 입니다.</div>
            }
            {/*  await 부분은 있으면 표시하고 없으면 기다리라고 아래 tim 뒤에 ? 를 붙이던데 진짜 모르겠다.. 찾아봐야할듯..
            옵셔널 체이닝 참고 : https://ko.javascript.info/optional-chaining */}
            <Footer />
        </>
    )
}

export default App;