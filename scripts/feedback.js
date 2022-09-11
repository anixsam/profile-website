$(document).ready(function(){

  if (localStorage.getItem("feedbacks") == null)
  {
    var feedbackStore = [
      {
        "name" : "test" , 
        "email" : "test" ,
        "feedback" : "test" 
      }
    ] ;
    localStorage.setItem("feedbacks", JSON.stringify(feedbackStore));

  } 
  else
    feedbackStore = localStorage.getItem("feedbacks");

  var feedbackStoreToJson = JSON.parse(feedbackStore);

  var listElement = document.getElementById('feedback-ul');

  if(feedbackStoreToJson.length >1)
  {
    for(var i=1;i<feedbackStoreToJson.length;i++)
    {
      listElement.innerHTML+= 
      `<li class="feedback-item">
        <div class="row feedback-custom-list">
        <div class="col-lg-3 usercircle">
            <i class="fa-solid fa-user usericon"></i>
        </div>
        <div class="col-lg-8">
                <div class="feedback-prefix">
                    <b class="list-name">${feedbackStoreToJson[i]['name']}</b><br>
                    <b class="list-email">${feedbackStoreToJson[i]['email']}</b>
                </div>
                <div class="feedback-details">
                    <i><p class="list-feedback">${feedbackStoreToJson[i]['feedback']}</p></i>
                </div>
            </div>
           </div>
          </li>`;
      } 
  }

  else
  {
    listElement.innerHTML+="<h3>No Feedbacks to Display</h3>" ;
  }


  $('#submitBtn').click(function(){
    
    var username = $('#name').val();
    var email = $('#email').val();
    var feedback = $('#feedback').val();

    username == "" ? $('#nameFieldError').text("Enter your Username").attr("style","display:block") : $('#nameFieldError').attr("style","display:none");
    email == "" ? $('#emailFieldError').text("Enter your Email").attr("style","display:block") : $('#emailFieldError').attr("style","display:none");
    feedback == "" ? $('#feedbackFieldError').text("Enter your Feedback").attr("style","display:block") : $('#feedbackFieldError').attr("style","display:none");

    if(username != "" && email != "" && feedback != "")
    {
      var feedbackJson = {
        "name" : username,
        "email" : email,
        "feedback" : feedback
      } ;

      feedbackStoreToJson.push(feedbackJson);
      localStorage.setItem("feedbacks", JSON.stringify(feedbackStoreToJson));

      location.reload(true);
    }

    

  });

});