var loadFile = function(event) {
    document.querySelector('.preview-container').innerHTML = '';
    for (var i=0;i<event.target.files.length;i++){
      console.log(event.target.files);
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var filesize = event.target.files[i].size;
      if (filesize > 1024){
        filesize = filesize / 1024;
        filesize = Math.round(filesize);
        if(filesize > 1024){
          filesize = filesize / 1024;
          filesize = Math.round(filesize);
          filesize = filesize + ' MB';
        }
        else{
          filesize = filesize + ' KB';
        }
      }
      else{
        filesize = filesize + ' B';
      }
      var imageHolder = document.createElement("DIV");
      imageHolder.className = "image-holder";
      var image = document.createElement("IMG");
      image.className = "preview-image";
      image.src = URL.createObjectURL(event.target.files[i]);
      imageHolder.appendChild(image);
      var name = document.createElement("SPAN");
      name.className = "file-name";
      name.innerText = event.target.files[i].name;
      var size = document.createElement("SPAN");
      size.className = "file-size";
      size.innerText = filesize;
      var d = new Date();
      var date = document.createElement("SPAN");
      date.innerText =d.getDate()+ ' '+ months[d.getMonth()]+ ' ' + d.getHours() + ':' +d.getMinutes();
      date.className = "uploaded-date";
      var li = document.createElement("LI");
      li.appendChild(imageHolder);
      li.appendChild(name);
      li.appendChild(size);
      li.appendChild(date);
      document.querySelector('.preview-container').appendChild(li);
    }
};