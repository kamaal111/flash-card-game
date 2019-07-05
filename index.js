const landmark = [
  {
    img: "./Landmarks/EiffelTower.jpg",
    location: "Paris, France"
  },
  {
    img: "./Landmarks/BigBen.jpg",
    location: "London, Great Britain"
  },
  {
    img: "./Landmarks/greatWall.jpg",
    location: "Beijing, China"
  },
  {
    img: "./Landmarks/TajMahal.jpeg",
    location: "Agra, India"
  },
  {
    img: "./Landmarks/pyramids.jpg",
    location: "Giza, Egpyt"
  }
];

let randVal;
const cardDiv = document.getElementById("landmarkCard");

// function from MDN to get a random value from 0 to max-1
function getRandomInt(max) {
  const number = Math.floor(Math.random() * max);
  // console.log(number);
  return number;
}

// this function will show a random image to the user
function showImage() {
  //get a random number
  randVal = getRandomInt(landmark.length);

  //show landmark[randVal].img
  const newImage = document.createElement("img");
  newImage.src = landmark[randVal].img;
  newImage.id = randVal;
  cardDiv.appendChild(newImage);
  console.log("added");
}

//show answer when user clicks on the image
function showAnswer() {
  removeImage();
  const answer = landmark[randVal].location;
  const answerText = document.createElement("h3");
  answerText.innerText = answer;
  answerText.id = "answerText";

  cardDiv.appendChild(answerText);
}

function removeImage() {
  //remove the image
  const image = document.getElementById(randVal);
  if (image) {
    image.parentNode.removeChild(image);
    console.log("removed");
  }
}

//show next flash card/landmark
function showNextCard() {
  const childNode = document.getElementById("answerText");
  if (childNode) {
    cardDiv.removeChild(childNode);
    showImage();
  } else {
    removeImage();
    showImage();
  }
}

showImage();
