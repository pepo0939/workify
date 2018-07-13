
// hello-worker returns "Hello World!" when it is created and then it destroys itself
const workerHello= new Worker('workers/hello-worker.js');
// listen to message event of workers
workerHello.addEventListener('message', event => {
    console.log('message received from workerFor => ', event.data);
});
// listen to error event of workers
workerHello.addEventListener('error', event => {
    console.error('error received from workerFor => ', event);
});

// waits 5 seconds before sending a message
const workerWaitFive = new Worker('workers/wait-five-seconds.js');
workerWaitFive.addEventListener('message', event => {
    console.log('message received from workerFor => ', event.data);
    const div = document.getElementById('result');
    div.innerHTML = 'message received => ' + event.data;
});
workerWaitFive.addEventListener('error', event => {
    console.error('error received from workerWaitFive => ', event);
});

// create worker with loop that run on a thread and it is not blocker
const workerFor = new Worker('workers/for.js');
workerFor.addEventListener('message', event => {
    console.log('message received from workerFor => ', event.data);
    console.log(event);
    const div = document.getElementById('result');
    div.innerHTML = 'message received => ' + event.data;
});
workerFor.addEventListener('error', event => {
    console.error('error received from workerWaitFive => ', event);
});

runWorker = ()=>{
    workerFor.postMessage('something');
};

killWorker = ()=>{
    workerFor.terminate();
};
