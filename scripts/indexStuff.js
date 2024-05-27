
$.get("../components/navbar.html", function (data) {
    $("#navbar").replaceWith(data);
});
$.get("../components/footer.html", function (data) {
    $("#footer").replaceWith(data);
});

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
