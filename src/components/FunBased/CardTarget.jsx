import React from 'react';
import TaskCard from './TaskCard';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/Items';
import { CardContext } from './Tasks';
import { useContext } from 'react';

console.log(ItemTypes.CARD);

const CardTarget = props => {


    const { markAsDone } = useContext(CardContext);
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => markAsDone(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });
    return (

        <TaskCard ref={drop} style={isOver ? "background: green" : ""}>
            {props.children}
        </TaskCard>


    )
}

export default CardTarget;
