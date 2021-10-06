import React from "react";
import {Space} from 'antd';
import SectionLabel from "./SectionLabel";

const SubSection = (props) => {
    return (
        <Space>
            <SectionLabel title={props.title} />
            {props.children}
        </Space>)
};

export default SubSection;
