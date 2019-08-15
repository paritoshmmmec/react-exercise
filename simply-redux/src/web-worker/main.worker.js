import Worker from './worker.js';
const worker = new Worker();

worker.postMessage({ a: 1 });
worker.onmessage = function (event) {
    console.log(event);
};

export default worker;