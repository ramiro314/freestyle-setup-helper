import React from "react";
import {Select} from 'antd';
import MeasurementInput from "./MeasurementInput";
import Section from "./Section";
import SubSection from "./SubSection";

const Deck = ({options, deck, setDeck = f => f}) => {

    const onchangeSelect = (item) => {
        setDeck(options[item]);
    };

    const customInput = (
        <SubSection title="Deck Width">
            <MeasurementInput defaultValue={7.6}/>
        </SubSection>
    );

    return (
        <Section title="Deck">
            <Select
                value={deck.value}
                options={options}
                onSelect={onchangeSelect}
                style={{ width: 270 }}
            />
            {deck.value === 0 && customInput}
        </Section>);
};

export default Deck;
