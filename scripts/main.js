const workerHello= new Worker('workers/hello-worker.js');
// listen to message event of workers
workerHello.addEventListener('message', event => {
    console.log('message received from workerFor => ', event.data);
});
// listen to error event of workers
workerHello.addEventListener('error', event => {
    console.error('error received from workerFor => ', event);
});

const workerWaitFive = new Worker('workers/wait-five-seconds.js');
workerWaitFive.addEventListener('message', event => {
    console.log('message received from workerFor => ', event.data);
    const div = document.getElementById('result');
    div.innerHTML = 'message received => ' + event.data;
});
workerWaitFive.addEventListener('error', event => {
    console.error('error received from workerWaitFive => ', event);
});

const workerFor = new Worker('workers/for.js');
workerFor.addEventListener('message', event => {
    console.log('message received from workerFor => ', event.data);
    const div = document.getElementById('result');
    div.innerHTML = 'message received => ' + event.data;
});
workerFor.addEventListener('error', event => {
    console.error('error received from workerWaitFive => ', event);
});


runWorker = ()=>{
    workerFor.postMessage(null);
};
