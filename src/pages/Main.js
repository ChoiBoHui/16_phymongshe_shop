import React from 'react';
import MainSlide from '../components/MainSlide';
import Itm from '../shop/Itm';
import MainTab from '../components/MainTab';
import '../css/Main.scss'
import MainCategory from '../components/MainCategory';
import MainProuctSlide from '../components/MainProuctSlide';

const Main = ({ shopList }) => {
    return (
        <>
            <MainSlide />
            <MainProuctSlide shopList={shopList} category={'pencil'} />
            <MainTab shopList={shopList} />
            <MainCategory shopList={shopList} category={'pencil'} />
            <MainCategory shopList={shopList} category={'liquid'} />
            <MainCategory shopList={shopList} category={'powder'} />
        </>
    )
}

export default Main