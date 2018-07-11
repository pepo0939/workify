window.onload=() => {
    const start = Date.now(); // milliseconds
    console.time();
    let x = 0;
    for (let i = 0; i < 8000000000; i++){
        x = x + i;
    }
    console.timeEnd();
    const time=(Date.now()-start )/1000;
    console.log('ended in : ', time, ' seconds');
    const div = document.getElementById('result');
    div.innerHTML = `lading time: ${time}`;
};