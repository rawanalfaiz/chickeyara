//=========================global variables==================================
var x = Math.floor(Math.random()* 1000);//choosing a horizental point randomlly 
var y = Math.floor(Math.random()* 350); //choosing a virtical point randomlly-- its been set to be 350 so it always choose a point in the middle
var chickenImg = new Image();   
var imagesource = "../imgs/chicken1.png";
var eggImage = new Image();
eggImage.src = "../imgs/egg1.png";
var eggs = [];
//=========================global variables==================================
//================================work in grogress=====================================================
// function createGameBoard() {
//     // declare variable "can" which will contain DOM element which has id with value "canvas1"
//     this.can = document.getElementById('canvas1');

//     // declare variable context (aka ctx) which will use previously defined canvas (.getContext('2d') always stays the same)
//     this.ctx = this.can.getContext('2d');

//     // fillStyle sets the color (we choose green)
//     this.ctx.fillStyle="green";
//     // fillRect fills rectangle
//     //                x,y,width, height                
//     //                | |  |   ____| 
//     //                | |  |   |
//     this.ctx.fillRect(0,0,500,600);
//     this.ctx.fillStyle="gray";
//     this.ctx.fillRect(50,0,400, 600);
//     this.ctx.fillStyle="white";
//     this.ctx.fillRect(60, 0, 10, 600)
//     this.ctx.fillRect(430, 0, 10, 600);
//     // next 6 lines regulate middle line
//     this.ctx.lineWidth = 10;
//     //           height of the line;   distance between the end of the line stroke and the beginning of the next one
//     //                    |   _____________________________________|
//     //                    |   |
//     this.ctx.setLineDash([40,80]);
//     this.ctx.strokeStyle = "white";
//     // start position
//     this.ctx.moveTo(245,0);
//     // end position
//     this.ctx.lineTo(245,600);
//     // executes the drawing
//     this.ctx.stroke();
//     // next three lines regulate score
//     this.ctx.fillStyle="pink";
//     this.ctx.font = "50px Helvetica";
//     this.ctx.fillText("Score: " + board.score, 0, 50);
//   }

//=====================================================================================



function appear(){// better if named Chicken
    chickenImg.src = imagesource;
    ctx.drawImage(chickenImg,x,y, 100, 100);
    runAround(x,y);        
}

function drawEgg(x,y){
    ctx.drawImage(eggImage,x, y, 50, 50);
  }


function limits(x,y, id){
    if(x <= 0 || y <= 0 || x >= 1300 || y >= 490){ // x and y are the max width and height of the canvas
        // alert("your Chicken is running away!");
        clearInterval(id);
        // appear();// everytime a chicken hit the borders another chicken will pop up 
        return false;
    }else {return true;}
}
//============================================================================

// // Then we need to create a function that checks if the position of the car is not the same as the obstacle´s one.
// function crash = function(obstacle) {
// return !(((car.y) > obstacle.bottom()) ||
//             ((car.x + 40) < obstacle.left()) ||
//             ((car.x + 40) > obstacle.right()))
// }

// var rect1 = {x: 5, y: 5, width: 50, height: 50}
// var rect2 = {x: 20, y: 10, width: 10, height: 10}

// if (rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&
//    rect1.y < rect2.y + rect2.height &&
//    rect1.height + rect1.y > rect2.y) {
//     // collision detected!
// }


// var elements = []; 
// Element.register = function (element) { 
//     for (var i=0; i<elements.length; i++) { 
//         if (elements[i]==element) break; 
// }
//============================================================================
function runAround(x,y)
{
    // ctx.clearRect(x, y, 100, 100);
    var intervalId;
    var rndmIntrvl = Math.ceil(Math.random()* 2000);// should pick a numberof secondes randomlly between 0 and 2000
    var direction = Math.ceil(Math.random()* 4);


    switch(direction){
        case 1:  //go rigth               
            chickenImg.src = "../imgs/chicken4.png";
            intervalId = setInterval(function(){
                if (limits(x+20, y, intervalId)){
                    ctx.clearRect(x,y, 1300, 490);
                    eggs.forEach(function(oneEgg){
                        drawEgg(oneEgg.xvalue,oneEgg.yvalue);
                    });
                ctx.drawImage(chickenImg, x+20, y, 100, 100);
                x+=20;
                }
            },100)
        
        break;


        case 2:// go down
            chickenImg.src = "../imgs/chicken3.png";
            intervalId =setInterval(function(){
                if (limits(x, y+20, intervalId)){
                    ctx.clearRect(x,y, 1300, 490);
                    eggs.forEach(function(oneEgg){
                        drawEgg(oneEgg.xvalue,oneEgg.yvalue);
                    });
                ctx.drawImage(chickenImg, x, y+20, 100, 100);
                y+=20;
                }
            },100)

        break;

        case 3:// go left
            chickenImg.src = "../imgs/chicken1.png";
            intervalId =setInterval(function(){
                if (limits(x-20, y, intervalId)){
                    ctx.clearRect(x,y, 1300, 490);
                    eggs.forEach(function(oneEgg){
                        drawEgg(oneEgg.xvalue,oneEgg.yvalue);
                    });
                ctx.drawImage(chickenImg, x-20, y, 100, 100);
                x-=20;
                }
            },100) 

        break;


        case 4: // go up
            chickenImg.src = "../imgs/chicken2.png";
            intervalId =setInterval(function(){
                if (limits(x, y-20, intervalId)){
                    ctx.clearRect(x,y, 1300, 490);
                    eggs.forEach(function(oneEgg){
                        drawEgg(oneEgg.xvalue,oneEgg.yvalue);
                    });
                ctx.drawImage(chickenImg, x, y-20, 100, 100);
                y-=20;
                }
            },100)

        break;
    } // end switch


    can.onclick = function (e) {
        //new part== check if the there is another egg
        // var newEgg = { };
        // newEgg.x = x;
        // newEgg.y = y;

        // ends here
        var crash = false;
        if(e.clientX >= x && e.clientX <= x+100 && e.clientY >= y && e.clientY <= y+100 ){ //https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element/18053642#18053642
           var newEgg = {
            xvalue: x,/// saving the coordinates for each egg
            yvalue: y,

        };


        eggs.forEach(function(eachEgg){
            eggs.push(newEgg);
            if( Math.abs(newEgg.xvalue - eachEgg.xvalue) <=40 &&  Math.abs(newEgg.yvalue - eachEgg.yvalue)<=40){
                // console.log(eachEgg);
                // console.log(newEgg);

                eggs.pop(newEgg);
                crash = true;
                // alert("OH NO!!!!!!");

            }

        });
          if(crash === true) {
            eggCount--;
            alert("crash");
            console.log(eggCount);
            setTimeout(function() {
              crash = false;
            }, 1);
          } else {
            eggCount++;
            // console.log("chicken")
            // console.log(eggs);
            eggs.push(newEgg);
            console.log(eggCount);

          }
        }
    };
    


    setTimeout(function(){
         clearInterval(intervalId);
         runAround(x,y);
    }, rndmIntrvl )
}

   










//======================I didn't need constructor function for the chicken==========================
// var Chicken = function(){// the moving object
//     this.x;
//     this.y;
//     this.width = 100;
//     this.height = 100;
// }

// Chicken.prototype.drawChicken = function(imagesource){
//     var current= this; // this becomes cuurent because it belongs to Chicken function's scope:
//     chickenImg.onload = function(){
//         ctx.drawImage(chickenImg, current.x, current.y, current.width, current.height);
//     };
//     chickenImg.src = imagesource;
// }
//====================================================================================================

//==================================exellent random movement function===================================================
// $(document).ready(function(){
//         console.log("hi");
//         draw();        
//     });

// $(document).ready(function(){
//     console.log("hi");
//     animateDiv();
    
// });

// function makeNewPosition(){
    
//     // Get viewport dimensions (remove the dimension of the div)
//     var h = $(window).height() - 50;
//     var w = $(window).width() - 50;
    
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
    
//     return [nh,nw];    
    
// }

// function animateDiv(){
//     var newq = makeNewPosition();
//     var oldq = $('.a').offset();
//     var speed = calcSpeed([oldq.top, oldq.left], newq);
    
//     $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
//       animateDiv();        
//     });
    
// };

// function calcSpeed(prev, next) {
    
//     var x = Math.abs(prev[1] - next[1]);
//     var y = Math.abs(prev[0] - next[0]);
    
//     var greatest = x > y ? x : y;
    
//     var speedModifier = 0.1;

//     var speed = Math.ceil(greatest/speedModifier);
//     // var speed = Math.floor(Math.random()*10);
//     // var velocity = speed + 5;
//     return speed;

// }


// $(document).ready(function()
// {
//     animateDiv('.a');

// });

// function makeNewPosition(){
    
//     // Get viewport dimensions (remove the dimension of the div)
//     var h = $(window).height() - 50;
//     var w = $(window).width() - 50;
    
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
    
//     return [nh,nw];    
    
// }

// function animateDiv(myclass){
//     var newq = makeNewPosition();
//     $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
//       animateDiv(myclass);        
//     });
    
// };
//=========================================================================================