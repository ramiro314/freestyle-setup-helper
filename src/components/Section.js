import React from "react";
import {Space} from 'antd';
import SectionLabel from "./SectionLabel";

const Section = (props) => {
    return (
        <Space className={props.title} align="start">
            <SectionLabel title={props.title} />
            <Space direction="vertical">
                {props.children}
            </Space>
        </Space>)
};

export default Section;
