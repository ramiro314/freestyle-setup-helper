import React, {useState} from "react";
import {Select} from 'antd';
import MeasurementInput from "./MeasurementInput";
import {MILLIMETERS} from "../helpers/measurements";
import Section from "./Section";
import SubSection from "./SubSection";

const Wheel = ({options, wheel, setWheel = f => f}) => {

    const [customWheel, setCustomWheel] = useState({
        width_value: 36,
        width_unit: MILLIMETERS,
        ...options[0]
    });

    const onChangeSelect = (item) => {
        if (item === 0) {
            setWheel(customWheel)
        }else{
            setWheel(options[item]);
        }
    };

    const onChangeCustom = (value, unit) => {
        const newValue = {...customWheel, width_value: value, width_unit: unit};
        setCustomWheel(newValue);
        setWheel(newValue);
    }

    const customInput = (
        <SubSection title="Deck Width">
            <MeasurementInput
                defaultValue={customWheel.width_value}
                defaultUnit={customWheel.width_unit}
                onChange={onChangeCustom}
            />
        </SubSection>
    )

    return (
        <Section title="Wheel">
            <Select
                value={wheel.value}
                options={options}
                onSelect={onChangeSelect}
                style={{ width: 250 }}
            />
            {wheel.value === 0 && customInput}
        </Section>);
};

export default Wheel;
