import React, { useState } from 'react'
import BoardList from './BoardList'
import BoardWrite from './BoardWrite'

const Board = (props) => {

    return (
        <div>
            <h2>Board</h2>
            <BoardList {...props} />
            <BoardWrite {...props} />
        </div>
    )
}

export default Board