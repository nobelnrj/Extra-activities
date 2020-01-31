window.onload = function(){
    var cardnumberValue = document.querySelector('#cardnumber-value');
    var cardnumberInput = document.querySelector('#cardnumber-input');
    var holdernameValue = document.querySelector('#holdername-value');
    var holdernameInput = document.querySelector('#holdername-input');
    var expiryMonth = document.querySelector('#expiry-month');
    var expiryYear = document.querySelector('#expiry-year');
    var expiryDateValue = document.querySelector('#expirydate-value');
    var arr3 = [];

    cardnumberInput.addEventListener('input',function(){
        var newVal = '';
        var val = cardnumberInput.value.replace(/ /g,"");
        var length = val.length;
        for (var i=0;i<length;i++){
            if(i%4 == 0 && i > 0){
                newVal = newVal.concat(' ');
            }
            newVal = newVal.concat(val[i]);
        }
        cardnumberInput.value = newVal;
        if(cardnumberInput.checkValidity()){
            printCardNumber();
        }
        else{
            cardnumberInput.value = '';
        }
    });

    // function to replace a letter in a string
    String.prototype.replaceAt=function(index, replacement) {
        return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
    }

    function printCardNumber(){ // to print the card number
        var value = "XXXX XXXX XXXX XXXX";
        var inputValue = cardnumberInput.value.split('');
        for(var i=0;i<inputValue.length;i++){
            value = value.replaceAt(i,inputValue[i]);
        }
        cardnumberValue.value = value;
    };

    holdernameInput.addEventListener('input',printHolderName);

    function printHolderName(){ // to print the holder name
        holdernameValue.value =  holdernameInput.value;
        if(holdernameInput.value == ''){
            holdernameValue.value = 'HOLDER NAME';
        }
    };

    expiryMonth.addEventListener('input',function(e){
        printExpiryDate(e,expiryMonth.value);
    });

    expiryYear.addEventListener('input',function(e){

        yearvalue = expiryYear.value.substr(2,4);
        printExpiryDate(e,yearvalue);
    });

    function printExpiryDate(e,value){ // to print expiry date
        arr3 = expiryDateValue.value.split('/');
        if(e.target.id === "expiry-month"){
            arr3[0] = value;
        }
        else{
            arr3[1] = value;
        }
        var newDate = arr3[0] + '/' + arr3[1];
        expiryDateValue.value = newDate;
    }
}