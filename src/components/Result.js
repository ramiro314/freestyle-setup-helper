import React from "react";
import {Typography} from 'antd';
import {MILLIMETERS, toInches, toMillimeter} from "../helpers/measurements";

const { Text } = Typography;

const calculateHangerWheelsInImperial = (truck, wheel) => {
    // Missing washers
    return toInches(truck.hanger_width_value, truck.hanger_width_unit) + toInches(wheel.width_value, wheel.width_unit) * 2
};

const calculateHangerWheelsInMetric = (truck, wheel) => {
    // Doesn't work?
    return toMillimeter(calculateHangerWheelsInImperial(truck, wheel), MILLIMETERS)
};

const Deck = ({deck, truck, wheel}) => (
        <>
            <Text>The complete width of your trucks and wheels will be {calculateHangerWheelsInImperial(truck, wheel).toFixed(3)}"</Text>
        </>
);

export default Deck;
