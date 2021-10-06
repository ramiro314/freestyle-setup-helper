import React, {useState} from "react";
import {Select} from 'antd';
import MeasurementInput from "./MeasurementInput";
import {INCHES} from "../helpers/measurements";
import Section from "./Section";
import SubSection from "./SubSection";

const Truck = ({options, truck, setTruck = f => f}) => {

    const [customTruck, setCustomTruck] = useState({
        axle_width_value: 7.25,
        axle_width_unit: INCHES,
        hanger_width_value: 4.6,
        hanger_width_unit: INCHES,
        ...options[0]
    });

    const onChangeSelect = (item) => {
        if (item === 0) {
            setTruck(customTruck)
        }else{
            setTruck(options[item]);
        }
    };

    const onChangeCustomAxle = (value, unit) => {
        const newValue = {...customTruck, axle_width_value: value, axle_width_unit: unit};
        setCustomTruck(newValue);
        setTruck(newValue);
    }

    const onChangeCustomHanger = (value, unit) => {
        const newValue = {...customTruck, hanger_width_value: value, hanger_width_unit: unit};
        setCustomTruck(newValue);
        setTruck(newValue);
    }

    const customInput = (
        <>
            <SubSection title="Axle Width">
                <MeasurementInput
                    defaultValue={customTruck.axle_width_value}
                    defaultUnit={customTruck.axle_width_unit}
                    onChange={onChangeCustomAxle}
                />
            </SubSection>
            <SubSection title="Hanger Width">
                <MeasurementInput
                    defaultValue={customTruck.hanger_width_value}
                    defaultUnit={customTruck.hanger_width_unit}
                    onChange={onChangeCustomHanger}
                />
            </SubSection>
        </>
    )

    return (
        <Section title="Truck">
            <Select
                value={truck.value}
                options={options}
                onSelect={onChangeSelect}
                style={{ width: 250 }}
            />
            {truck.value === 0 && customInput}
        </Section>);
};

export default Truck;
