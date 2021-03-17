import { ComponentClass, FunctionComponent } from 'react';
import nestingDragSources from './drag-source';
import nestingDropTargets from './drop-target';

// export const componentIndex = {
//     chessboard,
//     'nesting-drag-sources': nestingDragSources,
//     'nesting-drop-targets': nestingDropTargets
// }


import React from 'react'

const Nesting = () => {
    return (
        <div>
            <nestingDragSources />
            <nestingDropTargets />
        </div>
    )
}

export default Nesting
