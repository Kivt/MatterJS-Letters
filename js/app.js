var a = true;
b = false;
delete b;

var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Common = Matter.Common,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
World = Matter.World,
Vertices = Matter.Vertices,
Svg = Matter.Svg,
Composites = Matter.Composites,
Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
world = engine.world;

// create renderer
var canvas = $("#canvas");
var width = canvas.outerWidth() - 10;
var height = canvas.outerHeight() - 10;


var initWidth = 1600;
var k = 1;
$(document).ready(function() {
    $(window).on("resize", function(){
        var width = $(window).outerWidth();
        var height = canvas.outerHeight();                      
        if (width != initWidth) {
            k = initWidth / width;
        }
    });

});

var render = Render.create({
    element: canvas[0],
    engine: engine,
    options: {
        width: width,
        height: height,
        wireframes: false
    }
});

Render.run(render);

// add bodies
world.bodies = [];

var middleWidth = width / 2;
var middleHeight = height / 2;

        var percentWidth = width / 100; // use this to find percentage of screen
        var persentHeight = height / 100;

        var normLetterWidth = 55; // size of desktop letters
        var normLetterHeight = 66; 

        var smallLetterWidth = 30; // size of mobile letters
        var smallLetterHeight = 45 ;

        var text = [
        {
            symbol: 'N', desktop: { x: middleWidth - 15*percentWidth, y: middleHeight - 39*persentHeight , wid: normLetterWidth / k, hei: normLetterHeight / k }, 
            mobile: {x: middleWidth  - 35*percentWidth, y: middleHeight - 44*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k} 
        }, {
            symbol: 'O',  desktop: { x: middleWidth - 10*percentWidth, y: middleHeight - 41*persentHeight , wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 25*percentWidth, y: middleHeight - 45*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'I', desktop: { x: middleWidth - 3*percentWidth, y: middleHeight - 41*persentHeight, wid: 25 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 7*percentWidth, y: middleHeight - 45*persentHeight, wid: 8 / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'D',  desktop: { x: middleWidth - 0.5*percentWidth, y: middleHeight - 40*persentHeight , wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth   - 2*percentWidth, y: middleHeight - 45*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'E', desktop: { x: middleWidth + 4*percentWidth, y: middleHeight - 41*persentHeight , wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  + 8*percentWidth, y: middleHeight - 45*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'A', desktop: { x: middleWidth + 8.5*percentWidth, y: middleHeight - 40*persentHeight , wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  + 18*percentWidth, y: middleHeight - 45*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'S', desktop: { x: middleWidth + 13*percentWidth, y: middleHeight - 40*persentHeight , wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  + 28*percentWidth, y: middleHeight - 45*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'S', desktop: { x: middleWidth - 40*percentWidth, y: middleHeight - 25*persentHeight , wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 35*percentWidth, y: middleHeight - 37*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'T', desktop: { x: middleWidth - 36*percentWidth, y: middleHeight - 25.5*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 25*percentWidth, y: middleHeight - 37*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'U', desktop: { x: middleWidth - 31*percentWidth, y: middleHeight - 26*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 15*percentWidth, y: middleHeight - 38*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'D', desktop: { x: middleWidth - 26.5*percentWidth, y: middleHeight - 25*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 5*percentWidth, y: middleHeight - 37*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'I', desktop: { x: middleWidth - 23*percentWidth, y: middleHeight - 25*persentHeight, wid: 25 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth   + 5*percentWidth, y: middleHeight - 37*persentHeight, wid: 5 / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'O', desktop: { x: middleWidth - 20*percentWidth, y: middleHeight - 25*persentHeight, wid: normLetterWidth + 5 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  + 9*percentWidth, y: middleHeight - 37*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'W', desktop: { x: middleWidth - 12*percentWidth, y: middleHeight - 25*persentHeight, wid: 65 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 32*percentWidth, y: middleHeight - 29*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'A', desktop: { x: middleWidth - 7*percentWidth, y: middleHeight - 25*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 19*percentWidth, y: middleHeight - 29*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'R', desktop: { x: middleWidth - 3*percentWidth, y: middleHeight - 25*persentHeight, wid: 55 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 9*percentWidth, y: middleHeight - 29*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'M', desktop: { x: middleWidth  + 2*percentWidth, y: middleHeight - 25*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  + 1*percentWidth, y: middleHeight - 29*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'I', desktop: { x: middleWidth + 6*percentWidth, y: middleHeight - 25*persentHeight, wid: 25 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  + 11*percentWidth, y: middleHeight - 29*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'N', desktop: { x: middleWidth + 9*percentWidth, y: middleHeight - 25*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  + 21*percentWidth, y: middleHeight - 29*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'G', desktop: { x: middleWidth + 13*percentWidth, y: middleHeight - 25*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  + 31*percentWidth, y: middleHeight - 29*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'P', desktop: { x: middleWidth + 20*percentWidth, y: middleHeight - 25*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 35*percentWidth, y: middleHeight - 21*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'A', desktop: { x: middleWidth + 24*percentWidth, y: middleHeight - 25*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 25*percentWidth, y: middleHeight - 21*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'R', desktop: { x: middleWidth + 29*percentWidth, y: middleHeight - 25*persentHeight, wid: 55 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 14*percentWidth, y: middleHeight - 21*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'T', desktop: { x: middleWidth + 33*percentWidth, y: middleHeight - 25*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 4*percentWidth, y: middleHeight - 21*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'Y', desktop: { x: middleWidth + 38*percentWidth, y: middleHeight - 25*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 7*percentWidth, y: middleHeight - 21*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'N', desktop: { x: middleWidth - 33*percentWidth, y: middleHeight - 9*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 43*percentWidth, y: middleHeight  - 12*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'O', desktop: { x: middleWidth - 28*percentWidth, y: middleHeight - 9*persentHeight, wid: normLetterWidth + 5 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 33*percentWidth, y: middleHeight - 12*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'V', desktop: { x: middleWidth - 23*percentWidth, y: middleHeight - 9*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 23*percentWidth, y: middleHeight - 12*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'E', desktop: { x: middleWidth - 18*percentWidth, y: middleHeight - 9*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 13*percentWidth, y: middleHeight - 12*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'M', desktop: { x: middleWidth - 13*percentWidth, y: middleHeight - 9*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth  - 3*percentWidth, y: middleHeight - 12*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'B', desktop: { x: middleWidth - 8*percentWidth, y: middleHeight - 9*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 7*percentWidth, y: middleHeight - 12*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'E', desktop: { x: middleWidth - 3*percentWidth, y: middleHeight - 9*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 17    *percentWidth, y: middleHeight - 12*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'R', desktop: { x: middleWidth + 1*percentWidth, y: middleHeight - 9*persentHeight, wid: 55 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 27*percentWidth, y: middleHeight - 12*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: "1", desktop: { x: middleWidth + 8*percentWidth, y: middleHeight - 9*persentHeight, wid: 25 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 38*percentWidth, y: middleHeight - 12*persentHeight, wid: 8 / k, hei: smallLetterHeight / k}
        }, {
            symbol: '7', desktop: { x: middleWidth + 10*percentWidth, y: middleHeight - 9*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 42*percentWidth, y: middleHeight - 12*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'palka', desktop: { x: middleWidth + 15*percentWidth, y: middleHeight - 6*persentHeight, wid: 60 / k, hei: 13 / k },
            mobile: {} // we dont use this in mobile version
        }, {
            symbol: '6', desktop: { x: middleWidth + 22*percentWidth, y: middleHeight - 9*persentHeight, wid: 35 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 35*percentWidth, y: middleHeight - 4*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'dot', desktop: { x: middleWidth + 25*percentWidth, y: middleHeight - 7*persentHeight, wid: 20 / k, hei: 20 / k },
            mobile: {x: middleWidth - 26*percentWidth, y: middleHeight - 3*persentHeight, wid: 7 / k, hei: 7 / k}
        }, {
            symbol: 'dot', desktop: { x: middleWidth + 25*percentWidth, y: middleHeight - 3*persentHeight, wid: 20 / k, hei: 20 / k },
            mobile: {x: middleWidth - 26*percentWidth, y: middleHeight - 1*persentHeight, wid: 7 / k, hei: 7 / k}
        }, {
            symbol: 'zero', desktop: { x: middleWidth + 27*percentWidth, y: middleHeight - 9*persentHeight, wid: 45 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 23*percentWidth, y: middleHeight - 4*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'zero', desktop: { x: middleWidth + 30.5*percentWidth, y: middleHeight - 9*persentHeight, wid: 45 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 15*percentWidth, y: middleHeight - 4*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: '5', desktop: { x: middleWidth - 37*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 38*percentWidth, y: middleHeight + 4*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: '2', desktop: { x: middleWidth - 33*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 28*percentWidth, y: middleHeight + 4*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: '5', desktop: { x: middleWidth - 29*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 18*percentWidth, y: middleHeight + 4*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'C', desktop: { x: middleWidth - 22*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 8*percentWidth, y: middleHeight + 4*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'O', desktop: { x: middleWidth - 17*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth + 5 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 2*percentWidth, y: middleHeight + 4*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'U', desktop: { x: middleWidth - 12*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 12*percentWidth, y: middleHeight + 4*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'R', desktop: { x: middleWidth - 7*percentWidth, y: middleHeight + 6*persentHeight, wid: 55 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 22*percentWidth, y: middleHeight + 4*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'T', desktop: { x: middleWidth - 3*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 32*percentWidth, y: middleHeight + 4*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'S', desktop: { x: middleWidth + 5*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 38*percentWidth, y: middleHeight + 14*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'T', desktop: { x: middleWidth + 9.5*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 28*percentWidth, y: middleHeight + 14*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'R', desktop: { x: middleWidth + 14*percentWidth, y: middleHeight + 6*persentHeight, wid: 55 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 18*percentWidth, y: middleHeight + 14*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'E', desktop: { x: middleWidth + 18*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 8*percentWidth, y: middleHeight + 14*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'E', desktop: { x: middleWidth + 22*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 0*percentWidth, y: middleHeight + 14*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'T', desktop: { x: middleWidth + 26*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 10*percentWidth, y: middleHeight + 14*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'coma', desktop: { x: middleWidth + 29*percentWidth, y: middleHeight + 13*persentHeight, wid: 20 / k, hei: 30 / k },
            mobile: {x: middleWidth + 19*percentWidth, y: middleHeight + 18*persentHeight, wid: 5 / k, hei: 10 / k}
        }, {
            symbol: 'C', desktop: { x: middleWidth + 33*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 24*percentWidth, y: middleHeight + 14*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: '2', desktop: { x: middleWidth + 37*percentWidth, y: middleHeight + 6*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 34*percentWidth, y: middleHeight + 14*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'upper_coma', desktop: { x: middleWidth - 38*percentWidth, y: middleHeight + 25*persentHeight, wid: 20 / k, hei: 30 / k },
            mobile: {x: middleWidth - 34*percentWidth, y: middleHeight + 24*persentHeight, wid: 5 / k, hei: 10 / k}
        }, {
            symbol: 'upper_coma', desktop: { x: middleWidth - 36.5*percentWidth, y: middleHeight + 25*persentHeight, wid: 20 / k, hei: 30 / k },
            mobile: {x: middleWidth - 36*percentWidth, y: middleHeight + 24*persentHeight, wid: 5 / k, hei: 10 / k}
        }, {
            symbol: 'W', desktop: { x: middleWidth - 32*percentWidth, y: middleHeight + 27*persentHeight, wid: 60 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 28*percentWidth, y: middleHeight + 25*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'E', desktop: { x: middleWidth - 25*percentWidth, y: middleHeight + 27*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 17*percentWidth, y: middleHeight + 25*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'H', desktop: { x: middleWidth - 14*percentWidth, y: middleHeight + 27*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 5*percentWidth, y: middleHeight + 25*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'A', desktop: { x: middleWidth - 9*percentWidth, y: middleHeight + 27*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 5*percentWidth, y: middleHeight + 25*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'V', desktop: { x: middleWidth - 4*percentWidth, y: middleHeight + 27*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 13*percentWidth, y: middleHeight + 25*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'E', desktop: { x: middleWidth + 2*percentWidth, y: middleHeight + 27*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 22*percentWidth, y: middleHeight + 25*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'B', desktop: { x: middleWidth + 12*percentWidth, y: middleHeight + 27*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 26*percentWidth, y: middleHeight + 37*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'E', desktop: { x: middleWidth + 17*percentWidth, y: middleHeight + 27*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 14*percentWidth, y: middleHeight + 37*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'E', desktop: { x: middleWidth + 22*percentWidth, y: middleHeight + 27*persentHeight, wid: normLetterWidth / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth - 2*percentWidth, y: middleHeight + 37*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'R', desktop: { x: middleWidth + 27*percentWidth, y: middleHeight + 27*persentHeight, wid: 55 / k, hei: normLetterHeight / k },
            mobile: {x: middleWidth + 10*percentWidth, y: middleHeight + 37*persentHeight, wid: smallLetterWidth / k, hei: smallLetterHeight / k}
        }, {
            symbol: 'coma', desktop: { x: middleWidth + 33*percentWidth, y: middleHeight + 26*persentHeight, wid: 20 / k, hei: 30 / k },
            mobile: {x: middleWidth + 24*percentWidth, y: middleHeight + 36*persentHeight, wid: 5 / k, hei: 10 / k}
        }, {
            symbol: 'coma', desktop: { x: middleWidth + 34.5*percentWidth, y: middleHeight + 26*persentHeight, wid: 20 / k, hei: 30 / k },
            mobile: {x: middleWidth + 26*percentWidth, y: middleHeight + 36*persentHeight, wid: 5 / k, hei: 10 / k}
        }

        ];

        var i = 0;
        var stack = Composites.stack(0, 0, text.length, 1, 0, 0, function(x, y) {
            var obj = text[i++];

            if (width > 768) {
               return Bodies.rectangle(obj.desktop.x, obj.desktop.y, obj.desktop.wid, obj.desktop.hei, {
                render: {
                    sprite: {
                        texture: "./img/" + obj.symbol + ".png",
                        xScale: 0.65 / k , // size of pictures itself
                        yScale: 0.65 / k 
                    },
                    friction: 0.9
                }
            });
           } else {
            return Bodies.rectangle(obj.mobile.x, obj.mobile.y, obj.mobile.wid, obj.mobile.hei, {
                render: {
                    sprite: {
                        texture: "./img/" + obj.symbol + ".png",
                        xScale: 0.65 / (k * 1.8) , // size of pictures itself
                        yScale: 0.65 / (k * 1.8) 
                    },
                    friction: 0.9
                }
            });
        }



    });

        World.add(world, stack);
        world.gravity.y = 0;

        var x = Math.round(width / 2);
        var y = Math.round(height / 2);

        World.add(world, [
            Bodies.rectangle(x, 0, width, 2, { isStatic: true }),
            Bodies.rectangle(x, height, width, 2, { isStatic: true }),
            Bodies.rectangle(0, y, 2, height, { isStatic: true }),
            Bodies.rectangle(width, y, 2, height, { isStatic: true })
            ]);

// add mouse control
var mouse = Mouse.create(render.canvas),
mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// fit the render viewport to the scene
Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
});

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

$(window).scroll(function() {
    world.gravity.y = 1;
});


