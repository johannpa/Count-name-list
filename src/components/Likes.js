import React, { useState } from 'react';

const Likes = () => {
    const [nbLikes, setnbLikes] = useState(0);
    
    const decrease = () => {
        if(nbLikes > 0){
            setnbLikes(nbLikes - 1);
        }
    }

    const add = () => {
        setnbLikes(nbLikes + 1);
    }

    const resetLikes = () => {
        setnbLikes(0);
    }

    return (
        <>
            <button onClick={decrease}>-</button>
            {nbLikes}
            <button onClick={add}>+</button>
            <br />
            <button onClick={resetLikes}>Reset</button>
        </>
    );
}

export default Likes;