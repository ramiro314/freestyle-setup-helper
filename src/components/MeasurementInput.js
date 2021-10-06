import React, {useState} from "react";
import { InputNumber, Select } from 'antd';
import {INCHES, MILLIMETERS} from "../helpers/measurements";

const { Option } = Select;

const step = (unit) => {
  return unit === INCHES ? 0.1 : 1;
};

const allowNegativeValue = (negativeValue) => {
  return negativeValue ? Number.MIN_SAFE_INTEGER : 0;
};

const MeasurementInput = ({ defaultValue = 0, defaultUnit = INCHES, negativeValue = false, onChange = f => f }) => {

    const [value, setValue] = useState(defaultValue);
    const [unit, setUnit] = useState(defaultUnit);

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
    return (
        <InputNumber
            className="MeasurementInput"
            addonAfter={selectAfter(unit)}
            defaultValue={value}
            step={step(unit)}
            min={allowNegativeValue(negativeValue)}
            onChange={onChangeValue}
        />);
};

export default MeasurementInput;
