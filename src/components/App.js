import { useState } from "react"
import React from 'react';
import Homepage from "Homepage"
import GameMode from "GameMode";
import Mode from "Mode"

const gameTiles = {
    'easy': 8,
    'normal': 16,
    'hard': 32,
}
function App() {
    const [type, setType] = useState(null);
    return (type ?
        <GameMode>
            <Mode tiles={gameTiles[type]} />
        </GameMode> : <Homepage setType={setType} />)
}

export default App
