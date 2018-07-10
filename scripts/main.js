const workerFor = new Worker('workers/hello-worker.js');
// listen to message event of workers
workerFor.addEventListener('message', function(event) {
    console.log('message received from workerFor => ', event.data);
});
// listen to error event of workers
workerFor.addEventListener('error', function(event) {
    console.error('error received from workerFor => ', event);
});