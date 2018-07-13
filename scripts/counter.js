// counter to check the worker is blocker or not
let counter = 0;

runAdd = () => {
    const div = document.getElementById('counter');
    counter+=1;
    div.innerHTML = counter.toString();
};

runSubtract = () => {
    const div = document.getElementById('counter');
    counter-=1;
    div.innerHTML = counter.toString();
};