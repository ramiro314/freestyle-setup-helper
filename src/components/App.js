import React, {useState} from 'react';
import {Typography, Layout, Space, Divider} from 'antd';
import './App.css';
import Deck from "./Deck";
import Truck from "./Truck";
import Wheel from "./Wheel";
import Result from "./Result";
import {MILLIMETERS, unitSymbol} from "../helpers/measurements";
import decks from "../data/decks.json";
import trucks from "../data/trucks.json";
import wheels from "../data/wheels.json";
import Notes from "./Notes";
import Washer from "./Washer";

const { Header, Content, Footer } = Layout;
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

    const [washer, setWasher] = useState({
        amount: 1,
        width_value: 1,
        width_unit: MILLIMETERS,
    });

    return (
        <Layout className="layout">
            <Header>
                <Title style={{ color: 'white' }}>Freestyle Setup Helper</Title>
            </Header>
            <Content style={{ padding: '0 50px', alignSelf: 'center' }}>
                <Space direction="vertical">
                    <Notes />
                    {/*<Divider>Deck</Divider>*/}
                    {/*<Deck options={deckOptions} deck={deck} setDeck={setDeck}/>*/}
                    <Divider>Trucks</Divider>
                    <Truck options={truckOptions} truck={truck} setTruck={setTruck}/>
                    <Divider>Wheels</Divider>
                    <Wheel options={wheelOptions} wheel={wheel} setWheel={setWheel}/>
                    <Divider>Washers</Divider>
                    <Washer washer={washer} setWasher={setWasher}/>
                    <Divider>Result</Divider>
                    <Result deck={deck} truck={truck} wheel={wheel} washer={washer}/>
                </Space>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <Divider/>
                Designed and developed by the <a href="https://discord.gg/6SB27XCc">Waltz Discord community</a>.
            </Footer>
        </Layout>
    )
};

export default App;