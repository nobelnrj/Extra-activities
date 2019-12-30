var form  = document.getElementsByTagName('form')[0];
var input = document.querySelectorAll('.form-group>input');
var error = document.querySelectorAll('.error');
for(let i=0;i<input.length;i++){
    input[i].addEventListener("input",function(){
        var regex = /[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/g;
        var str = document.querySelector('#mail').value;
        var res = regex.test(str);
        console.log(res);
    })
}