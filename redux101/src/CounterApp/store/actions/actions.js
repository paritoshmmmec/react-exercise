
import {
    INCREMENT_COUNTER,
    FETCH_ORDERS,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from './actionTypes'

export const incrementCounter = (count) => {
    return {
        type: INCREMENT_COUNTER,
        count
    }
}

export const fetchOrders = () => {
    return {
        type: FETCH_ORDERS
    }
}

export const requestPosts = () => {
    return {
        type: REQUEST_POSTS
    }
}

function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts: posts,
        receivedAt: Date.now()
    }
}


export const fetchPosts = () => {
    return (dispatch, _, { fetchPostService }) => {
        dispatch(requestPosts())
        return fetchPostService()
            .then(json => dispatch(receivePosts(json)))
    }
}
