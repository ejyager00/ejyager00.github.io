var nav_height=.024*window.innerHeight+30;
if (nav_height < 50) nav_height = 50;
document.getElementById('nav').style.height=nav_height.toString()+"px";
document.getElementsByTagName('HTML')[0].style.scrollPaddingTop = nav_height.toString()+"px";

var welcome_height=window.innerHeight-nav_height;
if (welcome_height>window.innerWidth) welcome_height=window.innerWidth;
document.getElementById("main-content").style.height = welcome_height.toString()+"px";
if (window.innerWidth>339) {
  var textmargintop = .5*(document.getElementById("image-content").offsetHeight-document.getElementById("text-content").offsetHeight-.02*window.innerWidth);
  document.getElementById("text-content").style.marginTop = textmargintop.toString()+"px";
}
window.addEventListener("resize", function() {
  if (window.innerWidth>339) {
    welcome_height=window.innerHeight-nav_height;
    if (welcome_height>window.innerWidth) welcome_height=window.innerWidth;
    document.getElementById("main-content").style.height = welcome_height.toString()+"px";
    var textmargintop = .5*(document.getElementById("image-content").offsetHeight-document.getElementById("text-content").offsetHeight-.02*window.innerWidth);
    document.getElementById("text-content").style.marginTop = textmargintop.toString()+"px";
  }
});

//Sticky nav
window.onscroll = function() {navScroll()};
var navbar = document.getElementById("nav");
function navScroll() {
  if (window.pageYOffset != 0) {
    navbar.classList.add("sticky");
    document.getElementById("main-content").style.marginTop = nav_height.toString()+"px";
  } else if (window.pageYOffset == 0) {
    navbar.classList.remove("sticky");
    document.getElementById("main-content").style.marginTop = "0px";
  }
}

//Typed text
function addBlink() {
  document.getElementById("typedtext").innerHTML = 'Welcome!<span class="blinking-cursor">|</span>';
}
var aText = new Array("Welcome!");
var iSpeed = 120; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
function typewriter()
{
  sContents =  ' ';
  var destination = document.getElementById("typedtext");
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + '|';
  if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    setTimeout("addBlink()", iSpeed);
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}
typewriter();

//mobile nav
function navAdjust() {
  var x = document.getElementById("nav");
  if (!x.classList.contains("responsive")) {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}
var nav_links = document.getElementsByClassName("nav-element");
for (var i = 0; i < nav_links.length; i++) {
  nav_links[i].onclick = function() {
    if (window.innerWidth<881) {
      navAdjust();
    }
  }
}
