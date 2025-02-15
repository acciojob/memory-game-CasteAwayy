import React, { useState } from "react";

function App() {
    const [type, setType] = useState("");
    return (
        <div>
            <h4>Welcome!</h4>
            <div className="levels_container">
                <input
                    type="radio"
                    id="easy"
                    name="level_type"
                    value={type}
                    onChange={() => setType("easy")}
                />
                <label htmlFor="easy">Easy</label>
                <input
                    type="radio"
                    id="normal"
                    name="level_type"
                    value={type}
                    onChange={() => setType("normal")}
                />
                <label htmlFor="normal">Normal</label>
                <input
                    type="radio"
                    id="hard"
                    name="level_type"
                    value={type}
                    onChange={() => setType("hard")}
                />
                <label htmlFor="hard">Hard</label>
            </div>
            <button>Start</button>
        </div>
    );
}

export default App;
