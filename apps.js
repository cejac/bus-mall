var allImg = [];

function Images(imageName, imagePath) {
  this.imageName;
  this.imagePath;
  this.clicks = 0;
  this.shown = 0;
  allImg.push(this);
}
