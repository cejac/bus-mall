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

function clickHandler(event){
  console.log(event.target.id);
  totalClicks++;
  for(i = 0; i < allImg.length; i++){
    if(allImg[i].imageName === event.target.id){
      allImg[i].clicks++;
    }
  }
  if(totalClicks < 15){
    displayImages();
  }
  else if(totalClicks === 15){
    clickSet();
  }
}

function newTriesHandler(){
  totalClicks = 0;
  document.getElementById('showGraph').style.visibility = 'hidden';
  document.getElementById('myChart').style.visibility = 'hidden';
  displayImages();
}

function clickSet(){
  document.getElementById('showGraph').style.visibility = 'visible';
  var imgDivs = document.getElementsByClassName('imgDiv');
  imgDivs[0].style.display = 'none';
  imgDivs[1].style.display = 'none';
  imgDivs[2].style.display = 'none';
}

//canvas chart
function renderChart(){
  var names = [];
  var timesClicked = [];
  for (i = 0; i < allImg.length; i++){
    names.push(allImg[i].imageName);
    timesClicked.push(allImg[i].clicks);
  }

  var data = {
    labels: names,
    datasets: [
      {label: 'Times Chosen',
      backgroundColor:'#34ACAF',
      strokeColor:'#34ACAF',
      data: timesClicked,
    }],
  };

  var ctx = document.getElementById('dispChart');
  var dispChart = new Chart(ctx, {
    type:'bar',
    data: data,
  });
}

//new images after each click
var el = document.getElementById('imgOne');
el.addEventListener('click', clickHandler);
var elTwo = document.getElementById('imgTwo');
elTwo.addEventListener('click', clickHandler);
var elThree = document.getElementById('imgThree');
elThree.addEventListener('click', clickHandler);


var elChart = document.getElementById('showGraph');
elChart.addEventListener('click', renderChart);

displayImages();
