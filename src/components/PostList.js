import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [counter, setCounter] = useState(0);
    const [counterDisabled, setCounterDisabled] = useState(false);
    
    
    useEffect(() => {
        console.log('axios useEffect');
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(result => {
                console.log(result);
                setPosts(result.data);
            })
    }, []);

    useEffect(() => {
        console.log('counter useEffect');
        if(counter === 3){
            setCounterDisabled(true);
        }
    }, [counter]);

    const reset = () => {
        setCounter(0);
        setCounterDisabled(false);
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)} disabled={counterDisabled}>{counter}</button>
            <br />
            <button onClick={reset}>Reset</button>
            <hr />
            <h2>Posts List</h2>
            {
                posts.length > 0 && posts.map(post => {
                    return <div key={post.id}>{post.title}</div>
                })
            }
        </>
    );
}

export default PostList;

