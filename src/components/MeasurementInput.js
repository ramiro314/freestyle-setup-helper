import React from "react";
import { InputNumber, Select } from 'antd';

const { Option } = Select;

const selectAfter = (
    <Select defaultValue="in" className="select-after">
        <Option value="in">in</Option>
        <Option value="mm">mm</Option>
    </Select>
);

const MeasurementInput = ({ defaultValue = '' }) => (
    <InputNumber addonAfter={selectAfter} defaultValue={defaultValue} />
);

export default MeasurementInput;
