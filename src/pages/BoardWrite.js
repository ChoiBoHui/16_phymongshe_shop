import React, { useRef, useState } from "react";

const BoardWrite = ({ list, setList, input, setInput }) => {
    const nextNum = useRef(1)
    const handlerInput = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
            id: nextNum.current
        });

    };

    const handlerSubmit = () => {
        console.log(input.title)
        if (input.title.length < 5) {
            alert('more');
            return
        }
        setList([
            ...list,
            input
        ]);

        setInput({
            title: "",
            content: "",
            check: false,
        })
        ++nextNum.current
    }
    return (
        <div>
            <h2>BoardWrite</h2>
            title : <input name="title" value={input.title || ''} onChange={handlerInput} />
            comment : <textarea name="comment" value={input.comment || ''} onChange={handlerInput} />
            {/* {console.log(input, nextNum.current)} */}
            <button
                onClick={handlerSubmit}
            >Write</button>
        </div>
    );
};

export default BoardWrite;  
