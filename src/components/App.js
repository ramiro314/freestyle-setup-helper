import React, {useState} from 'react';
import { Space } from 'antd';
import './App.css';
import Deck from "./Deck";
import decks from "../data/decks.json";

const unitSymbol = (unit) => (
    unit === "in" ? '"' : unit
);

const App = () => {
    const deckOptions = [
        {value: "0", label: "Custom"},
        ...decks.map(deck => ({
            value: deck.id,
            label: `${deck.manufacturer}, ${deck.name} (${deck.width_value}${unitSymbol(deck.width_unit)})`
        }))
    ];

    const [deck, setDeck] = useState(deckOptions[1]);


    return (
        <Space direction="vertical">
            <Deck options={deckOptions} deck={deck} setDeck={setDeck}/>
        </Space>
    )
};

export default App;