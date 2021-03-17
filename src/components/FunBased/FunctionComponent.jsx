import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Image, Segment, Container, Card, Icon } from 'semantic-ui-react';
import { DndProvider } from 'react-dnd';

import { HTML5Backend } from 'react-dnd-html5-backend'
import Tasks from './Tasks';
import MenuBar from './MenuBar';


function FunctionComponent() {
    return (
        <div>
            <MenuBar />
            <DndProvider backend={HTML5Backend}>

                <Container>
                    <Grid stackable columns={2}>
                        <Grid.Column width={4}>
                            <Segment>
                                <Card.Group>
                                    <Tasks />
                                </Card.Group>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Segment>
                                <Image src='/images/wireframe/paragraph.png' />
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Container>
            </DndProvider >

        </div >
    )
}

export default FunctionComponent;
