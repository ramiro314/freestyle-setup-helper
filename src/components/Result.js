import React from "react";
import {Typography} from 'antd';
import {toInches, toMillimeter} from "../helpers/measurements";

const { Text } = Typography;

const calculateHangerWheelsInImperial = (truck, wheel) => {
    // Missing washers
    return toInches(truck.hanger_width_value, truck.hanger_width_unit) + toInches(wheel.width_value, wheel.width_unit) * 2
};

const calculateHangerWheelsInMetric = (truck, wheel) => {
    return toMillimeter(calculateHangerWheelsInImperial(truck, wheel), "mm")
};

const Deck = ({deck, truck, wheel}) => {
    console.log(deck)
    console.log(truck)
    console.log(wheel)
    return (
        <>
            <Text>The complete width of your trucks and wheels will be {calculateHangerWheelsInMetric(truck, wheel).toFixed(2)}"</Text>
        </>
    )
};

export default Deck;
