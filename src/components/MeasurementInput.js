import React, {useState} from "react";
import { InputNumber, Select } from 'antd';
import {INCHES, MILLIMETERS} from "../helpers/measurements";

const { Option } = Select;

const MeasurementInput = ({ defaultValue = 0, defaultUnit = INCHES, onChange = f => f }) => {

    const [value, setValue] = useState(defaultValue);
    const [unit, setUnit] = useState(defaultUnit);
    console.log(unit)


    const onChangeValue = (v) => {
        setValue(v)
        onChange(v, unit)
    }

    const onChangeUnit = (u) => {
        setUnit(u)
        onChange(value, u)
    }

    const selectAfter = (defaultUnit = INCHES) => (
        <Select defaultValue={defaultUnit} className="select-after" onChange={onChangeUnit}>
            <Option value={INCHES}>in</Option>
            <Option value={MILLIMETERS}>mm</Option>
        </Select>
    );
    console.log("here!")
    return (<InputNumber addonAfter={selectAfter(unit)} defaultValue={value} onChange={onChangeValue} />);
};

export default MeasurementInput;
