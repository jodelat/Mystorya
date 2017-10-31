//This section programs the animation for the turning of the pages
$("#flipbook").turn({
    width: 900,
    height: 500,
    autoCenter: true
});

var storyID = localStorage.storyID;
localStorage.clear();

$( document ).ready(function() {
	getStoryData(storyID);
});

function getStoryData(id){
	$.get("/api/story/id/" + id, function(data) {
      console.log(data);
      var coverImage = data[0].coverImage;
      var title = data[0].title;
      var firstName = data[0].User.firstName;
      var lastName = data[0].User.lastName;
      var author = firstName + " " + lastName;
      var body = data[0].body;
      var storyImage = data[0].storyImage;
      var video = data[0].video;

      $(".bookImage").attr("src", coverImage);
      $("#coverTitle").html(title);
      $("#coverAuthor").html("By " + author);
      $("#storyTitle").html(title);
      $("#author").html("By " + author);
      $("#storyBodyLeft").html(body);
      $("#storyImage").attr("src", storyImage);
      $("#videoPlayer").attr("src", video);
      
  	});

}





