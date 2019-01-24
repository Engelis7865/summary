var modal = document.getElementById('myModel');
var btn = document.getElementById("foto");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    // alert(modal);
}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}