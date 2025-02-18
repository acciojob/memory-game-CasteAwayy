import { useState } from "react";
import React from "react";

function initState(tiles) {
    const arr = [];
    for (let i = 1; i <= tiles; i++) {
        arr.push(Math.ceil(i / 2));
    }
    arr.sort((a, b) => Math.random() - 0.5);
    return arr;
}

let clicked = 0;

function Mode({ tiles }) {
    const boardTiles = initState;
    const [tries, setTries] = useState(0);
    return (
        <>
            <h1>GAmE YO</h1>
            <h4>Tries: {tries}</h4>
            <div>
                <div
                    style={{
                        background: "orange",
                        width: "100px",
                        aspectRatio: "1",
                        margin: "10px",
                    }}
                    onClick={() => {
                        clicked++;
                        if (!(clicked & 1)) setTries(tries + 1);
                    }}
                >
                    <span></span>
                </div>
                <div
                    style={{
                        background: "orange",
                        width: "100px",
                        aspectRatio: "1",
                        margin: "10px",
                    }}
                    onClick={() => {
                        clicked++;
                        if (!(clicked & 1)) setTries(tries + 1);
                    }}
                >
                    <span></span>
                </div>
                <div
                    style={{
                        background: "orange",
                        width: "100px",
                        aspectRatio: "1",
                        margin: "10px",
                    }}
                    onClick={() => {
                        clicked++;
                        if (!(clicked & 1)) setTries(tries + 1);
                    }}
                >
                    <span></span>
                </div>
                <div
                    style={{
                        background: "orange",
                        width: "100px",
                        aspectRatio: "1",
                        margin: "10px",
                    }}
                    onClick={() => {
                        clicked++;
                        if (!(clicked & 1)) setTries(tries + 1);
                    }}
                >
                    <span></span>
                </div>
            </div>
            <div>
                <div
                    style={{
                        background: "orange",
                        width: "100px",
                        aspectRatio: "1",
                        margin: "10px",
                    }}
                    onClick={() => {
                        clicked++;
                        if (!(clicked & 1)) setTries(tries + 1);
                    }}
                >
                    <span></span>
                </div>
                <div
                    style={{
                        background: "orange",
                        width: "100px",
                        aspectRatio: "1",
                        margin: "10px",
                    }}
                    onClick={() => {
                        clicked++;
                        if (!(clicked & 1)) setTries(tries + 1);
                    }}
                >
                    <span></span>
                </div>
            </div>
        </>
    );
}

export default Mode;
