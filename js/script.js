function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }
    if (email === "") {
      alert("Please enter your email.");
      return false;
    }
    return true;
  }

  var slideshowIndex = 0;
  var slideshowImages = ["images/contactimg.jpg", "images/contact2.jpg", "images/contact3.jpg"];

  function showNextImage() {
    var slideshow = document.getElementById("slideshow");
    slideshow.src = slideshowImages[slideshowIndex];
    slideshowIndex = (slideshowIndex + 1) % slideshowImages.length;
  }

  setInterval(showNextImage, 2000);