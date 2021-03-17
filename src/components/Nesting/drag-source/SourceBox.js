import { FC, CSSProperties, useState, useCallback } from 'react'
import { ConnectDragSource, DragSourceMonitor } from 'react-dnd'
import { DragSource, DragSourceConnector } from 'react-dnd'
import { Colors } from './Colors'

const style = {
    border: '1px dashed gray',
    padding: '0.5rem',
    margin: '0.5rem',
}


const SourceBoxRaw = ({
    color,
    children,
    isDragging,
    connectDragSource,
    forbidDrag,
    onToggleForbidDrag,
}) => {
    const opacity = isDragging ? 0.4 : 1

    let backgroundColor
    switch (color) {
        case Colors.YELLOW:
            backgroundColor = 'lightgoldenrodyellow'
            break
        case Colors.BLUE:
            backgroundColor = 'lightblue'
            break
        default:
            break
    }

    return connectDragSource(
        <div
            style={{
                ...style,
                backgroundColor,
                opacity,
                cursor: forbidDrag ? 'default' : 'move',
            }}
            role="SourceBox"
            data-color={color}
        >
            <input
                type="checkbox"
                checked={forbidDrag}
                onChange={onToggleForbidDrag}
            />
            <small>Forbid drag</small>
            {children}
        </div>,
    )
}

const SourceBox = DragSource(
    (props) => props.color + '',
    {
        canDrag: (props) => !props.forbidDrag,
        beginDrag: () => ({}),
    },
    (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }),
)(SourceBoxRaw)



const StatefulSourceBox = (props) => {
    const [forbidDrag, setForbidDrag] = useState(false)
    const handleToggleForbidDrag = useCallback(() => {
        setForbidDrag(!forbidDrag)
    }, [forbidDrag])

    return (
        <SourceBox
            {...props}
            forbidDrag={forbidDrag}
            onToggleForbidDrag={() => handleToggleForbidDrag()}
        />
    )
}

export default StatefulSourceBox
