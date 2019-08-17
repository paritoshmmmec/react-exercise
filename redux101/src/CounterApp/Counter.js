import React from 'react'
import NestedAnotherContainer from './NestedAnotherContainer';

const Counter = ({ count, incrementCounter, fetchPosts, posts }) => {
    console.log(fetchPosts)
    console.log(incrementCounter)
    return (
        <div>
            <h1>Parent Container</h1>
            <NestedAnotherContainer fetchPosts={fetchPosts} count={count}
                increment={() => incrementCounter(1)}
            />
            {posts.map((post) =>
                <h1 key={post.id}>{post.body}</h1>
            )}
        </div>
    )
}

export default Counter;