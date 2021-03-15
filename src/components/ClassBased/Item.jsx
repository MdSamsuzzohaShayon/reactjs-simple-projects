import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
// Wrap your component with DragSourceto make it draggable.

const itemSource = {
    beginDrag(props) {
        console.log("Begin drag");
        return props.item;
    },
    endDrag(props, monitor, component) {
        console.log("end drag");
        // CHECK FOR DROPING ON THE TARGET 
        // IF WE DON'T DROP INTO THE TARGET THIS WILL RETURN FROM  HERE & NOTHING HAPPEN
        if (!monitor.didDrop()) return;
        // IF WE CURRECTLY DROP INTO THE TARGET THIS WILL HANDLE OUR DROP 
        return props.handleDrop(props.item.id);
    }
}


function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { isDragging, connectDragSource, item } = this.props;
        const opacity = isDragging ? 0 : 1;   // CHANGE THE OPACITY OF DRAGABLE ITEM
        return connectDragSource(
            <div className="item" style={{ opacity }}>
                <span>{item.name}</span>
            </div>
        )
        // return (
        //     <div className="item">
        //         {this.props.item.name}
        //     </div>
        // );
    }
}




// DRAG SOURCE IS THE THICH WHICH WE WANT TO DRAG 
export default DragSource("item", itemSource, collect)(Item);
