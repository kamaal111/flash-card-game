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

// function from MDN to get a random value from 0 to max-1
function getRandomInt(max) {
  const number = Math.floor(Math.random() * max);
  // console.log(number);
  return number;
}

// this function will show a random image to the user
function showImage() {
  //get a random number
  const randVal = getRandomInt(landmark.length);

  //show landmark[randVal].img
  const imageId = document.getElementById("landmarkCard");
  const newImage = document.createElement("img");
  newImage.src = landmark[randVal].img;
  imageId.appendChild(newImage);
}

showImage();
