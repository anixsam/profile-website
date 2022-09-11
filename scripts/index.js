$(document).ready(function(){
    var loggedState = localStorage.getItem("loggedIn");
    var stayState = localStorage.getItem("stay");

    var urlString = window.location;
    var url = new URL(urlString);
    var stId = url.searchParams.get("stId");

    var userFromUrl = url.searchParams.get("name");

    var user = userFromUrl==null ? atob(localStorage.getItem("userId")).toUpperCase() : userFromUrl.toUpperCase();

    if(loggedState=="true" && stayState=="false" && stId == null)
    {
        alert("Session Expired! Please Login again");
        window.location = "./pages/login.html";
    }

    if(loggedState=="false")
    {
        window.location = "./pages/login.html";
    }
    
    $("#user").text(`${user}`);

    $("#logout").click(function(){
        localStorage.setItem("loggedIn",false);
        localStorage.setItem("stay",false);
        window.location = "./pages/login.html";
    });
});
