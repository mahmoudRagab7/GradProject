const selectImage = document.querySelector(".select-image");
const inputFile = document.querySelector("#file");
const imgArea = document.querySelector(".img-area");

const selectImage2 = document.querySelector(".select-image2");
const inputFile2 = document.querySelector("#file2");
const imgArea2 = document.querySelector(".img-area2");

selectImage.addEventListener("click", function () {
  if (imgArea2.lastElementChild.hasAttribute("src")) {
    // imgArea2.lastElementChild.remove();
    const allImg = imgArea2.querySelectorAll("img");
    allImg.forEach((item) => item.remove());
    imgArea2.classList.remove("active");
  }
  inputFile.click();
});

inputFile.addEventListener("change", function () {
  const image = this.files[0];
  if (image.size < 2000000) {
    const reader = new FileReader();
    reader.onload = () => {
      const allImg = imgArea.querySelectorAll("img");
      allImg.forEach((item) => item.remove());
      const imgUrl = reader.result;
      const img = document.createElement("img");
      img.src = imgUrl;
      imgArea.appendChild(img);
      imgArea.classList.add("active");
      imgArea.dataset.img = image.name;
    };
    reader.readAsDataURL(image);
  } else {
    alert("Image size more than 2MB");
  }
});
// const selectImage2 = document.querySelector(".select-image2");
// const inputFile2 = document.querySelector("#file2");
// const imgArea2 = document.querySelector(".img-area2");

selectImage2.addEventListener("click", function () {
  if (imgArea.lastElementChild.hasAttribute("src")) {
    // imgArea.lastElementChild.remove();
    const allImg = imgArea.querySelectorAll("img");
    allImg.forEach((item) => item.remove());
    imgArea.classList.remove("active");
  }
  inputFile2.click();
});

inputFile2.addEventListener("change", function () {
  const image = this.files[0];
  if (image.size < 2000000) {
    const reader = new FileReader();
    reader.onload = () => {
      const allImg = imgArea2.querySelectorAll("img");
      allImg.forEach((item) => item.remove());
      const imgUrl = reader.result;
      const img = document.createElement("img");
      img.src = imgUrl;
      imgArea2.appendChild(img);
      imgArea2.classList.add("active");
      imgArea2.dataset.img = image.name;
    };
    reader.readAsDataURL(image);
  } else {
    alert("Image size more than 2MB");
  }
});
////////////////////////////////////////////////
// start location MAYARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  if (x.innerHTML != "") {
    document.querySelector(".docs").style.display = "block";
  }
}
// end location MAYARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
////////////////////////////////////////////////////////////
// start show doctor box
let health = document.getElementById("health").innerText;
let showDoctorBox = document.getElementById("show-doctor-box");

showDoctorBox.addEventListener("click", function () {
  if (health === "Sick") {
    document.querySelector(".find-doctor").style.display = "block";
    document.querySelector(".find-doctor").className = "text-black-50";
  }
});
// start show doctor table
if (x.innerHTML != "") {
  // document.querySelector(".docs").style.display = "block";
  console.log(document.querySelector(".docs"));
}
// end show doctor table
// end show doctor box
// start doctor status
let doctorStatus = document.querySelectorAll(".open-status");
let doctorStatusOnline = document.querySelectorAll(".open");
let openClose = document.querySelectorAll(".open-close");
console.log(openClose);
for (let i = 0; i < doctorStatus.length; i++) {
  // console.log(doctorStatus[i].innerText);
  if (doctorStatus[i].innerText === "False") {
    doctorStatusOnline[i].style.backgroundColor = "red";
    openClose[i].style.color = "red";
  } else if (doctorStatus[i].innerText === "True") {
    doctorStatusOnline[i].style.backgroundColor = "green";
    openClose[i].style.color = "green";
  } else {
    doctorStatusOnline[i].style.backgroundColor = "gray";
    openClose[i].style.color = "gray";
  }
}

// start show doctor map
let btnLocationBtn = document.querySelectorAll(".btn-location-btn");
let map = document.querySelectorAll(".doc-map");
btnLocationBtn[0].addEventListener("click", function () {
  map[0].style.display = "block";
});
// end show doctor map

// end doctor status
// start rating
// let ratingSpans = document.querySelectorAll(".rating span");
// console.log(ratingSpans);
// end rating
