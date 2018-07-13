self.onmessage = function(event) {
    const start = Date.now(); // milliseconds
    let x = 0;
    for (let i = 0; i < 8000000000; i++){
        x = x + i;
    }
    const time=(Date.now()-start )/1000;
    self.postMessage(time.toString());
};