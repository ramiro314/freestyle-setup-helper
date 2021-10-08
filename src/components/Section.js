import React from "react";
import {Space} from 'antd';

const Section = (props) => {
    return (
        <Space direction="vertical" align="center" style={{ width: '100%' }}>
            {props.children}
        </Space>
    )
};

export default Section;
