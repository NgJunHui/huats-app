import React, { useState } from "react";
import "./App.css";
import { generateAnimalsArray, generateTilesArray } from "./utils/generateArrays";

const Home = () => {

    const [toggleState, setToggleState] = useState(1);
    const [tilesArray, setTilesArray] = useState(generateTilesArray());
    const [animalsArray, setAnimalsArray] = useState(generateAnimalsArray());

    const resetWinds = () => {
        setTilesArray(generateTilesArray());
    }

    const resetAnimals = () => {
        setAnimalsArray(generateAnimalsArray());
    }

    const tabDetails = [
        {
            id: 1,
            label: "Tiles",
            firstTile: tilesArray[0],
            secondTile: tilesArray[1],
            thirdTile: tilesArray[2],
            fourthTile: tilesArray[3],
            resetBtn: resetWinds,
        },
        {
            id: 2,
            label: "Animals",
            firstTile: animalsArray[0],
            secondTile: animalsArray[1],
            thirdTile: animalsArray[2],
            fourthTile: animalsArray[3],
            resetBtn: resetAnimals,
        },
    ];

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                {tabDetails.map((tab) => (
                    <button
                        key={tab.id}
                        className={toggleState === tab.id ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="content-tabs">
                {tabDetails.map((tab) => (
                    <div
                        key={tab.id}
                        className={toggleState === tab.id ? "content active-content" : "content"}
                    >
                        <button className="button-19">{tab.firstTile}</button>
                        <button className="button-19">{tab.secondTile}</button>
                        <button className="button-19">{tab.thirdTile}</button>
                        <button className="button-19">{tab.fourthTile}</button>
                        <button className="button-19" onClick={tab.resetBtn}>Reset</button>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;