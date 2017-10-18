# portfolio

##CSS
###Pattern:
*Using [SuitCSS](https://suitcss.github.io/)
*Not [BEM](https://css-tricks.com/bem-101/) yet anyway.

###Handle Type Scaling:
```css
.Tile         { font-size: 1rem; }   //use rems for global
.Tile-title   { font-size: 0.8em; }  //use ems for local

//Modifiers...
.Tile--small  { font-size: 0.625rem; }
.Tile--large  { font-size: 1.3rem; }
```
```html
<div class="Tile">
    <p class="tile__title">Text</p>
</div>
```

##Fonts
[Overpass](https://fonts.google.com/specimen/Overpass?selection.family=Overpass:200,300,400,800)
200 | 300 | 400 | 800

##Local
192.168.0.25/cardSlider/source/

##JS
[TypeScript Gulp Build System](https://www.typescriptlang.org/docs/handbook/gulp.html)
[ES2015 Notes](https://babeljs.io/learn-es2015/)

##To Do:
* ~~Add carousel functionality~~
* Destroy hammer when going from mobile and up
* Make cards have href on them
* Replace mobile image with smaller dimensions. The performance on mobile is way better this way.

Card Details: 
* Scroll down -> fix hero image
* ~~Fix sticky menu so it fires right away on mobile~~
* Replace crappy setTimeouts with promises. 
* Fix background attachement fixed on mobile: http://jsfiddle.net/QN9cH/1/

Fixes:
* Change .Card's to anchor elements instead of divs.
* .Card's are off a few px when closing
