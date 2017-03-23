$(document).ready(function() {
  var count = 0;
  var images = ["images/floral_6.jpg","images/floral_2.jpg","images/floral_3.jpg"];
  var image = $(".image_cover_bg");

  image.css("background-image","url("+images[count]+")");

  setInterval(function(){
    image.fadeOut(700, function(){
      image.css("background-image","url("+images[count++]+")");
      image.fadeIn(700);
    });
    if(count == images.length)
    {
      count = 0;
    }

  },7000);
});
