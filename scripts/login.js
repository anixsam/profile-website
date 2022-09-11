var username = "anix sam saji";
var password = "1234";

function isEmpty(element) {
  if ($(element).val() == "") {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function () {
  $(".loginBtn").click(function () {

    if(isEmpty("#email") || isEmpty("#password"))
    {
    isEmpty("#email") == true
      ? $("#emailLoginError")
          .text("Email cannot be empty")
          .attr("style", "display:block")
      : $("#emailLoginError").attr("style", "display:none");

    isEmpty("#password") == true
      ? $("#passwordError")
          .text("Password cannot be empty")
          .attr("style", "display:block")
      : $("#passwordError").attr("style", "display:none");
    }

    else
    {  

      if ($("#email").val() == username && $("#password").val() == password)
      {
        console.log("Auth Success");
        $("#passwordError").attr("style", "display:none");
        $("#emailLoginError").attr("style", "display:none");

        localStorage.setItem("loggedIn",true);
        localStorage.setItem("userId",btoa(username));

        if($("#stayCheck").is(":checked")==true)
            localStorage.setItem("stay",true);
        else
            localStorage.setItem("stay",false);

        alert(`Welcome ${username}`);
        
        window.location = "../index.html?name="+username+"&stId=1";

      }
      else
      {
        $("#passwordError")
          .text("Incorrect email or password")
          .attr("style", "display:block");
        $("#emailLoginError")
          .text("Incorrect email or password")
          .attr("style", "display:block");
      }
    }

  });
});
