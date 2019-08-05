$(document).ready(function() {
  $("#landingMusic").get(0).play();
});

$("#sign-up").on("click", function(event) {
  event.preventDefault();
  window.location.href = "/signup";
});
 
$("#sign-in").on("click", function(event) {
  event.preventDefault();
  window.location.href = "/login";
});

$("#play").on("click", function(event){
  event.preventDefault();
  window.location.href = "/game";
});

$("#signinCreateCharBtn").on("click", function(event){
  console.log("test");
  event.preventDefault();
  var user = {
    userName: $("#userNamemodal").val(),
    password: $("#inputPasswordmodal").val()
  };
  if (!user.userName || !user.password) {
    return;
  }
  // If we have an username and password we run the loginUser function and clear the form
  loginUser(user.userName, user.password);
  $("#userNamemodal").val("");
  $("#inputPasswordmodal").val("");

});
// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function loginUser(userName, password) {
  $.post("/login", {
    userName: userName,
    password: password
  })
    .then(function() {
      window.location.href= "/characters";
      // If there's an error, log the error
    })
    .catch(function(err) {
      console.log(err);
    });
}
