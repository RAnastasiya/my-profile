import React from 'react'
import './Cell.css'

function Cell (props) {
    return (
        <div className={'cell ' + props.cell}
             style={{height: props.cellSize, width: props.cellSize}}/>
    )
}

export default Cell
