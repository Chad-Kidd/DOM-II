// Your code goes here
const container = document.querySelector('.container');

container.addEventListener('mouseover', event => {
  event.target.style.backgroundColor = '#F5EE28';

});

const button = document.querySelector('.btn');

button.addEventListener('click', event => {
  button.innerHTML = `Click count: ${event.detail}`;
  event.target.style.backgroundColor = 'pink';
  //used .target to change to blue
});

const mainNav = document.querySelector('.main-navigation');

mainNav.addEventListener('wheel', function(event){
  event.target.style.color = "red";
  TweenMax.to(".main-navigation", 1, {x: 100, ease: Bounce.easeOut});
  event.stopPropagation();
});

const anchorItems = document.querySelectorAll('p');

const anchText = document.querySelectorAll("p");
for (let i = 0; i < anchText.length; i++) {
  TweenMax.to("p", 1, {x: 100, ease: Bounce.easeOut});
}