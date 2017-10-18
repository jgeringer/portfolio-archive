export function enable(el){
    
    let stickyEl = document.querySelector(el),
        heroHeight = $(el).offset().top  - $(window).scrollTop();
        
    $(window).on('scroll.moduleSticky', function(e){
        //if it hits the top of the viewport, then add .is-sticky class to the element.

        console.log($(window).scrollTop() + " | " + heroHeight);
        let scrolledY = $(window).scrollTop();

        if(scrollY > heroHeight){
            stickyEl.classList.add('is-sticky');
        } else {
            stickyEl.classList.remove('is-sticky');
            //document.querySelector('body > .Card').style.backgroundPositionY = scrollY + "px"; //('background-position', 'left ' + ((scrolledY)) + 'px');
        }


    });

}

export function disable(el){
    console.log('disabled sticky and turn off scroll event');

    document.querySelector(el).classList.remove('is-sticky');
    $(window).off('scroll.moduleSticky');
}