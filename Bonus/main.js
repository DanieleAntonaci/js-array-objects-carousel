'use strict'
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Altra versione di creazione dell' array attraverso append 
let btnBefore = document.querySelector('.btn.top');
let btnAfter = document.querySelector('.btn.bottom');
let btnPlay = document.querySelector('.btn-auto.btn-play');
let btnStop = document.querySelector('.btn-auto.btn-stop');
let btnReverse = document.querySelector('.btn-auto.btn-reverse');
let arrayImg = [];
let sideArrayImg = [];
let activeItems = 0;
let slide = document.getElementById('slide');
let lateralImg = document.getElementById('lateral-img');
let img = document.getElementsByClassName('box-img');
let newImg;
let newDiv;
let lateralNewDiv;
let divText;
let h2Text;
let pText;
let changePicture;


// create div for image
images.forEach(element => {
    // create img
    newImg = document.createElement('img');
    newImg.src = element.image;

    // create div text
    divText = document.createElement('div');
    h2Text = document.createElement('h2');
    pText = document.createElement('p');

    h2Text.append(element.title);
    pText.append(element.text);

    divText.append(h2Text, pText);
    divText.classList.add('text-img');

    // create div
    newDiv = document.createElement('div');

    // add class
    newDiv.classList.add('box-img');

    // create DOM element
    newDiv.append(newImg, divText);
    slide.append(newDiv,);

    // array for btn
    arrayImg.push(newDiv);
});

// side image
images.forEach((element, index) => {

    newImg = document.createElement('img');
    newImg.src = element.image;
    lateralNewDiv = document.createElement('div');
    lateralNewDiv.classList.add('image-thumbnail');
    lateralNewDiv.append(newImg);
    lateralImg.append(lateralNewDiv);
    sideArrayImg.push(lateralNewDiv);

    // btn img
    lateralNewDiv.addEventListener('click', function () {
        arrayImg[activeItems].classList.remove('active');
        sideArrayImg[activeItems].classList.remove('select');

        activeItems = index;

        arrayImg[activeItems].classList.add('active');
        sideArrayImg[activeItems].classList.add('select');
    });
});



// class active to first element 
sideArrayImg[0].classList.add('select');
arrayImg[0].classList.add('active');


// button next
btnAfter.addEventListener('click', nextBtn);

// button before
btnBefore.addEventListener('click', beforeBtn);



//  PICTURE CHANGE TIMER
let activeBtn = true;


// auto-play
btnPlay.addEventListener('click', function () {
    if (activeBtn === true) {
        activeBtn = false;
        changePicture = setInterval(nextBtn, 3000);
    }
});

// button reverse auto-play
btnReverse.addEventListener('click', function () {
    if (activeBtn === true) {
        activeBtn = false;
        changePicture = setInterval(beforeBtn, 3000);
    }
});


// btn stop-auto-play
btnStop.addEventListener('click', function () {
    clearInterval(changePicture);
    activeBtn = true
});





// FUNCTION

function nextBtn() {

    if (activeItems === arrayImg.length - 1) {
        arrayImg[activeItems].classList.remove('active');
        sideArrayImg[activeItems].classList.remove('select');

        activeItems = 0;

        arrayImg[activeItems].classList.add('active');
        sideArrayImg[activeItems].classList.add('select');
    } else {

        arrayImg[activeItems].classList.remove('active');
        sideArrayImg[activeItems].classList.remove('select');

        activeItems++;

        arrayImg[activeItems].classList.add('active');
        sideArrayImg[activeItems].classList.add('select');
    }

};
function beforeBtn() {


    if (activeItems === 0) {
        arrayImg[activeItems].classList.remove('active');
        sideArrayImg[activeItems].classList.remove('select');

        activeItems = arrayImg.length - 1;

        arrayImg[activeItems].classList.add('active');
        sideArrayImg[activeItems].classList.add('select');
    } else {

        btnBefore.classList.remove('hidden')
        arrayImg[activeItems].classList.remove('active');
        sideArrayImg[activeItems].classList.remove('select');

        activeItems--;

        arrayImg[activeItems].classList.add('active');
        sideArrayImg[activeItems].classList.add('select');
    }

};