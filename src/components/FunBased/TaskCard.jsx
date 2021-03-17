import React from 'react';
import { Card, Segment, Icon } from 'semantic-ui-react';


const TaskCard = (props) => {
    return (
        <Card fluid color='red' >
            <Card.Content header={props.title} />
            <Card.Content description={props.details} />
            <Card.Content extra>
                <Icon name='work' />{props.status}
            </Card.Content>
        </Card >
    )
}

export default TaskCard;
