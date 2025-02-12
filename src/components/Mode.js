import { useState } from "react"
import React from 'react';
import Number from "./Number";


function initState(tiles) {
    const arr = [];
    for (let i = 1; i <= tiles; i++) {
        arr.push(Math.ceil(i / 2));
    }
    arr.sort((a, b) => Math.random() - 0.5);
    return arr;
}
function Mode({ tiles }) {
    const [board, setBoard] = useState(() => initState(tiles));
    const [lastNumber, setLastNumber] = useState(-1);
    const [tries, setTries] = useState(0);
    return (
         <>
            <h1>GAmE YO</h1>
            <h4>Tries: {tries}</h4>
               <div className="cells_container">

                {board.map((number, idx) => idx < 4 && <Number lastNumber={lastNumber} setLastNumber={setLastNumber} key={idx} tries={tries} setTries={setTries} number={number} />)}
            </div>
            <div className="cells_container">

                {board.map((number, idx) => idx >= 4 && <Number lastNumber={lastNumber} setLastNumber={setLastNumber} key={idx} tries={tries} setTries={setTries} number={number} />)}
            </div>
        </>
    )
}

export default Mode
