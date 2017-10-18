import { CARDFULLWIDTH, CARDINITWIDTH, CARDINITWIDTHMD } from './constants';
import * as moduleSticky from './module-sticky.js';
import * as breakpoint from './breakpoint.js';


export default function cardLoader(){

    //global vars
    let cardListingWrapper = document.querySelector('.CardListingWrapper'),
        cardListing = document.querySelector('.CardListing'),
        card = document.querySelectorAll('.Card'),
        cardLength = card.length,
        //cardListingInitWidth = `${cardLength * (breakpoint.isMobile() ? CARDINITWIDTH : CARDINITWIDTHMD)}%`,
        cardListingInitWidth = `${(breakpoint.isMobile() ? cardLength * CARDINITWIDTH : 100 )}%`,
        cardListingFullWidth = `${cardLength * CARDINITWIDTH}%`;

    //set the width the of the card container.
    cardListing.style.width = cardListingInitWidth;


    //new carousel
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        //spaceBetween: 50,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 30
            },
            // 640: {
            //     slidesPerView: 2,
            //     spaceBetween: 20
            // },
            320: {
                slidesPerView: 1.5,
                spaceBetween: 10
            }
        }
    });   



    $(window).on('resize.checkBreakpoint', function () {
        if(breakpoint.bpChange()){
            console.log('changed!!!');
            //cardListingInitWidth = `${cardLength * (breakpoint.isMobile() ? CARDINITWIDTH : CARDINITWIDTHMD)}%`;
            cardListingInitWidth = `${(breakpoint.isMobile() ? cardLength * CARDINITWIDTH : 100 )}%`,
            cardListing.style.width = cardListingInitWidth;
        }
    }).trigger('resize.checkBreakpoint');

    // if(breakpoint.isMobile()){
    //     console.log('mobile!');
    // } else{
    //     console.log('NOT mobile!');
    // }



    //sample data
    let dogs = [
        { name: 'Snickers', age: 2 },
        // { name: 'Hardy', age: 6 },
        // { name: 'Chloe', age: 8 }
    ];

    let html = `
        <div class="Card-detailContent">
            ${dogs.map(dog => `
            <p>
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
                ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old. ${dog.name} is ${dog.age * 7} dog years old.
            </p>

            <div class="CardCarousel">
                <div style="background-image:url(/img/carousel-1-home.png)"></div>
                <div style="background-image:url(/img/carousel-2-wff.png)"></div>
            </div>

            `).join('')}
        </ol>
    `;    


    $('.Card').off('click').on('click', function(e){
        //$(document).off('pan.hammerPan');
    });

    //Tapping begin!
    $('.Card').off("click.cardOpen").on("click.cardOpen", function(e){
        e.preventDefault();
        e.stopPropagation(); 

        let $el = $(this);

        //cardListing.style.width = cardListingFullWidth;
        
        let $currY = $(window).scrollTop(),
            $elX = $el.offset().left,
            $elY = $el.offset().top - $currY;


        $el.siblings().removeClass('is-selected');
        $el.addClass('is-selected');
        cardListingWrapper.classList.toggle('is-hiding');

        var $elClone = $el.clone().appendTo('body');
        //var $elClone = $el.appendTo('body');

        $elClone.prepend('<button class="Button Button--close">close me</button>');

        $elClone.css({
            top: $elY,
            left: $elX
        });

        $elClone.addClass('is-fixed');

        let data = html,
            cardDetailContainer = '<article id="Card-detail"></article>',
            cardDetail = document.getElementById('Card-detail');
        
        setTimeout(function(){
            $elClone.addClass('is-top');
            setTimeout(function(){
                $('html, body').scrollTop(0);
                $elClone.addClass('is-now-abs');
                cardDetail.classList.add('is-active');

                //ajax coming soon!
                cardDetail.insertAdjacentHTML('beforeend', data);                
                
                //Load in the carousel at the top.        
                //slider.init('.CardCarousel', '.CardCarousel > *');
            }, 100);
        }, 20);
        


        setTimeout(function(){
            moduleSticky.enable("body > .Card .Card--footer");  //find a better way to target this
        }, 500);



        //Button Close Click...    
        $('.Button--close').off('click.closeClone').on('click.closeClone', function(e){
            e.preventDefault();
            
            moduleSticky.disable("body > .Card .Card--footer");

            cardListing.style.width = cardListingInitWidth;

            cardDetail.classList.remove('is-active');
            

            //first giv it a position fixed, with the top position of exactly where it is in the viewport
            $('html, body').scrollTop($currY);

            $elClone.removeClass('is-now-abs');
            $elClone.removeClass('is-top');

            console.log('top:', $('.CardListingWrapper .Card.is-selected').offset().top);
            console.log('stop:', $(window).scrollTop());

            $elClone.css({
                top: $('.CardListingWrapper .Card.is-selected').offset().top - $(window).scrollTop()
                //,left: $('.Card.is-selected').offset().left
            });

            cardListingWrapper.classList.toggle('is-hiding');                  

            setTimeout(function(){            
                $elClone.remove();

                $el.removeClass('is-selected');
            
                //console.log('html cleared');
                cardDetail.innerHTML = '';
            
            }, 500);
        });


    });

}