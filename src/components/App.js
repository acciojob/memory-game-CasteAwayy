import React, { useState } from "react";

function App() {
    const [type, setType] = useState("");
    return <>{!type ? <Home setType={setType} /> : <Mode type={type} />}</>;
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

function Mode({ type }) {
    return (
        <div>
            <p>Game Yo</p>
            <h4>Tries: 0</h4>
            <div className="cells_container">
               <div>
                <span>1</span>
                <span>1</span>
              </div>
            </div>
        </div>
    );
}
export default App;
