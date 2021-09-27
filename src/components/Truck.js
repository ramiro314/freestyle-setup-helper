import React from "react";
import {Form, Select, Space} from 'antd';
import MeasurementInput from "./MeasurementInput";

const Truck = ({options, truck, setTruck = f => f}) => {

    const onchangeSelect = (item) => {
        setTruck(options[item]);
    };

    const customImput = (
        <>
            <Form.Item label="Axle Width">
                <MeasurementInput defaultValue={7.6}/>
            </Form.Item>
            <Form.Item label="Hanger Width">
                <MeasurementInput defaultValue={7.6}/>
            </Form.Item>
        </>
    )

    return (<div className="Deck">
        <Space direction="vertical">
            <Form.Item label="Truck">
                <Select
                    value={truck.value}
                    options={options}
                    onSelect={onchangeSelect}
                    style={{ width: 250 }}
                />
            </Form.Item>
            {truck.value === "0" && customImput}
        </Space>
    </div>);
};

export default Truck;
