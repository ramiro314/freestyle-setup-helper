import React, {useState} from 'react';
import { Typography, Space } from 'antd';
import './App.css';
import Deck from "./Deck";
import Truck from "./Truck";
import Wheel from "./Wheel";
import Result from "./Result";
import {unitSymbol} from "../helpers/measurements";
import decks from "../data/decks.json";
import trucks from "../data/trucks.json";
import wheels from "../data/wheels.json";
import Notes from "./Notes";

const { Title } = Typography;

const App = () => {
    const deckOptions = [
        {value: 0, label: "Custom"},
        ...decks.map(deck => ({
            value: deck.id,
            label: `${deck.manufacturer} ${deck.name} (${deck.width_value}${unitSymbol(deck.width_unit)})`,
            ...deck
        }))
    ];
    const [deck, setDeck] = useState(deckOptions[1]);

    const truckOptions = [
        {value: 0, label: "Custom"},
        ...trucks.map(truck => ({
            value: truck.id,
            label: `${truck.manufacturer} ${truck.name} (${truck.axle_width_value}${unitSymbol(truck.axle_width_unit)})`,
            ...truck
        }))
    ];
    const [truck, setTruck] = useState(truckOptions[1]);

    const wheelOptions = [
        {value: 0, label: "Custom"},
        ...wheels.map(wheel => ({
            value: wheel.id,
            label: `${wheel.manufacturer} ${wheel.name} (${wheel.width_value}${unitSymbol(wheel.width_unit)})`,
            ...wheel
        }))
    ];
    const [wheel, setWheel] = useState(wheelOptions[1]);

    return (
        <Space direction="vertical">
            <Title>Freestyle Truck Calculator</Title>
            <Notes />
            <Deck options={deckOptions} deck={deck} setDeck={setDeck}/>
            <Truck options={truckOptions} truck={truck} setTruck={setTruck}/>
            <Wheel options={wheelOptions} wheel={wheel} setWheel={setWheel}/>
            <Result deck={deck} truck={truck} wheel={wheel}/>
        </Space>
    )
};

export default App;