import React, { useState, useRef } from 'react';

const DrugNDrop = (props) => {
    // https://reactjs.org/docs/hooks-reference.html#useref
    const [list, setList] = useState(props.data);
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        console.log("Drag start", params);
        dragItem.current = params;
        console.log("dragItem.current : ", dragItem.current);
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', (handleDragEnd));
        setTimeout(() => {
            setDragging(true);
        }, 0);

    }

    const handleDragEnter = (e, params) => {
        console.log("entering drag", params);
        const currentItem = dragItem.current;
        if (e.target !== dragNode.current) {
            console.log("traget is not same");
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList));
                newList[params.gIdx].items.splice(params.iIdx, 0, newList[currentItem.gIdx].items.splice(currentItem.iIdx,1)[0]);
                dragItem.current = params;
                return newList;
            });
        }
    }

    const handleDragEnd = () => {
        console.log("Drag end");
        setDragging(false);
        dragNode.current.removeEventListener('dragend', (handleDragEnd));
        dragItem.current = null;
        dragNode.current = null;
    }
    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if (currentItem.gIdx === params.gIdx && currentItem.iIdx === params.iIdx) {
            return "current dnd-item"
        }
        return "dnd-item";
    }




    return (
        <div className="drag-n-drop">
            {list.map((grp, gIdx) => (
                <div key={grp.title} className="dnd-group" onDragEnter={dragging && !grp.items.length? e => { handleDragEnter(e, {gIdx, iIdx:0}) }: null}  >
                    <div className="group-title">{grp.title}</div>
                    {grp.items.map((item, iIdx) => (
                        <div
                            draggable
                            onDragStart={e => { handleDragStart(e, { gIdx, iIdx }) }}
                            onDragEnter={dragging ? e => { handleDragEnter(e, {gIdx, iIdx}) } : null}
                            key={item}
                            className={dragging ? getStyles({ gIdx, iIdx }) : "dnd-item"}>
                            {item}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default DrugNDrop;
