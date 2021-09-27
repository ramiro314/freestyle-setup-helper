import React, {useState} from 'react';
import { Space } from 'antd';
import './App.css';
import Deck from "./Deck";
import Truck from "./Truck";
import decks from "../data/decks.json";
import trucks from "../data/trucks.json";

const unitSymbol = (unit) => (
    unit === "in" ? '"' : unit
);

const App = () => {
    const deckOptions = [
        {value: "0", label: "Custom"},
        ...decks.map(deck => ({
            value: deck.id,
            label: `${deck.manufacturer} ${deck.name} (${deck.width_value}${unitSymbol(deck.width_unit)})`
        }))
    ];
    const [deck, setDeck] = useState(deckOptions[1]);

    const truckOptions = [
        {value: "0", label: "Custom"},
        ...trucks.map(truck => ({
            value: truck.id,
            label: `${truck.manufacturer} ${truck.name} (${truck.axle_width_value}${unitSymbol(truck.axle_width_unit)})`
        }))
    ];
    const [truck, setTruck] = useState(deckOptions[1]);


    return (
        <Space direction="vertical">
            <Deck options={deckOptions} deck={deck} setDeck={setDeck}/>
            <Truck options={truckOptions} truck={truck} setTruck={setTruck}/>
        </Space>
    )
};

export default App;