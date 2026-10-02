function upDate(previewPic) {
  console.log("upDate function triggered");
  console.log("Alt:", previewPic.alt);
  console.log("Source:", previewPic.src);

  document.getElementById("image").innerHTML = previewPic.alt;

  document.getElementById("image").style.backgroundImage =
    "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("unDo function triggered");

  document.getElementById("image").style.backgroundImage = "url('')";

  document.getElementById("image").innerHTML =
    "Hover over or focus on an image below to display here.";
}

function addTabIndex() {
  console.log("addTabIndex function triggered");

  var images = document.querySelectorAll(".preview");

  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}
