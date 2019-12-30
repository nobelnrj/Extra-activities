var form  = document.getElementsByTagName('form')[0];
var input = document.querySelectorAll('.form-group>input');
var error = document.querySelectorAll('.error');
var firstName = document.querySelector('.first-name');
var lastName = document.querySelector('.last-name');
var outputMail = document.querySelector('.email');
for(let i=0;i<input.length;i++){
    input[i].addEventListener("blur", function () {
        var inputreg = /[A-Za-z]+/gm;
        var mailreg = /[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/g;
        /* /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g */
        var passreg = /.{8,}/g;
        var warning = error[i];
        if(input[i].name == "Name"){
            var name = input[i].value;
            check(inputreg,name,warning);
            if(input[i].id == "first-name"){
                firstName.innerText = `${name}`;
            }
            else if(input[i].id == "last-name"){
                lastName.innerText = `${name}`;
            }
        }
        else if(input[i].name == "Mail Id"){              
            var name = input[i].value;
            check(mailreg,name,warning);
            if(name != 0){
                outputMail.innerText = `your mail id is ${name}`;
            }
            else{
                outputMail.innerText = '';
            }
        }
        else if(input[i].name == "Secured Password"){
            var name = input[i].value;
            check(passreg,name,warning);
        }
    }, false);
    form.addEventListener("submit", function (event) {
        if (!input[i].validity.valid) {
            var name = input[i].name;
            error[i].innerHTML = `I expect a ${name}`;
            error[i].className = "error active";
            event.preventDefault();
        }
        else if (input[i].value == ''){
            error[i].innerHTML = "The field should not be empty";
            error[i].className = "error active";
            event.preventDefault();
        }
      }, false);
}

function check(reg,value,error){
    if(value != ''){
        if(reg.test(value) != true){
            error.innerHTML = "Not a valid input"; 
            error.className = "error active";
            return false;
        }
        else{
            error.innerHTML = ""; 
            error.className = "error";
        }
    }
}
