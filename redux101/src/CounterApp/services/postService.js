import fetch from 'cross-fetch'

export const fetchPostService = () =>
    fetch(`https://my-json-server.typicode.com/typicode/demo/comments`)
        .then(response => response.json())

