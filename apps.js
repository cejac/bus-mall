var allImg = [];

function Images(imageName, imagePath) {
  this.imageName = imageName;
  this.imagePath = imagePath;
  this.clicks = 0;
  this.shown = 0;
  allImg.push(this);
}

Images.prototype.countShown = function() {
  return this.shown++;
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

//getting first image
  var displayOne = document.createElement('img');
  var getImage = randomImage();
  displayOne.src = allImg[getImage].imagePath;
  firstDiv.appendChild(displayOne);

//getting second image
  var displayTwo = document.createElement('img');
  var getImageTwo = randomImage();
  while (getImageTwo === getImage){
    getImageTwo = randomImage();
  };
  displayTwo.src = allImg[getImageTwo].imagePath;
  secondDiv.appendChild(displayTwo);

//getting third image
  var displayThree = document.createElement('img');
  var getImageThree = randomImage();
  while(getImageThree === getImage && getImageTwo){
    getImageThree = randomImage();
  };
  displayThree.src = allImg[getImageThree].imagePath;
  thirdDiv.appendChild(displayThree);
};

displayImages();