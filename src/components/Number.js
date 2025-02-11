import { useState } from "react";
import React from 'react'

function Number({ number, lastNumber, setLastNumber, tries, setTries }) {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick(number) {
        if (isClicked) return;
        if (lastNumber === number) setTries(tries + 1)
        setLastNumber(number);
        setIsClicked(true)
    }
    return <div className='number' onClick={() => handleClick(number)}>{isClicked ? number : null}</div>
}

export default Number
