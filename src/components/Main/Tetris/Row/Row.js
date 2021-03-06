import React from 'react'
import Cell from "../Cell/Cell";

function Row(props) {
    return (
        <div className="row">
            {props.row.map((cell, i) =>
                <Cell key={i} cell={cell} cellSize={props.cellSize}/>
            )}
        </div>
    )
}

export default Row
