import React from "react";
import {Form, Select, Space} from 'antd';
import MeasurementInput from "./MeasurementInput";

const Wheel = ({options, wheel, setWheel = f => f}) => {

    const onchangeSelect = (item) => {
        setWheel(options[item]);
    };
    const customImput = (
        <Form.Item label="Wheel Width">
            <MeasurementInput defaultValue={7.6}/>
        </Form.Item>
    )

    return (<div className="Wheel">
        <Space direction="vertical">
            <Form.Item label="Wheel">
                <Select
                    value={wheel.value}
                    options={options}
                    onSelect={onchangeSelect}
                    style={{ width: 250 }}
                />
            </Form.Item>
            {wheel.value === 0 && customImput}
        </Space>
    </div>);
};

export default Wheel;
