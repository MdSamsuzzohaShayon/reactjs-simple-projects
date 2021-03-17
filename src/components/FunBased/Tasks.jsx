import React from 'react';
import { useState, createContext } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import TaskCard from './TaskCard';
import CardTarget from './CardTarget';
export const CardContext = createContext({
    markAsDone: null
});



const Tasks = () => {
    const [taskList, setTaskList] = useState([
        {
            _id: (Math.random() * 100).toFixed(0),
            status: 'wip',
            category: "React",
            title: "ReactJS DND Tutorial",
            details: "This is gonna be awesome React"
        },
        {
            _id: (Math.random() * 100).toFixed(0),
            status: 'wip',
            category: "Node",
            title: "NodeJS Tutorial",
            details: "This is gonna be awesome NodeJS"
        },
        {
            _id: (Math.random() * 100).toFixed(0),
            status: 'wip',
            category: "PHP",
            title: "PHP Tutorial",
            details: "This is gonna be awesome PHP"
        },
    ]);





    const markAsDone = _id => {
        // FILTER THE TASK WITH SPECIFIC ID 
        const task = taskList.filter((task, id) => task._id === _id);
        // SET THAT TASK STATUS AS DONE 
        task[0].status = "done";
        // SET THE STATE / CONCAT THE STATE
        setTaskList(taskList.filter((task, i) => task._id !== _id).concat(task[0]));
    }




    return (
        <div>
            <CardContext.Provider value={{ markAsDone }} >
                {/* <Card fluid color='red' >
                <Card.Content header={'About Amy'} />
                <Card.Content description={description} />
                <Card.Content extra>
                    <Icon name='user' />4 Friends
                </Card.Content>
            </Card> */}
                <Segment>
                    <Card.Group>
                        {
                            taskList.filter((task, i) => task.status === 'wip')
                                .map((task, i) => (
                                    <TaskCard
                                        key={task._id.toString()}
                                        _id={task._id}
                                        category={task.category}
                                        title={task.title}
                                        status={task.status}
                                        details={task.details}
                                    />
                                ))
                        }
                    </Card.Group>
                </Segment>
                <Segment>
                    <Card.Group>
                        {/* HERE WE WILL DROP OUR ELEMENT  */}
                        <CardTarget >
                            {
                                taskList.filter((task, i) => task.status === 'done')
                                    .map((task, i) => (
                                        <TaskCard
                                            key={task._id.toString()}
                                            _id={task._id}
                                            category={task.category}
                                            title={task.title}
                                            status={task.status}
                                            details={task.details}
                                        />
                                    ))
                            }
                        </CardTarget>
                    </Card.Group>
                </Segment>
            </CardContext.Provider>

        </div>
    )
}

export default Tasks;
