var allImg = [];
totalClicks = 0;

function Images(imageName, imagePath, clicks, shown) {
  this.imageName = imageName;
  this.imagePath = imagePath;
  this.clicks = clicks;
  this.shown = shown;
  allImg.push(this);
}

Images.prototype.countShown = function() {
  return shown++;
};

function randomImage(){
  return Math.floor(Math.random() * allImg.length);
};

function runImages(){
var bag = new Images('bag', 'img/bag.jpg', 0, 0);
var banana = new Images('banana_slicer', 'img/banana.jpg', 0, 0);
var bathroom = new Images('bathroom_ipad', 'img/bathroom.jpg', 0, 0);
var boots = new Images('boots', 'img/boots.jpg', 0, 0);
var breakfast = new Images('breakfast', 'img/breakfast.jpg', 0, 0);
var bubblegum = new Images('meatball_bubblegum', 'img/bubblegum.jpg', 0, 0);
var chair = new Images('chair', 'img/chair.jpg', 0, 0);
var cthulhu = new Images('cthulhu', 'img/cthulhu.jpg', 0, 0);
var dogDuck = new Images('dog_duck', 'img/dogDuck.jpg', 0, 0);
var dragon = new Images('dragon_meat', 'img/dragon.jpg', 0, 0);
var pen = new Images('pen_utensils', 'img/pen.jpg', 0, 0);
var petSweep = new Images('pet_sweep', 'img/petSweep.jpg', 0, 0);
var scissors = new Images('pizza_scissors', 'img/scissors.jpg', 0, 0);
var shark = new Images('shark', 'img/shark.jpg', 0, 0);
var sweep = new Images('baby_sweeper', 'img/sweep.png', 0, 0);
var tauntaun = new Images('tauntaun', 'img/tauntaun.jpg', 0, 0);
var unicorn = new Images('unicorn_meat', 'img/unicorn.jpg', 0, 0);
var usb = new Images('usb', 'img/usb.jpg', 0, 0);
var waterCan = new Images('water_can', 'img/waterCan.jpg', 0, 0);
var wineGlass = new Images('wine_glass', 'img/wineGlass.jpg', 0, 0);
};

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
    var strImg = JSON.stringify(allImg);
    localStorage.setItem('storedImages', strImg);
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
      backgroundColor:'#D6978E',
      strokeColor:'#AE5D63',
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

(function getLocalStorage(){
  console.log("iffe called")
  if(localStorage.storedImages){
    console.log("stored items")
    var strImg = localStorage.getItem('storedImages');
    var storedImages = JSON.parse(strImg);
    for (var pics of storedImages) {
      console.log(pics);
      var newPics = new Images(pics.imageName, pics.imagePath, pics.clicks, pics.shown);
    }
  } else {
    runImages();
    console.log("nothing stored")
  }
})();

displayImages();
