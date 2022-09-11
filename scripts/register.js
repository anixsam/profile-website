function isEmpty(element) 
{
    if ($(element).val() == "") {
      return true;
    } else {
      return false;
    }
}

$(document).ready(function(){

    $('#registerBtn').click(function()
    {
        isEmpty("#firstname") ? $('#firstNameError').text("Enter First Name").attr("style","display:block") : $('#firstNameError').attr("style","display:none");
        isEmpty("#secondname") ? $('#secondNameError').text("Enter Second Name").attr("style","display:block") : $('#secondNameError').attr("style","display:none");
        isEmpty("#email") ? $('#emailError').text("Enter Email").attr("style","display:block") : $('#emailError').attr("style","display:none");
        isEmpty("#phone") ? $('#phoneError').text("Enter Phone Number").attr("style","display:block") : $('#phoneError').attr("style","display:none");
        isEmpty("#date") ? $('#dateError').text("Enter DOB").attr("style","display:block") : $('#dateError').attr("style","display:none");
        isEmpty("#password") ? $('#passError').text("Enter Password").attr("style","display:block") : $('#passError').attr("style","display:none");
        isEmpty("#confPass") ? $('#confPassError').text("Enter Password").attr("style","display:block") : $('#confPassError').attr("style","display:none");

        var firstname = $('#firstname').val()
        var secondname = $('#secondname').val()
        var email = $('#email').val()
        var phone = $('#phone').val()
        var date = $('#date').val()
        var password = $('#password').val()
        var confPass = $('#confPass').val()
        

        if(password != confPass)
        {
            $('#confPassError').text("Both passwords don't match").attr("style","display:block")
        }
        

        else if(!isEmpty("#firstname") && !isEmpty("#secondname") && !isEmpty("#email") && !isEmpty("#phone") && !isEmpty("#date") &&  !isEmpty("#password") && !isEmpty("#confPass") )
        {
            alert(
                `Registration Successfull \n
                Name : ${firstname} ${secondname} \n
                Email : ${email} \n
                Phone : ${phone} \n
                DOB : ${date}
                `                
            );

            window.location = "./login.html"

        }
    }
    );
});