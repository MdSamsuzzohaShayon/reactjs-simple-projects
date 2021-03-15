import React, { Component } from 'react';
import Item from './Item';
import Target from './Target';
import './Main.css';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, name: "Item 1" },
                { id: 2, name: "Item 2" },
                { id: 3, name: "Item 3" },
                { id: 4, name: "Item 4" },
            ],
            cards: [
                {
                    id: 2,
                    text: "this is card 2"
                },
                {
                    id: 2,
                    text: "this is card 2"
                },
                {
                    id: 3,
                    text: "this is card 3"
                },
                {
                    id: 4,
                    text: "this is card 4"
                },
                {
                    id: 5,
                    text: "this is card 5"
                },
                {
                    id: 6,
                    text: "this is card 6"
                },
                {
                    id: 7,
                    text: "this is card 7"
                },
                {
                    id: 8,
                    text: "this is card 8"
                },
            ]
        }
    }


    // WHEN WE WILL DROP ANY ITEM THIS FUNCTION  WILL HIT 
    deleteItem = (id) => {
        console.log("Deleting id: " + id);
        this.setState(prevState => {
            let items = prevState.items;
            const index = items.findIndex(item => item.id === id);
            console.log("Index: ", index);


            items.splice(index, 1);

            return { items };
        });
    }
    render() {
        return (
            <DndProvider backend={HTML5Backend} >
                <div className="ClassComponent">
                    <header className="App-header">
                        {/* <img src={logo} alt="" className="App-logo" /> */}
                        <h1 className="App-title">Welcome to react</h1>
                    </header>
                    <div className="App-intro">
                        <div className="app-container">
                            <div className="item-container">
                                {this.state.items.map((item, index) => (
                                    <Item key={item.id} item={item} handleDrop={(id) => {
                                        this.deleteItem(id)
                                    }} />
                                ))}
                            </div>
                            <Target />
                        </div>
                        {/* <div className="card-container">
                            {
                                this.state.cards.map((card, i) => (
                                    <Card
                                        key={card.id}
                                        index={i}
                                        id={card.id}
                                        text={card.text}
                                        moveCard={this.moveCard}
                                    />
                                ))
                            }
                        </div> */}
                    </div>
                </div>
            </DndProvider>
        )
    }
}

export default ClassComponent;
