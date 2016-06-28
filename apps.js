var allImg = [];
totalClicks = 0;

function Images(imageName, imagePath) {
  this.imageName = imageName;
  this.imagePath = imagePath;
  this.clicks = 0;
  this.shown = 0;
  allImg.push(this);
}

Images.prototype.countShown = function() {
  return shown++;
};

function randomImage(){
  return Math.floor(Math.random() * allImg.length);
};

var bag = new Images('bag', 'img/bag.jpg');
var banana = new Images('banana_slicer', 'img/banana.jpg');
var bathroom = new Images('bathroom_ipad', 'img/bathroom.jpg');
var boots = new Images('boots', 'img/boots.jpg');
var breakfast = new Images('breakfast', 'img/breakfast.jpg');
var bubblegum = new Images('meatball_bubblegum', 'img/bubblegum.jpg');
var chair = new Images('chair', 'img/chair.jpg');
var cthulhu = new Images('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Images('dog_duck', 'img/dogDuck.jpg');
var dragon = new Images('dragon_meat', 'img/dragon.jpg');
var pen = new Images('pen_utensils', 'img/pen.jpg');
var petSweep = new Images('pet_sweep', 'img/petSweep.jpg');
var scissors = new Images('pizza_scissors', 'img/scissors.jpg');
var shark = new Images('shark', 'img/shark.jpg');
var sweep = new Images('baby_sweeper', 'img/sweep.png');
var tauntaun = new Images('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Images('unicorn_meat', 'img/unicorn.jpg');
var usb = new Images('usb', 'img/usb.jpg');
var waterCan = new Images('water_can', 'img/waterCan.jpg');
var wineGlass = new Images('wine_glass', 'img/wineGlass.jpg');

function displayImages(){

  var firstDiv = document.getElementById('imgOne');
  var secondDiv = document.getElementById('imgTwo');
  var thirdDiv = document.getElementById('imgThree');

  firstDiv.innerHTML = '';
  secondDiv.innerHTML = '';
  thirdDiv.innerHTML = '';

//getting first image
  var displayOne = document.createElement('img');
  var getImage = randomImage();
  displayOne.src = allImg[getImage].imagePath;
  displayOne.id = allImg[getImage].imageName;
  allImg[getImage].shown++;
  firstDiv.appendChild(displayOne);

//getting second image
  var displayTwo = document.createElement('img');
  var getImageTwo = randomImage();
  while (getImageTwo === getImage){
    getImageTwo = randomImage();
  };
  displayTwo.src = allImg[getImageTwo].imagePath;
  displayTwo.id = allImg[getImageTwo].imageName;
  allImg[getImageTwo].shown++;
  secondDiv.appendChild(displayTwo);

//getting third image
  var displayThree = document.createElement('img');
  var getImageThree = randomImage();
  while(getImageThree === getImage || getImageThree === getImageTwo){
    getImageThree = randomImage();
  };
  displayThree.src = allImg[getImageThree].imagePath;
  displayThree.id = allImg[getImageThree].imageName;
  allImg[getImageThree].shown++;
  thirdDiv.appendChild(displayThree);
};
displayImages();

//event handler for generating new Images
function changeImage(){
  this.clicks++;
  totalClicks++;
  checkButton();
  displayImages();
}

imgOne.addEventListener('click', function(){
  changeImage();
});

imgTwo.addEventListener('click', function() {
  changeImage();
});

imgThree.addEventListener('click', function(){
  changeImage();
});

var hidden;
function checkButton() {
  if (totalClicks < 15) {
    resultButton.removeAttribute(hidden);
  } else {
    resultButton.style.display = 'block';
  }
}
