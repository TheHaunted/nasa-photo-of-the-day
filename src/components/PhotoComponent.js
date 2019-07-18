import React, {useState} from 'react';

function PhotoComponent(props) {
    return (
        <div>
            <img src={props.url}/>
            <h1>{props.title}</h1>
            <p>{props.explanation}</p>
        </div>
    )
}

export default PhotoComponent;