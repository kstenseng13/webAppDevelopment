$(document).ready(function () {
    $("#loginForm").submit(function(event){
        event.preventDefault();
        console.log("Logging in...");
        window.location.href = '/user';
    })
});

