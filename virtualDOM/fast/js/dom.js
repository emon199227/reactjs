let array = [];
increment = 0;
let container = document.querySelector('.container');

//fast
while(increment<10000){
    array.push(++increment);
}
container.innerHTML = array.join(' ');