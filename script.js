n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = y + "/" + m + "/" + d;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myButton").classList.toggle("aktiv");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById("mySharedown").addEventListener('click',function(event){
    event.stopPropagation();
});
