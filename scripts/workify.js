workify=(workerCode, onSuccess, onError)=>{

    const workerFrame = `self.postMessage('Created');
    self.onmessage = event => { self.postMessage((${workerCode.toString()})(event.data));};`;

    const blobWorker = new Blob([workerFrame], {type: 'application/javascript'});
    const worker = new Worker(window.URL.createObjectURL(blobWorker));

    worker.addEventListener('message', (event) => {
        if(event.data === 'Created'){
            console.log('Worker Created');
            console.log(event);
            return;
        }
        onSuccess && onSuccess(event.data, event);
    });

    worker.addEventListener('error', (event) => {
        onError && onError(event);
    });

    return {
        run(data){
            worker.postMessage(data);
        },
        terminate(){
            worker.terminate();
        }
    }
};