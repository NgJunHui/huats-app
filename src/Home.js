import React, { useState } from "react";
import "./App.css";
import Grid from '@mui/material/Grid'
import { generateAnimalsArray, generateTilesArray } from "./utils/generateArrays";
const Home = () => {

    const [toggleState, setToggleState] = useState(1);
    const [tilesArray, setTilesArray] = useState(generateTilesArray());
    const [animalsArray, setAnimalsArray] = useState(generateAnimalsArray());

    const resetTiles = () => {
        const newTilesArray = generateTilesArray();
        setTilesArray(newTilesArray);
        const updatedTabDetails = [...tabDetails];
        updatedTabDetails[0].buttons = newTilesArray.map((label, index) => ({
            id: index,
            label,
            showContent: false,
        }));
        setTabDetails(updatedTabDetails);
    };

    const resetAnimals = () => {
        const newAnimalsArray = generateAnimalsArray();
        setAnimalsArray(newAnimalsArray);
        const updatedTabDetails = [...tabDetails];
        updatedTabDetails[1].buttons = newAnimalsArray.map((label, index) => ({
            id: index,
            label,
            showContent: false,
        }));
        setTabDetails(updatedTabDetails);

    };

    const [tabDetails, setTabDetails] = useState([
        {
            id: 1,
            label: <div>🀄<span style={{ fontStyle: 'italic' }}> Tiles</span></div>,
            buttons: [
                { id: 1, label: tilesArray[0], showContent: false },
                { id: 2, label: tilesArray[1], showContent: false },
                { id: 3, label: tilesArray[2], showContent: false },
                { id: 4, label: tilesArray[3], showContent: false },
            ],
            resetBtn: resetTiles,
        },
        {
            id: 2,
            label: <div>🀅<span style={{ fontStyle: 'italic' }}> Animals</span></div>,
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
            {tabDetails.map((tab, tabIndex) => (
                <div
                    className={toggleState === tab.id ? "content active-content" : "content"}
                >
                    <Grid container>
                        {tab.buttons.map((button, buttonIndex) => (
                            <Grid item md={3} xs={6}>
                                <button
                                    key={button.id}
                                    className="button-19"
                                    onClick={() => toggleButtonContent(tabIndex, buttonIndex)}
                                >
                                    {button.showContent ? button.label : ""}
                                </button>
                            </Grid>
                        ))}
                    </Grid>
                    <div className="btn-div">
                        <button className="reset-btn" onClick={tab.resetBtn}>Reset</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;