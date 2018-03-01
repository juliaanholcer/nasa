let dataUrl = "https://api.nasa.gov/planetary/apod?api_key=YtqbWfXAN3QeR4vSQYFD0NIWoyV43nEEHNR5YllL";
let urlMars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YtqbWfXAN3QeR4vSQYFD0NIWoyV43nEEHNR5YllL";
let gallery = document.getElementById('content');
function changeBackground(imageURL) {
  document.body.style.backgroundImage = `url('${imageURL}')`;
}
function getPicture() {
    fetch(dataUrl)
    .then((resp) => resp.json())
    .then((data) => {
      changeBackground(data.hdurl);
    });
}
function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let pictureList = data.photos;
            createGallery(pictureList);
        });
}
function createGallery(dataList) {
  for (let i = 0; i < 9; i++) {
    let randomIndex = Math.floor(Math.random() * dataList.length);
    let img = document.createElement('img');
    let imgPath = dataList[randomIndex].img_src;
    img.src = imgPath;
    gallery.appendChild(img);

  }
}
getMarsPicture();
