//=========================global variables==================================

var x = Math.floor(Math.random()* 1000);//choosing a horizental point randomlly tp appear the chicken  
var y = Math.floor(Math.random()* 350); //choosing a virtical point randomlly-- its been set to be 350 so it always choose a point in the middle
var chickenImg = new Image();   
var imagesource = "../imgs/chicken1.png";
var eggImage = new Image();
eggImage.src = "../imgs/egg1.png";
var eggs = [];
var eggCount = 0;
var lives = 3;
timer = 30;// 60 second
var bgSound = new Audio("../sounds/Children Party.wav");
bgSound.play();

//=========================end of global variables==================================

function appear(){// better if named Chicken
    chickenImg.src = imagesource;//
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

setTimeout(function(){
    $("#timer").text(timer);
    if (timer > 0)
        timer--;
}, 1000)

setTimeout(function(){
    bgSound.play();
}, 529)

//============================================================================

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
            lives--;
            $("li").find('img:first').remove();
            $(".eggs-count").text(eggCount);
            alert("Oh You Broke Your Eggs");
            console.log(eggCount);
            setTimeout(function() {
              crash = false;
            }, 1);
          } else {
            eggCount++;
            $(".eggs-count").text(eggCount);
            // console.log("chicken")
            // console.log(eggs);
            eggs.push(newEgg);
            console.log(eggCount);

          }
        }
    };

    var gameOver = function () {
        return (lives === 0 || timer === 0); 
    }
    
    var openWind = function(){
        return  document.getElementById('myModal').style.display = "block";
        $(".eggs-count").text(eggCount);
    }

    if (gameOver()){
        // alert("You're doneeee!!!!!!!");
        // location.reload();
        openWind();

    }


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