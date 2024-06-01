
$(document).ready(function () {
    $('#joinRewards').on('click', function () {
        var msg = "";
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){
            msg = this.responseText;
            alert(msg);
        }
        
        xhttp.open("GET", "../clickedMsg.txt");
        xhttp.send();
    });
});
