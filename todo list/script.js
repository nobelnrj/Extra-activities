var modal = document.querySelector('.modal');
// function to open the modal to enter information
function openModal(){
    modal.style.display = "block";
}
function closeModel(){
    modal.style.display = "none";
}
window.onclick = function(e){
    if(e.target ==modal){
        closeModel();
    }
}

// count
function count(){
    var count = document.querySelectorAll('li').length - document.querySelectorAll('li.completed').length;
    var value = document.querySelector('.value');
    value.innerHTML = count;
}

count();

// creating a check button to the end of the list
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    span.className = "close";
    myNodelist[i].appendChild(span);
}

// remove the todo list
document.querySelector('.todo_body').addEventListener('dblclick',function(e){
    if(e.target.tagName != 'LI'){
        e.target.parentNode.remove();
        count();
    }
});

// add completed
document.querySelector('.todo_body').addEventListener('click',function(e){
    if(e.target.parentNode.tagName == 'LI'){
        e.target.parentNode.classList.toggle("completed");
        count();
    }
});

// placeholder
document.querySelector('input').oninput = function(e){
    if(e.target.value != ''){
        e.tagName.setAttribute("data-empty","false");
    }
}


// Add the todo to the list
function addTodo() {
    var ul = document.querySelector('ul');
    var li = document.createElement("li");
    var p = document.createElement("P");
    var inputValue = document.querySelector('.myInput').value;
    var modal = document.querySelector('.modal');
    var t = document.createTextNode(inputValue);
    li.className = "clearfix";
    p.className = "todo_content";
    li.appendChild(p);
    p.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        ul.insertBefore(li,ul.childNodes[1]);
        modal.style.display = "none";
    }
    document.querySelector('.myInput').value = "";
    var span = document.createElement("SPAN");
    span.className = "close";
    li.appendChild(span);
    count();
}


function animate(){
    document.querySelector('.placeholder').classList.toggle = "animate";
}

// scroll detector
function scrollDetect(){
    var lastScroll = 0;
  
    window.onscroll = function() {
        let currentScroll = window.scrollY;
  
        if (currentScroll > 0 && lastScroll <= currentScroll){
          lastScroll = currentScroll;
          console.log('down1');
        }else{
          lastScroll = currentScroll;
          console.log('up');
        }
    };

  }
  
  
  scrollDetect();
