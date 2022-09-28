import React from 'react';
import { Link } from 'react-router-dom';
import { main_content } from '../data/common'

const List = () => {
    return (
        <div style={{ display: "flex", gap: "50px" }}>
            {
                main_content.map(it => {
                    return (
                        <figure >
                            <Link to={'/itm/' + it.id}>{it.content}</Link>
                        </figure>
                    )
                })
            }
        </div>
    )
}

export default List