import React from "react";

const SectionLabel = ({title = ''}) => {
    return (
        <div className="ant-form-item-label">
            <label title={title}>
                {title}
            </label>
        </div>
    )
};

export default SectionLabel;
