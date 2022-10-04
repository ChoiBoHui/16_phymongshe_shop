import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Search = ({ shopList, search, setSearch, searchRe }) => {
    const searchList = shopList.filter(it => it.name.toUpperCase().includes(searchRe?.toUpperCase()))
    return (

        <section className='searchList pn'>
            <div className="category">
                홈 :
            </div>
            <h2>검색결과</h2>
            <ul className="list">
                <li>total product : {searchList.length}</li>
                <li className='line'>line</li>


                {/* <li><Link to='/'><i className="xi-home-o"></i></Link></li> */}
            </ul>
            <table className='inner'>
                <tbody>


                    {
                        searchList.map((it, idx) => {
                            return (


                                <tr key={it.id}>

                                    <td className="box" style={{ width: '10rem' }}>
                                        <Link to={'/shopItem/' + it.id}><img src={it.src} alt="" /></Link>
                                    </td>
                                    <td className='name' style={{ width: '30rem' }}>
                                        <Link to={'/shopItem/' + it.id}>{it.name} </Link>
                                    </td>
                                    <td className='des'>
                                        <Link to={'/shopItem/' + it.id}>{it.des.substring(0, 200)} ...</Link></td>
                                    <td className='price' style={{ width: '15rem' }}><span>{it.price.toLocaleString()}</span> 원</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Search