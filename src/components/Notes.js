import React from "react";
import {Collapse, List} from 'antd';

const { Panel } = Collapse;

const data = [
    'VERY Alpha version.',
    'This currently only works with completely offset wheels. I\'m working on adding supoport for other kinds of wheels',
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
