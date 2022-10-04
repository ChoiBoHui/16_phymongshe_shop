import React from 'react'

const BoardList = ({ list, setList }) => {
    const handlerDelete = (id) => {
        setList(list.filter(it => it.id !== id))
    }
    //배열 안의 객체 수정...
    const handlerModify = (id) => {
        const modify = list.map(it => (
            id === it.id ? {
                ...it,
                check: !it.check
            }
                : it
        ))
        setList(modify);
    }

    return (
        <div>
            <h2>BoardList</h2>
            {
                list.map((it, idx) => {
                    return (
                        <div key={it.id}>
                            {console.log(it.check)}
                            <input type="checkbox" onChange={
                                () => handlerModify(it.id)
                            } />
                            {it.id}
                            {it.title}
                            <strong>{it.comment}</strong>
                            <button onClick={
                                () => handlerDelete(it.id)
                            }>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BoardList