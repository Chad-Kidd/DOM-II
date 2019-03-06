// Your code goes here
const container = document.querySelector('.container');

container.addEventListener('mouseover', event => {
  event.target.style.backgroundColor = 'deepskyblue';

});

//BUTTON CLICK COUNTER AND COLOR CHANGE
const button = document.querySelector('.btn');

button.addEventListener('click', event => {
  button.innerHTML = `Click count: ${event.detail}`;
  event.target.style.backgroundColor = 'pink';
  //used .target to change to pink
});

const mainNav = document.querySelector('.main-navigation');

mainNav.addEventListener('wheel', function(event){
  event.target.style.color = "white";
//   TweenMax.to(".main-navigation", 1, {x: 66, ease: Bounce.easeOut});
  event.stopPropagation();
});

const pItems = document.querySelectorAll('p');

const pText = document.querySelectorAll("p");
for (let i = 0; i < pText.length; i++) {
  TweenMax.to("p", 10.5, { ease: Circ.easeOut, y: -3000 });
//   event.target.style.display = "none";
};

//IMAGE CHANGE SCROLL AND CLICK EVENTS 
const imgOne = document.querySelector('.imgOne');

imgOne.addEventListener('mouseover', function(event){
  event.target.src = "https://media1.giphy.com/media/ZLgp4L68XUnE4/giphy.gif";
//   event.target.src.width = "500"; TRIED TO CHANGE WIDTH

   TweenMax.to(".imgOne", 1, {x: 100, ease: Bounce.easeOut});
  event.stopPropagation();
});

const imgTwo = document.querySelector('.imgTwo');

imgTwo.addEventListener('click', function(event){
  event.target.src = "https://cdn.shopify.com/s/files/1/0893/0520/products/1_90a68479-5cb7-4a35-a31f-a397b117c5a3_large.jpeg?v=1434482341";
//   TweenMax.to(".main-navigation", 1, {x: 66, ease: Bounce.easeOut});
});

const imgThree = document.querySelector('.img-fluid.rounded');
console.log(imgThree);
imgThree.addEventListener('click', function(event){
  event.target.src = "https://66.media.tumblr.com/6a5305966c84714028019c7c7f3519af/tumblr_p4ikit5YgB1wwow3bo1_400.gif";
//   TweenMax.to(".main-navigation", 1, {x: 66, ease: Bounce.easeOut});
  event.stopPropagation();
});

const imgFour = document.querySelector('.imgFour');

imgFour.addEventListener('click', function(event){
  event.target.src = "https://data.whicdn.com/images/204657906/original.gif";
  TweenMax.to(".imgFour", 1, {x:85, ease:Elastic.easeOut});
  event.stopPropagation();
});


//NAV LINK ALERT
const h2Items = document.querySelectorAll('nav-link');

[].forEach.call(document.getElementsByClassName("nav-link"), function(event) {
    event.addEventListener("click", function() {
      alert ("THIS PAGE HAS BEEN TAKEN OVER. DO NOT BE ALARMED");//to get the id attribute of the clicked element..    
    //   this.getElementsByClassName("nav-link")[0].innerHTML = "Hello World";
      event.stopPropagation();
    });
  })



  document.body.addEventListener('mouseover', function(e){
    var self = this,
        old_bg = this.style.background;

    this.style.background = this.style.background=='crimson'? 'blue':'black';
    setTimeout(function(){
        self.style.background = old_bg;
    }, 1000);
})