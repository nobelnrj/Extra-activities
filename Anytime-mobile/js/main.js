var scheduler = document.querySelector('.scheduler');
var categoryList = document.querySelector('.category-list');
var slotPicker = document.querySelector('.slot-picker');
var slotContainer = document.querySelector('.slots-container');
var confirmationForm = document.querySelector('.confirmation-form');
var availableDate = document.querySelectorAll('.day.available>.calendarLink');
var category = document.querySelectorAll('.category-list>.category');
var slots = document.querySelectorAll('.slots-list>li');
var categoryName = document.querySelectorAll('.category-list>.category>.category-name');
var categoryDuration = document.querySelectorAll('.category-list>.category>.category-duration');
var backBtn = document.querySelector('.back-btn');
var currentScreen = '';
var previousScreen = '';

for(let i=0;i<category.length;i++){
    category[i].addEventListener('click', function(){
        previousScreen = categoryList;
        currentScreen = scheduler;
        toggle(categoryList,scheduler);
        document.querySelector('.confirmed-category>.category-name').innerText = categoryName[i].innerText;
        document.querySelector('.confirmed-category>.category-duration').innerText = categoryDuration[i].innerText;
    });
}

for(let i=0;i<availableDate.length;i++){
    availableDate[i].addEventListener('click', function(){
        previousScreen = scheduler;
        currentScreen = slotPicker;
        toggle(scheduler,slotPicker);
        var selectedDate = availableDate[i].getAttribute("data-id");
        var d =new Date(selectedDate);
        var dayArray = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
        var monthArray = ["januray","febrauary","march","april","may","june","july","august","september","october","november","december"];
        var finalDate = dayArray[d.getDay(selectedDate)]+', '+monthArray[d.getMonth(selectedDate)]+' '+d.getDate()+', '+d.getFullYear(selectedDate);
        document.querySelector('.scheduled-period>.date').innerText = finalDate;
    });
}

for(let i=0;i<slots.length;i++){
    slots[i].addEventListener('click',function(){
        previousScreen = slotContainer;
        currentScreen = confirmationForm;
        toggle(slotContainer,confirmationForm);
        var selectedSlot = slots[i].innerText;
        var span = `<span class="time">${selectedSlot} am - 9:30 am,
        Indian standard time</span>`;
        document.querySelector('.scheduled-period').innerHTML += span;
    });
}


function toggle(first,second){
    first.style.display = "none";
    second.style.display = "block";
}

backBtn.addEventListener('click',function(){
    toggle(currentScreen,previousScreen);
    if(previousScreen.classList.contains("scheduler")){
        previousScreen = categoryList;
        currentScreen = scheduler;
    }
    if(previousScreen.classList.contains("slots-container")){
        previousScreen = scheduler;
        currentScreen = slotPicker;
        document.querySelector('.time').remove();
    }
});