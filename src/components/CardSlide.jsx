import React from 'react';
import DrugNDrop from './DrugNDrop';


const data = [
    { title: "group 1", items: [1, 2, 3] },
    { title: "group 2", items: [4, 5] }

];

const CardSlide = () => {
    return (
        <header className="App-header">
            <DrugNDrop data={data} />
        </header>
    )
}

export default CardSlide;
