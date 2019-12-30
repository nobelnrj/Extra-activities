var xhttp1 = new XMLHttpRequest();
var xhttp2 = new XMLHttpRequest();
xhttp1.open("GET","https://api.github.com/users",true);
document.querySelector('ul').className = 'loader';
xhttp1.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var response1 = JSON.parse(xhttp1.responseText);
        var output = '';
        for(var i=0;i<10;i++){
            var image = '<img src="'+response1[i].avatar_url+'">';
            var name = '<p>'+response1[i].login+'</p>';
            getapiDetails(response1[i].followers_url);
            var link = '<a href="'+response1[i].html_url+'" target="_blank">github</a>';
            var value = image+name+link;
            output += '<li>'+value+'</li>';
            document.querySelector('ul').className = '';
        }
        document.querySelector('ul').innerHTML = '';
        document.querySelector('ul').innerHTML +=output;
    }
};
xhttp1.send();
function getapiDetails(url){
    var value;
    xhttp2.open("GET",url,true);
    xhttp2.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(xhttp2.responseText);
            console.log(response.length);
            value = response.length;
        }
    };

    xhttp2.send();
    return value;
}