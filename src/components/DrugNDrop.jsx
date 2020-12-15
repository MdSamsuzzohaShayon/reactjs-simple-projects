import React from 'react';

const DrugNDrop = (props) => {
    return (
        <div className="drag-n-drop">
            {props.data.map((grp, gIdx) => (
                <div key={grp.title} className="dnd-group">
                    <div className="group-title">{grp.title}</div>
                    {grp.items.map((item, iIdx) => (
                        <div draggable key={item} className="dnd-item">
                            {item}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default DrugNDrop;
