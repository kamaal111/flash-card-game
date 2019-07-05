const landmark = [
  {
    img: './Landmarks/EiffelTower.jpg',
    location: 'Paris, France'
  },
  {
    img: './Landmarks/BigBen.jpg',
    location: 'London, Great Britain'
  },
  {
    img: './Landmarks/greatWall.jpg',
    location: 'Beijing, China'
  },
  {
    img: './Landmarks/TajMahal.jpeg',
    location: 'Agra, India'
  },
  {
    img: './Landmarks/pyramids.jpg',
    location: 'Giza, Egpyt'
  }
];

let randVal;
const cardDiv = document.getElementById('landmarkCard');

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

  const newImage = document.createElement('img');
  newImage.src = landmark[randVal].img;
  newImage.id = randVal;
  cardDiv.appendChild(newImage);
  console.log('added');
}

function showAnswer() {
  const image = document.getElementById(randVal);
  image.parentNode.removeChild(image);
  console.log('removed');

  const answer = landmark[randVal].location;
  const answerText = document.createElement('h3');
  answerText.innerHTML = answer;
  answerText.classList = 'answerText';

  cardDiv.appendChild(answerText);
}

showImage();
