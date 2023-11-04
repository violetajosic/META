//Button sound
var numberOfAudios = document.querySelectorAll("button").length;
var audiosButtons = document.querySelectorAll("button");
var audio = new Audio("img/myAudio.mp3");

for (var i = 0; i < numberOfAudios; i++) {
  audiosButtons[i].addEventListener("mouseover", function () {
    audio.play();
  });
}

for (var i = 0; i < numberOfAudios; i++) {
  audiosButtons[i].addEventListener("mouseout", function () {
    audio.pause();
    audio.currentTime = 0;
  });
}

//Menu dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//Sound on location box
var numberOfLocations = document.querySelectorAll(
  ".location-items-image"
).length;
var audioLocation = document.querySelectorAll(".location-items-image");
var audio = new Audio("img/myAudio.mp3");

for (var i = 0; i < numberOfLocations; i++) {
  audioLocation[i].addEventListener("mouseover", function () {
    audio.play();
  });
}

for (var i = 0; i < numberOfLocations; i++) {
  audioLocation[i].addEventListener("mouseout", function () {
    audio.pause();
    audio.currentTime = 0;
  });
}

//LogIn
function logInBtn() {
  var username = document.querySelector(".username").value;
  var password = document.querySelector(".password").value;

  if (
    !username.includes("@") ||
    !username.includes("gmail.com") ||
    !username.includes("yahoo.com")
  ) {
    alert("E-mail has to include @ and gmail.com or yahoo.com.");
  } else if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password)
  ) {
    alert(
      "Password has to have at least 8 characters with at least 1 uppercased letter and 1 number."
    );
  } else {
    var logInButton = document.querySelector(".logInButton");
    if (logInButton) {
      window.location.href = "profile.html";
    }
  }
}
//SignUp
function signUpBtn() {
  var firstName = document.querySelector(".firstName").value;
  var lastName = document.querySelector(".lastName").value;
  var password = document.querySelector(".password").value;

  if (/[^A-Za-z]/.test(firstName) || /[^A-Za-z]/.test(lastName)) {
    alert("First and last names should only contain letters.");
  } else if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password)
  ) {
    alert(
      "Password has to have at least 8 characters with at least 1 uppercased letter and 1 number."
    );
  } else {
    var logInButton = document.querySelector(".logInButton");
    if (logInButton) {
      window.location.href = "profile.html";
    }
  }
}
//Profile status

function post() {
  var robot = document.querySelector(".robot");
  var headingInput = document.querySelector("#profileHeading");
  var statusInput = document.querySelector(".profileStatus");
  var currentBlock = document.querySelector(".currentBlock");
  var newBlock = document.querySelector(".profile-hero-comment.newBlock");
  var newHeading = newBlock.querySelector("h1");
  var newStatus = newBlock.querySelector("p");
  var newBWrapper = document.querySelector(".profile-hero-wrapper");
  var newBtn = document.querySelector(".profileBtn");

  var headingValue = headingInput.value;
  var statusValue = statusInput.value;

  newHeading.textContent = headingValue;
  newStatus.textContent = statusValue;

  currentBlock.style.display = "none";
  newBlock.style.display = "flex";
  newBWrapper.style.justifyContent = "flex-start";
  newBtn.style.display = "none";
  newHeading.style.textTransform = "uppercase";
  newHeading.style.color = "hotpink";

  robot.classList.remove("currentRobot");
  robot.classList.add("newRobot");
}

//Game

function findFriend() {
  var allCharacteristics = document.querySelectorAll(".characteristic");
  var persons = document.querySelectorAll(".friendImage");
  var names = [
    "anna",
    "emma",
    "alex",
    "petter",
    "teo",
    "marc",
    "nicol",
    "sophia",
    "jackson",
    "olivia",
  ];
  var heading = document.querySelector(".heroGame-heading h1");
  var secondHeading = document.querySelector(".heroGame-text h1");

  persons.forEach((person) => {
    person.style.display = "none";
  });

  var selectedCharacteristics = [];
  allCharacteristics.forEach((characteristic) => {
    if (characteristic.checked) {
      selectedCharacteristics.push(
        characteristic.getAttribute("class").split(" ")[1]
      );
    }
  });

  if (
    selectedCharacteristics.length === allCharacteristics.length ||
    (selectedCharacteristics.includes("extroverted") &&
      selectedCharacteristics.includes("introverted"))
  ) {
    heading.textContent =
      "How can one person be introverted and extroverted at the same time?";
    secondHeading.textContent = "Try again.";
  } else if (selectedCharacteristics.length > 0) {
    var randomPerson = names[Math.floor(Math.random() * names.length)];
    var personImage = document.querySelector("." + randomPerson);

    personImage.style.display = "block";
    heading.textContent =
      "Meet your new friend: " +
      randomPerson.charAt(0).toUpperCase() +
      randomPerson.slice(1);
    secondHeading.textContent =
      "You have chosen those characteristics: " +
      selectedCharacteristics.join(", ");
  } else {
    var defaultPerson = persons[0];
    defaultPerson.style.display = "flex";
    heading.textContent = "Everyone has some characteristics.";
    secondHeading.textContent = "Try again :";
  }
}
