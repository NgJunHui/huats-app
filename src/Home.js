import React, { useState } from "react";
import "./App.css";
import { generateAnimalsArray, generateTilesArray } from "./utils/generateArrays";

const Home = () => {

    const [toggleState, setToggleState] = useState(1);
    const [tilesArray, setTilesArray] = useState(generateTilesArray());
    const [animalsArray, setAnimalsArray] = useState(generateAnimalsArray());

    const resetWinds = () => {
        setTilesArray(generateTilesArray());
        console.log(tilesArray)
    };

    const resetAnimals = () => {
        console.log('2')
        setAnimalsArray(generateAnimalsArray());
    }

    const [tabDetails, setTabDetails] = useState([
        {
            id: 1,
            label: "Tiles",
            buttons: [
                { id: 1, label: tilesArray[0], showContent: false },
                { id: 2, label: tilesArray[1], showContent: false },
                { id: 3, label: tilesArray[2], showContent: false },
                { id: 4, label: tilesArray[3], showContent: false },
            ],
            resetBtn: resetWinds,
        },
        {
            id: 2,
            label: "Animals",
            buttons: [
                { id: 1, label: animalsArray[0], showContent: false },
                { id: 2, label: animalsArray[1], showContent: false },
                { id: 3, label: animalsArray[2], showContent: false },
                { id: 4, label: animalsArray[3], showContent: false },
            ],
            resetBtn: resetAnimals,
        },
    ]);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const toggleButtonContent = (tabIndex, buttonIndex) => {
        const updatedTabDetails = [...tabDetails];
        updatedTabDetails[tabIndex].buttons[buttonIndex].showContent = true;
        setTabDetails(updatedTabDetails);
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
                {tabDetails.map((tab, tabIndex) => (
                    <div
                        key={tab.id}
                        className={toggleState === tab.id ? "content active-content" : "content"}
                    >
                        {tab.buttons.map((button, buttonIndex) => (
                            <button
                                key={button.id}
                                className="button-19"
                                onClick={() => toggleButtonContent(tabIndex, buttonIndex)}
                            >
                                {button.showContent ? button.label : "Show Content"}
                            </button>
                        ))}
                        <button className="button-19" onClick={tab.resetBtn}>Reset</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;