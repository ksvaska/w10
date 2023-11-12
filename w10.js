"use strict";

function showMessage(){
    console.log ('Я учу JavaScript!')
}
showMessage();

const img = document.querySelector(".image");
console.log(img);
const newPicture = () =>{
    img.src = "assets/image/2.jpg";
};

const beforePicture = () =>{
    img.src = "assets/image/1.jpg";
};