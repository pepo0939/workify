const worker = workify(
    () => {
        const start = Date.now(); // milliseconds
        let x = 0;
        for (let i = 0; i < 8000000000; i++){
            x = x + i;
        }
        const time=(Date.now()-start )/1000;
        return time.toString();
    },
    (data, event) => {
        console.log('message received from workerFor => ', data);
        console.log(event);
        const div = document.getElementById('result');
        div.innerHTML = 'message received => ' + data;
    },
    (err) => {
        console.log(err);
    });

runWorker = () => {
    worker.run();
};

killWorker = () => {
    worker.terminate();
};