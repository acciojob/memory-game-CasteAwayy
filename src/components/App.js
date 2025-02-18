import React, { useState } from "react";
import Mode from "./Mode";
import Homepage from "./Homepage";

const tiles = {
    easy: 8,
    normal: 16,
    hard: 32,
};
function App() {
    const [type, setType] = useState("");
    return (
        <>
            {!type ? (
                <Homepage setType={setType} />
            ) : (
                <Mode tiles={tiles[type]} />
            )}
        </>
    );
}

export default App;
