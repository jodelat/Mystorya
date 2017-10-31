
//This section sets up the edit profile functions
$("#editProfile").on("click", function(){
	$(".profileText").prop("disabled", false);
  $("#editProfilePic").css("display", "block");
});

$("#profileButton").on("click", function(){
	$(".profileText").prop("disabled", true);
  $("#editProfilePic").css("display", "none");
})

//This section will populate profile data
var userID;

userID = localStorage.userID;


$( document ).ready(function() {
	getProfileData(userID);	
	getUserStories(userID);
});

function getProfileData(id){
	$.get("/api/user/id/" + id, function(data) {
      console.log(data);
      
      var userName = data.userName;
      var firstName = data.firstName;
      var lastName = data.lastName;
      var email = data.email;
      var bio = data.bio;
      var location = data.location;
      var storyCount = data.Stories.length;

      $("#firstName").val(firstName);
      $("#lastName").val(lastName);
      $("#userName").val(userName);
      $("#email").val(email);
      $("#bio").val(bio);
      $("#location").val(location);
      $("#storyCount").val(storyCount);

    });
}

function getUserStories(id){
	$.get("/api/user/id/" + id, function(data) {
      console.log(data);

      var storyCount = data.Stories.length;
      var selectorCount = 4;

      for(var i = 0; i < storyCount && i < selectorCount; i++){
      	var storyID = data.Stories[i].id;
      	var bookImage = data.Stories[i].image;

      	switch(i){
      		case 0:
				$("#userStory1").attr("src", bookImage);
				$("#userStory1").attr("id", storyID);      			
      			break;
  			case 1:
  				$("#userStory2").attr("src", bookImage);
  				$("#userStory2").attr("id", storyID); 
  				break;
  			case 2:
  				$("#userStory3").attr("src", bookImage);
  				$("#userStory3").attr("id", storyID); 
  				break;
  			case 3:
  				$("#userStory4").attr("src", bookImage);
  				$("#userStory4").attr("id", storyID); 
  				break;
  			default:
  				console.log("Something went wrong in the switch/case statements.")
      	}
      }
  	})
}

//This section will handle the edit profile picture button
