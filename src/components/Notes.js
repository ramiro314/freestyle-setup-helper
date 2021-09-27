import React from "react";
import {Collapse, List} from 'antd';

const { Panel } = Collapse;

const data = [
    'VERY Alpha version, it\'s full of bugs.',
    'Custom fields do not work yet.',
    'I plan to add washers (including custom ones)',
    'Right now Deck is not doing anything. Still trying to figure out the best way to use the information.',
    'I would like some kind of diagram to help with visualisation.',
];

const Notes = () => {
    return (
        <Collapse ghost>
            <Panel header="Notes">
                <List bordered dataSource={data} renderItem={item => <List.Item>- {item}</List.Item>}/>
            </Panel>
        </Collapse>
    )
};

export default Notes;
