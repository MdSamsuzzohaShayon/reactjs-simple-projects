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
            ]
        }
    }


    // WHEN WE WILL DROP ANY ITEM THIS FUNCTION  WILL HIT 
    deleteItem = (id) => {
        console.log("Deleting id: " + id);
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
                    </div>
                </div>
            </DndProvider>
        )
    }
}

export default ClassComponent;
