$(document).ready(function() {
  $("#accountMusic").get(0).play();
});

function addPlayer(playerData) {
  $.post("/api/signup", playerData).then(function () {
    // res.render("characterCreation");
    console.log("player data being passed");
    window.location.href = "/characters";
  });
}

$("#add-account").on("click", function (event) {
  event.preventDefault();
  const buttonSound = new Audio("../sfx/onButtonClick.mp3");
  buttonSound.play();
  console.log("Add player button clicked.");

  //validate the form here?
  // if(!newPlayer.userName.length > 0 && !newPlayer.password.length > 0){
  //   return;} 
  addPlayer ({
    userName: $("#userName").val(),
    password: $("#inputPassword").val(),
    gender: $("input[name=inlineRadioOptions]:checked").val(),
    age: $("#age").val(),
    lastAvatarId: $("#lastAvatarId").val()
  });
});
// if (newPlayer.userName.length > 0 && newPlayer.password.length > 0) {
//   $.ajax({
//     type: "post",
//     url: "/api/signup",
//     data: newPlayer
//   }).then(function () {
//     window.location.href = "/character";
//   });
// } else {
//   console.log("**Please complete the entire form.**");
//   $("#create-err-msg").empty("").text("**Please complete the entire form.**");
// }

