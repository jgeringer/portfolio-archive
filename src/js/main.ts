/// <reference path="vendor/jquery.d.ts" />

//import { sayHello } from "./myquery";

// console.log(sayHello("TypeScript!"));

// function showHello(divName: string, name: string){
//     const elt = document.getElementById(divName);
//     elt.innerText = sayHello(name);
// }

//showHello("greeting", "TypeScript LAND!");


console.log("hello from main");


let card = $('.Card'),
    cardListingWrapper = document.querySelector('.CardListingWrapper'),
    cardDetail =  document.getElementById('Card-detail'); 

let dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'Hardy', age: 6 },
  { name: 'Chloe', age: 8 } 
];

let html = `
  <ol>
    ${dogs.map(dog => `
      <li>
        ${dog.name} is ${dog.age * 7} dog years old.
      </li>
    `).join('')}
  </ol>
`;



card.on('click', function(){
    console.log('clicked card!!');
    
    let $el = $(this);

    $(cardListingWrapper).toggleClass('is-active');
    $el.toggleClass('is-active');

    //if is-active, then inject it's html to the page...
    if($el.is('.is-active')){
        let data = html;
        cardDetail.insertAdjacentHTML('beforeend', data);
    } else {
        setTimeout(function(){
            //console.log('html cleared');
            cardDetail.innerHTML = '';
        }, 500);
    }
    
});