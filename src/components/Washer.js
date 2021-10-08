import React from "react";
import {InputNumber} from 'antd';
import MeasurementInput from "./MeasurementInput";
import Section from "./Section";
import SubSection from "./SubSection";

const Washer = ({washer, setWasher = f => f}) => {
    const onChangeAmount = (value) => {
        setWasher({...washer, amount: value});
    }

    const onChangeWidth = (value, unit) => {
        setWasher({...washer, width_value: value, width_unit: unit});
    }

    return (
        <Section title="Washers">
            <SubSection title="Amount">
                <InputNumber
                    className="MeasurementInput"
                    defaultValue={washer.amount}
                    min={0}
                    onChange={onChangeAmount}
                />
            </SubSection>
            <SubSection title="Width">
                <MeasurementInput
                    defaultValue={washer.width_value}
                    defaultUnit={washer.width_unit}
                    onChange={onChangeWidth}
                />
            </SubSection>
        </Section>);
};

export default Washer;
