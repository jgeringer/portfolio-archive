// export function sayHello(name: string) {
//     return `Hello from ${name}`;
// }


console.log('inside my query');


// if (el.classList) {
//         el.classList.toggle('is-active');
//     } else {
//         var classes = el.className.split(' ');
//         var existingIndex = classes.indexOf('is-active');
//         if (existingIndex >= 0) {
//             classes.splice(existingIndex, 1);
//         }
//         else {
//             classes.push('is-active');
//         }
//         el.className = classes.join(' ');
//     }




// // 1. Basic object for our stuff
// interface Window {
//     slider: any;
//     sensitivity: any;
//     activeSlide: any;
//     Hammer: any;
// }




// window.slider = {};

// // 2. Settings
// window.slider.sliderPanelSelector = '.Card';
// window.slider.sliderPaginationSelector = '.slider-pagination';
// window.sensitivity = 25 // horizontal % needed to trigger swipe

// // 2. Placeholder to remember which slide we’re on
// window.activeSlide = 0;

// // 3. Slide counter
// window.slider.slideCount = 0;

// // 4. Initialization + event listener
// window.slider.init = function( selector: string ) {
  
//   // 4a. Find the container
//   window.slider.sliderEl = document.querySelector( selector );
  
//   // 4b. Count stuff
//   window.slider.slideCount = window.slider.sliderEl.querySelectorAll( window.slider.sliderPanelSelector ).length;
  
//   // 4c. Populate pagination
//   var n = 0;
//   for( n; n < window.slider.slideCount; n++ ) {
//     var activeStatus = n == window.slider.activeSlide ? ' class="is-active"' : '';
//     window.slider.sliderEl.parentElement.querySelector( window.slider.sliderPaginationSelector ).innerHTML += '<div ' + activeStatus + '></div>';
//   }
  
//   // 4d. Set up HammerJS
//   var sliderManager = new window.Hammer.Manager( window.slider.sliderEl );
//   sliderManager.add( new window.Hammer.Pan({ threshold: 0, pointers: 0 }) );
//   sliderManager.on( 'pan', function( e: any ) {
    
//     // 4e. Calculate pixel movements into 1:1 screen percents so gestures track with motion
//     var percentage = 100 / window.slider.slideCount * e.deltaX / window.innerWidth;
    
//     // 4f. Multiply percent by # of slide we’re on
//     var percentageCalculated = percentage - 100 / window.slider.slideCount * window.slider.activeSlide;
    
//     // 4g. Apply transformation
//     window.slider.sliderEl.style.transform = 'translateX( ' + percentageCalculated + '% )';
    
//     // 4h. Snap to slide when done
//     if( e.isFinal ) {
//       if( e.velocityX > 1 ) {
//         window.slider.goTo( window.slider.activeSlide - 1 );
//       } else if( e.velocityX < -1 ) {
//         window.slider.goTo( window.slider.activeSlide + 1 )
//       } else {
//         if( percentage <= -( window.slider.sensitivity / window.slider.slideCount ) )
//           window.slider.goTo( window.slider.activeSlide + 1 );
//         else if( percentage >= ( window.slider.sensitivity / window.slider.slideCount ) )
//           window.slider.goTo( window.slider.activeSlide - 1 );
//         else
//           window.slider.goTo( window.slider.activeSlide );
//       }
//     }
//   });
// };

// // 5. Update current slide
// window.slider.goTo = function( number: number ) {
  
//   // 5a. Stop it from doing weird things like moving to slides that don’t exist
//   if( number < 0 )
//     window.slider.activeSlide = 0;
//   else if( number > window.slider.slideCount - 1 )
//     window.slider.activeSlide = window.slider.slideCount - 1
//   else
//     window.slider.activeSlide = number;
    
//  // 5b. Apply transformation & smoothly animate via .is-animating CSS
//  window.slider.sliderEl.classList.add( 'is-animating' );
//  var percentage = -( 100 / window.slider.slideCount ) * window.slider.activeSlide;
//  window.slider.sliderEl.style.transform = 'translateX( ' + percentage + '% )';
//  clearTimeout( window.slider.timer );
//  window.slider.timer = setTimeout( function() {
//    window.slider.sliderEl.classList.remove( 'is-animating' );
//  }, 400 );
  
//  // 5c. Update the counters
//  var pagination = window.slider.sliderEl.parentElement.querySelectorAll( window.slider.sliderPaginationSelector + ' > *' );
//  var n = 0;
//  for( n; n < pagination.length; n++ ) {
//    var className = n == window.slider.activeSlide ? 'is-active' : '';
//    pagination[n].className = className;
//  }
// };