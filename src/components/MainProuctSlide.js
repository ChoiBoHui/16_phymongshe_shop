import React from 'react'
import CategorySlider from './CategorySlider';
import MainCategory from './MainCategory'

const MainProuctSlide = ({ shopList, category }) => {
    return (
        <div>
            <CategorySlider shopList={shopList} category={category} />
        </div>
    )
}

export default MainProuctSlide;