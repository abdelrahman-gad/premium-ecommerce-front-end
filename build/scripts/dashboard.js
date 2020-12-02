let tablinks = document.querySelectorAll('.tablinks .tablink');
tablinks.forEach(function (tablink){
    tablink.addEventListener('click', function(e ){
      let tabname = e.target.value;
      let i , tabcontent;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
    
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        // Show the current tab, and add an "active" class to the link that opened the tab
        document.querySelector(`[data-tabbody=${tabname}]`).style.display = "block";
       // document.querySelector(`[data-bodycontent=${tabname}]`);
        e.currentTarget.className += " active";
    });  
});

document.querySelector(`[data-tabbody = dashboard]`).style.display = "block";


