import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Card, Segment, Icon } from 'semantic-ui-react';
import { ItemTypes } from '../../utils/Items';





const TaskCard = (props) => {
    const [{ isDragging }, drag] = useDrag({
        // DECLARING THE RESULT / HERE ITEM IS THE RESULT 
        type: ItemTypes.CARD,
        // ITEM IS THE OBJECT THAT WE WILL PASS FROM DRAG EVENT 
        item: {
            type: ItemTypes.CARD,
            id: props._id
        },
        // GETTING ALL THE EXTRA PROPS 
        collect: monitor => ({
            idDragging: !!monitor.isDragging()
        })
    });


    // const [collectedProps, drop] = useDrop({
    //     accept: { type: ItemTypes.CARD },
    //     collect: (monitor) => { },
    // });


    // WHEN WE SET REF IS EQUAL DRAG THIS ELEMENT WILL BE DRAGABLE 


    return (
        <Card fluid color='red'
            ref={drag}
            opacity={isDragging ? '0.5' : '1'}
        >

            <Card.Content header={props.title} />
            <Card.Content description={props.details} />
            <Card.Content extra>
                <Icon name='work' />{props.status}
            </Card.Content>
        </Card >
    )
}

export default TaskCard;
