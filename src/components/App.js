import React, { useState } from "react";

const tiles = {
    easy: 8,
    normal: 16,
    hard: 32,
};
function App() {
    const [type, setType] = useState("");
    return (
        <>{!type ? <Home setType={setType} /> : <Mode tiles={tiles[type]} />}</>
    );
}
function Home({ setType }) {
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { level_type } = Object.fromEntries(formData);
        setType(level_type);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Welcome!</h1>
            <div className="levels_container">
                <input
                    type="radio"
                    id="easy"
                    name="level_type"
                    defaultValue="easy"
                />
                <label htmlFor="easy">Easy</label>
                <input
                    type="radio"
                    id="normal"
                    name="level_type"
                    defaultValue="normal"
                />
                <label htmlFor="normal">Normal</label>
                <input
                    type="radio"
                    id="hard"
                    name="level_type"
                    defaultValue="hard"
                />
                <label htmlFor="hard">Hard</label>
            </div>
            <button type="submit">Start</button>
        </form>
    );
}

function Mode({ tiles }) {
    const [tries, setTries] = useState(1);
    return (
        <div>
            <p>Game Yo</p>
            <h4>Tries: {tries}</h4>
            <div>
                <div onClick={() => setTries(tries + 1)}>
                    <span>1</span>
                </div>
            </div>
            <div>
                <div onClick={() => setTries(tries + 1)}>
                    <span>1</span>
                </div>
                <div onClick={() => setTries(tries + 1)}>
                    <span>1</span>
                </div>
            </div>
        </div>
    );
}
export default App;
