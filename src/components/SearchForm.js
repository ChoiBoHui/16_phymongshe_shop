import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const SearchForm = ({ searchInput, setSearchInput, search, setSearch }) => {

    const navigate = useNavigate();



    const handlerSearch = (e) => {
        setSearch({ search: searchInput });
        navigate('/search?search=' + searchInput)
    }
    const handlerInput = (e) => {
        setSearchInput(e.target.value)
    }
    return (
        <div>

            <input type='text' onChange={handlerInput} />
            <button onClick={handlerSearch}>Search</button>

        </div>
    )
}

export default SearchForm