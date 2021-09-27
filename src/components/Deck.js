import React from "react";
import {Form, Select, Space} from 'antd';
import MeasurementInput from "./MeasurementInput";


const Deck = ({options, deck, setDeck = f => f}) => {

    const onchangeSelect = (item) => {
        setDeck(options[item]);
    };

    return (<div className="Deck">
        <Space direction="vertical">
            <Form.Item label="Deck">
                <Select
                    value={deck.value}
                    options={options}
                    onSelect={onchangeSelect}
                    style={{ width: 250 }}
                />
            </Form.Item>
            {deck.value === "0" && <Form.Item label="Deck Width"><MeasurementInput defaultValue={7.6}/></Form.Item>}
        </Space>
    </div>);
};

export default Deck;
