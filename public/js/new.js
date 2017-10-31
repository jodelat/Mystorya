var userID = localStorage.userID;

//This section will make the update story button function
$("#newStory").on("click", function(){  
    console.log("onclick successful");
    updateStoryData();
   
});

function updateStoryData(){
    
    var userId = userID;
    var title = $("#newTitle").val();
    var body = $("#newBody").val();
/*    var coverImage = $("#coverImage").val()
    var image = $("#image").val()
    var video = $("#video").val().trim();*/
    
    var storyData = {
      UserId: userId,
      title: title,
      body: body,
      viewCount: 0,

    };
  console.log(storyData);

$.post("/api/storyID", storyData)
  .then(function(){
  	console.log(storyData);
  	console.log("post successful");
  	localStorage.setItem("storyID", 1);
  	window.location = "/read";
  });
  
}