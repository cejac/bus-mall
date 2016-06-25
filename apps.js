var allImg = [];

function Images(imageName, imagePath) {
  this.imageName;
  this.imagePath;
  this.clicks = 0;
  this.shown = 0;
  allImg.push(this);
}

Images.prototype.countClicks = function() {
  return this.clicked++;
};

function randomImage(){
  return Math.floor(Math.random() * allImg.length);
};

var firstDiv = getElementById('imgOne');
var secondDiv = getElementById('imgTwo');
var thirdDiv = getElementById('imgThree');
