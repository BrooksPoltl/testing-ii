
import React from 'react'


const Display = (props) =>{
    return (
        <div data-testid='display'>
            <p data-testid='balls'>Balls: {props.balls}</p>
            <p data-testid='strikes'>strikes: {props.strikes}</p>
        </div>
    )
}

export default Display