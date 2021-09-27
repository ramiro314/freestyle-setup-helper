import React, {useState} from "react";
import {Form, Select, Space} from 'antd';
import MeasurementInput from "./MeasurementInput";
import {MILLIMETERS} from "../helpers/measurements";

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

    const customImput = (
        <Form.Item label="Wheel Width">
            <MeasurementInput
                defaultValue={customWheel.width_value}
                defaultUnit={customWheel.width_unit}
                onChange={onChangeCustom}
            />
        </Form.Item>
    )

    return (<div className="Wheel">
        <Space direction="vertical">
            <Form.Item label="Wheel">
                <Select
                    value={wheel.value}
                    options={options}
                    onSelect={onChangeSelect}
                    style={{ width: 250 }}
                />
            </Form.Item>
            {wheel.value === 0 && customImput}
        </Space>
    </div>);
};

export default Wheel;
