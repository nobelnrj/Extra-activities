window.onload = function(){
let slider = document.querySelectorAll('.slider');
let output = document.querySelectorAll('.value');
for(let i=0; i<slider.length;i++){
    output[i].value = `$${slider[i].value}`;
    slider[i].oninput = function() {
        output[i].value = `$${this.value}`;
        let left = (this.value-this.getAttribute('min'))/(this.getAttribute('max')-this.getAttribute('min'));
        slider[i].style.background = `-webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(${left}, #23c0f5),
        color-stop(${left}, #c4cdd5)
        )`;
    }
    output[i].oninput = function() {
        let value =  this.value.match(/(\d+)/g);
        slider[i].value = value;
        let left = (value-slider[i].getAttribute('min'))/(slider[i].getAttribute('max')-slider[i].getAttribute('min'));
        slider[i].style.background = `-webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(${left}, #23c0f5),
        color-stop(${left}, #c4cdd5)
        )`; 
    }
}
}