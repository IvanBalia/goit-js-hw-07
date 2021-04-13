const counter = {
    value:0,
    increment() {
        this.value+=1
    },
decrement() {
    this.value-=1
}
}
const counterValue = counter.value;
const valueSpan = document.querySelector('span');
const buttons = document.querySelectorAll('button');
const btnDecrement = buttons[0];
const btnIncrement = buttons[1];
btnDecrement.addEventListener('click',function(){counter.decrement(); valueSpan.textContent = counter.value;});
btnIncrement.addEventListener('click',function(){counter.increment();valueSpan.textContent = counter.value;});

