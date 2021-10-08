import React from "react";
import {Typography} from 'antd';
import {MILLIMETERS, toInches, toMillimeter} from "../helpers/measurements";

const { Text } = Typography;

const calculateHangerWheelsInImperial = (truck, wheel, washer) => {
    return toInches(truck.hanger_width_value, truck.hanger_width_unit) +
        toInches(wheel.width_value, wheel.width_unit) * 2 +
        toInches(washer.width_value, washer.width_unit) * washer.amount
};

const calculateHangerWheelsInMetric = (truck, wheel, washer) => {
    // Doesn't work?
    return toMillimeter(calculateHangerWheelsInImperial(truck, wheel, washer), MILLIMETERS)
};

const Deck = ({deck, truck, wheel, washer}) => (
        <>
            <Text strong>The complete width of your trucks and wheels will be {calculateHangerWheelsInImperial(truck, wheel, washer).toFixed(3)}"</Text>
        </>
);

export default Deck;
