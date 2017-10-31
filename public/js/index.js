/*MODAL ON-CLICK FUNCTIONS*/
$("#signupModalButton").on("click", function(){
  $("#signupModal").css("display", "block");
})

$("#closeSignupModal").on("click", function(){
  $("#signupModal").css("display", "none");
})

$("#cancelSignupButton").on("click", function(){
  $("#signupModal").css("display", "none");
})

$("#loginModalButton").on("click", function(){
  $("#loginModal").css("display", "block");
})

$("#closeLoginModal").on("click", function(){
  $("#loginModal").css("display", "none");
})

$("#cancelLoginButton").on("click", function(){
  $("#loginModal").css("display", "none");
})

/*SIGN UP BUTTON POST REQUEST*/
$(".signupbtn").on("click", function(){
  postUserData();
});

function postUserData(){
  event.preventDefault();

  var userName = $("#userNameInput").val().trim();
  var firstName = $("#firstNameInput").val().trim();
  var lastName = $("#lastNameInput").val().trim();
  var email = $("#emailInput").val().trim();
  var password = $("#passwordInput").val().trim();

  if (!userName || !firstName || !lastName || !email || !password){
    console.log("Form is not fully filled out");
    return;
  };

  var userData = {
    userName : userName,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
  
  $.post("/api/user", userData)
    .then(function(){
      console.log("User data added");
      console.log(userData);
      localStorage.setItem("userName", userData.userName);
      window.location = "./profile";
    }
  )  
}

/*LOGIN BUTTON GET REQUEST*/
$("#submitLoginButton").on("click", function(){
  checkUserData();
});

function checkUserData(){
  event.preventDefault();

  var userName = $("#userNameLogin").val().trim();
  var password = $("#passwordLogin").val().trim();
  console.log(userName);

  $.get("/api/user/username/" + userName, function(data) {
    console.log(data);

    if(data.password == password){
      console.log("Login successfull");
      localStorage.setItem("userID", data.id);
      window.location = "/profile";
    }
    else{
      console.log("Incorrect password");
    }
  });
}

/*POPULATE NEW BOOK SHELF*/
var newOne = {
  id: 7,
  coverImage: "./img/newstory1.png",
  title: "The Messi Story",
  author: "By New Stories",
};
var newTwo = {
  id: 8,
  coverImage: "./img/newstory2.png",
  title: "A Surfer's Life",
  author: "By New Stories",
};
var newThree = {
  id: 9,
  coverImage: "./img/newstory3.jpg",
  title: "A New World",
  author: "By New Stories",
};
var newFour = {
  id: 10,
  coverImage: "./img/newstory4.jpg",
  title: "Prime Time",
  author: "By New Stories",
};

var newArray = [newOne, newTwo, newThree, newFour];


var newStoryIndex = 0;
var newStoryCount = newArray.length;
var selectorCount = 4;
var newCount = 0;

populateNew();

function populateNew(){

  if(newStoryIndex >= newStoryCount){
    newStoryIndex = 0;
  }

  if(newStoryIndex < 0){
    newStoryIndex = newStoryCount - 1;
  }

  for(var i = newStoryIndex; i < newStoryCount && newCount < selectorCount; i++){
    var storyID = newArray[i].id;
    var bookImage = newArray[i].coverImage;
    var storyTitle = newArray[i].title;
    var author = newArray[i].author;
    newCount++;

    switch(newCount){
      case 1:
        $("#newImage1").attr("src", bookImage);
        $("#newImage1").attr("storyID", storyID);
        $("#newTitle1").html(storyTitle);
        $("#newAuthor1").html(author);           
        break;
      case 2:
        $("#newImage2").attr("src", bookImage);
        $("#newImage2").attr("storyID", storyID);
        $("#newTitle2").html(storyTitle);
        $("#newAuthor2").html(author); 
        break;
      case 3:
        $("#newImage3").attr("src", bookImage);
        $("#newImage3").attr("storyID", storyID);
        $("#newTitle3").html(storyTitle);
        $("#newAuthor3").html(author); 
        break;
      case 4:
        $("#newImage4").attr("src", bookImage);
        $("#newImage4").attr("storyID", storyID);
        $("#newTitle4").html(storyTitle);
        $("#newAuthor4").html(author); 
        break;
      default:
        console.log("Something went wrong in the switch/case statements.")
      }
  }

  var remainingSelectors = selectorCount - newCount;

  if(newCount == 4){
    return;
  }

  for(var j = 0; j < remainingSelectors; j++){
    var storyID = newArray[j].id;
    var bookImage = newArray[j].coverImage;
    var storyTitle = newArray[j].title;
    var author = newArray[j].author;
    newCount++;
    
    switch(newCount){
      case 1:
        $("#newImage1").attr("src", bookImage);
        $("#newImage1").attr("storyID", storyID);
        $("#newTitle1").html(storyTitle);
        $("#newAuthor1").html(author);           
        break;
      case 2:
        $("#newImage2").attr("src", bookImage);
        $("#newImage2").attr("storyID", storyID);
        $("#newTitle2").html(storyTitle);
        $("#newAuthor2").html(author); 
        break;
      case 3:
        $("#newImage3").attr("src", bookImage);
        $("#newImage3").attr("storyID", storyID);
        $("#newTitle3").html(storyTitle);
        $("#newAuthor3").html(author); 
        break;
      case 4:
        $("#newImage4").attr("src", bookImage);
        $("#newImage4").attr("storyID", storyID);
        $("#newTitle4").html(storyTitle);
        $("#newAuthor4").html(author); 
        break;
      default:
        console.log("Something went wrong in the switch/case statements.")
      }
  }
}

/*LEFT & RIGHT SCROLL BUTTONS*/
$("#newRightScroll").on("click", function(){
  newStoryIndex++;
  newCount = 0;
  populateNew();
})

$("#newLeftScroll").on("click", function(){
  newStoryIndex--;
  newCount = 0;
  populateNew();
})

/*POPULATE POPULAR BOOK SHELF*/
var popOne = {
  id: 11,
  coverImage: "./img/popstory1.jpg",
  title: "A Trip to Remember",
  author: "By Popular Stories",
};
var popTwo = {
  id: 12,
  coverImage: "./img/popstory2.jpg",
  title: "Mysterious Rock",
  author: "By Popular Stories",
};
var popThree = {
  id: 13,
  coverImage: "./img/popstory3.jpg",
  title: "Brothers",
  author: "By Popular Stories",
};
var popFour = {
  id: 14,
  coverImage: "./img/popstory4.jpg",
  title: "The Best Ever",
  author: "By Popular Stories",
};

var popArray = [popOne, popTwo, popThree, popFour];


var popStoryIndex = 0;
var popStoryCount = popArray.length;
var selectorCount = 4;
var popCount = 0;

populatePop();

function populatePop(){

  if(popStoryIndex >= popStoryCount){
    popStoryIndex = 0;
  }

  if(popStoryIndex < 0){
    popStoryIndex = popStoryCount - 1;
  }

  for(var i = popStoryIndex; i < popStoryCount && popCount < selectorCount; i++){
    var storyID = popArray[i].id;
    var bookImage = popArray[i].coverImage;
    var storyTitle = popArray[i].title;
    var author = popArray[i].author;
    popCount++;

    switch(popCount){
      case 1:
        $("#popularImage1").attr("src", bookImage);
        $("#popularImage1").attr("storyID", storyID);
        $("#popularTitle1").html(storyTitle);
        $("#popularAuthor1").html(author);           
        break;
      case 2:
        $("#popularImage2").attr("src", bookImage);
        $("#popularImage2").attr("storyID", storyID);
        $("#popularTitle2").html(storyTitle);
        $("#popularAuthor2").html(author); 
        break;
      case 3:
        $("#popularImage3").attr("src", bookImage);
        $("#popularImage3").attr("storyID", storyID);
        $("#popularTitle3").html(storyTitle);
        $("#popularAuthor3").html(author); 
        break;
      case 4:
        $("#popularImage4").attr("src", bookImage);
        $("#popularImage4").attr("storyID", storyID);
        $("#popularTitle4").html(storyTitle);
        $("#popularAuthor4").html(author); 
        break;
      default:
        console.log("Something went wrong in the switch/case statements.")
      }
  }

  var remainingSelectors = selectorCount - popCount;

  if(popCount == 4){
    return;
  }

  for(var j = 0; j < remainingSelectors; j++){
    var storyID = popArray[j].id;
    var bookImage = popArray[j].coverImage;
    var storyTitle = popArray[j].title;
    var author = popArray[j].author;
    popCount++;
    
    switch(popCount){
      case 1:
        $("#popularImage1").attr("src", bookImage);
        $("#popularImage1").attr("storyID", storyID);
        $("#popularTitle1").html(storyTitle);
        $("#popularAuthor1").html(author);           
        break;
      case 2:
        $("#popularImage2").attr("src", bookImage);
        $("#popularImage2").attr("storyID", storyID);
        $("#popularTitle2").html(storyTitle);
        $("#popularAuthor2").html(author); 
        break;
      case 3:
        $("#popularImage3").attr("src", bookImage);
        $("#popularImage3").attr("storyID", storyID);
        $("#popularTitle3").html(storyTitle);
        $("#popularAuthor3").html(author); 
        break;
      case 4:
        $("#popularImage4").attr("src", bookImage);
        $("#popularImage4").attr("storyID", storyID);
        $("#popularTitle4").html(storyTitle);
        $("#popularAuthor4").html(author); 
        break;
      default:
        console.log("Something went wrong in the switch/case statements.")
      }
  }
}

/*LEFT & RIGHT SCROLL BUTTONS*/
$("#popRightScroll").on("click", function(){
  popStoryIndex++;
  popCount = 0;
  populatePop();
})

$("#popLeftScroll").on("click", function(){
  popStoryIndex--;
  popCount = 0;
  populatePop();
})

/*POPULATE CELEB BOOK SHELF*/
var celebOne = {
  id: 15,
  coverImage: "./img/celebstory1.jpg",
  title: "My Story",
  author: "By Celeb Stories",
};
var celebTwo = {
  id: 16,
  coverImage: "./img/celebstory2.jpg",
  title: "H.O.V.A.",
  author: "By Celeb Stories",
};
var celebThree = {
  id: 17,
  coverImage: "./img/celebstory3.jpg",
  title: "A Champion",
  author: "By Celeb Stories",
};
var celebFour = {
  id: 18,
  coverImage: "./img/celebstory4.jpg",
  title: "The Adobe Way",
  author: "By Celeb Stories",
};

var celebArray = [celebOne, celebTwo, celebThree, celebFour];


var celebStoryIndex = 0;
var celebStoryCount = celebArray.length;
var selectorCount = 4;
var celebCount = 0;

populateCeleb();

function populateCeleb(){

  if(celebStoryIndex >= celebStoryCount){
    celebStoryIndex = 0;
  }

  if(celebStoryIndex < 0){
    celebStoryIndex = celebStoryCount - 1;
  }

  for(var i = celebStoryIndex; i < celebStoryCount && celebCount < selectorCount; i++){
    var storyID = celebArray[i].id;
    var bookImage = celebArray[i].coverImage;
    var storyTitle = celebArray[i].title;
    var author = celebArray[i].author;
    celebCount++;

    switch(celebCount){
      case 1:
        $("#celebImage1").attr("src", bookImage);
        $("#celebImage1").attr("storyID", storyID);
        $("#celebTitle1").html(storyTitle);
        $("#celebAuthor1").html(author);           
        break;
      case 2:
        $("#celebImage2").attr("src", bookImage);
        $("#celebImage2").attr("storyID", storyID);
        $("#celebTitle2").html(storyTitle);
        $("#celebAuthor2").html(author); 
        break;
      case 3:
        $("#celebImage3").attr("src", bookImage);
        $("#celebImage3").attr("storyID", storyID);
        $("#celebTitle3").html(storyTitle);
        $("#celebAuthor3").html(author); 
        break;
      case 4:
        $("#celebImage4").attr("src", bookImage);
        $("#celebImage4").attr("storyID", storyID);
        $("#celebTitle4").html(storyTitle);
        $("#celebAuthor4").html(author); 
        break;
      default:
        console.log("Something went wrong in the switch/case statements.")
      }
  }

  var remainingSelectors = selectorCount - celebCount;

  if(celebCount == 4){
    return;
  }

  for(var j = 0; j < remainingSelectors; j++){
    var storyID = celebArray[j].id;
    var bookImage = celebArray[j].coverImage;
    var storyTitle = celebArray[j].title;
    var author = celebArray[j].author;
    celebCount++;
    
    switch(celebCount){
      case 1:
        $("#celebImage1").attr("src", bookImage);
        $("#celebImage1").attr("storyID", storyID);
        $("#celebTitle1").html(storyTitle);
        $("#celebAuthor1").html(author);           
        break;
      case 2:
        $("#celebImage2").attr("src", bookImage);
        $("#celebImage2").attr("storyID", storyID);
        $("#celebTitle2").html(storyTitle);
        $("#celebAuthor2").html(author); 
        break;
      case 3:
        $("#celebImage3").attr("src", bookImage);
        $("#celebImage3").attr("storyID", storyID);
        $("#celebTitle3").html(storyTitle);
        $("#celebAuthor3").html(author); 
        break;
      case 4:
        $("#celebImage4").attr("src", bookImage);
        $("#celebImage4").attr("storyID", storyID);
        $("#celebTitle4").html(storyTitle);
        $("#celebAuthor4").html(author); 
        break;
      default:
        console.log("Something went wrong in the switch/case statements.")
      }
    }
  }

/*LEFT & RIGHT SCROLL FOR CELEB*/
$("#celebRightScroll").on("click", function(){
  celebStoryIndex++;
  celebCount = 0;
  populateCeleb();
})

$("#celebLeftScroll").on("click", function(){
  celebStoryIndex--;
  celebCount = 0;
  populateCeleb();
})

/*SELECT STORY FUNCTION*/
$(".overlay").on("click", function(){
  console.log("click worked");

  var imageDiv = $(this).prev();
  console.log(imageDiv);

  var storyID = imageDiv.attr("storyID");
  console.log(storyID);

  localStorage.setItem("storyID", storyID);

})