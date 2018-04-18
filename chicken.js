
//=========================global variables==================================
var can;
var ctx;
var chickenImg = new Image();   

//=========================global variables==================================

$(document).ready(function(){// when opening the index.html page on the browser
        // draw a canves for the game
        can = document.getElementById('canvas');
        can.width = 1350;
        can.height = 600; 
        ctx = can.getContext('2d');
    
        console.log("hi");// for test purpaces 
    //=======================modal===============================   
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");


    //Get the modal
    var modal = document.getElementById('myModal');

        // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }



    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(anything) {
        if (anything.target == modal) {
            modal.style.display = "none";
        }
    }

    //======================start the game button===============================
    // to make "start game" button clickble
    document.getElementById("start-button").onclick = function(){
        modal.style.display = "none";
        appear(); // calling the function that make the chicken pop up
    }
    //=========================================================================

    //=========================how to play button===============================

        // Get the button that opens the how to play
        // var btn2 = document.getElementById("playModal");

        //Get the modal
        // var modal2 = document.getElementsByClassName("mdl-conten");
        // document.getElementsByClassName("playModal").onclick = function(){
        //     modal2.style.display= "none";
        // }


        // // Get the <span> element that closes the modal
        // var span2 = document.getElementsByClassName("close")[0];

        // // When the user clicks the button, open the modal 
        // btn2.onclick = function() {
        //     modal2.style.display = "block";
        // }
        

        // // When the user clicks on <span> (x), close the modal
        // span2.onclick = function() {
        //     modal2.style.display = "none";
        // }

    //===========================================================================================
    // document.getElementById("playModal").onclick = function(){

    // }

   


    //=============================end of modal==================================
    
    //================================canvas=====================================

});

    //================================end of canvas=====================================



//=====================functions============================================

// var Chicken = function(){// the moving object
//     this.x;
//     this.y;
//     this.width = 50;
//     this.height = 50;
//     this.img =  "./imgs/chicken1.png";
// }

// Chicken.prototype.drawChicken = function(imagesource){
//     var current= this;
//     chickenImg.onload = function(){
//         ctx.drawImage(chickenImg, current.x, current.y, current.width, current.height);
//     };
//     chickenImg.src = imagesource;
// }



function appear(){
    var x = Math.floor(Math.random()* 1000);//choosing a horizental point randomlly 
    var y = Math.floor(Math.random()* 350); //choosing a virtical point randomlly-- its been set to be 350 so it always choose a point in the middle
    // Chicken.drawChicken();
    // ctx.fillRect(x,y, 100, 100);
    chickenImg.src = "./imgs/chicken1.png"
        ctx.drawImage(chickenImg,x,y, 100, 100);



    runAround(x,y);        
}


function limits(x,y, id){
    if(x <= 0 || y <= 0 || x >= 1300 || y >= 490){
        // alert("your Chicken is running away!");
        clearInterval(id);
        // appear();// everytime a chicken hit the borders another chicken will pop up 
        return false;
    }else {return true;}
}

function runAround(x,y){
    // ctx.clearRect(x, y, 100, 100);
    chickenImg.src = "./imgs/chicken1.png";
    var intervalId;
    var rndmIntrvl = Math.ceil(Math.random()* 2000);// should pick a numberof secondes randomlly between 0 and 2000
    var direction = Math.ceil(Math.random()* 4);


    switch(direction){
        case 1:
            intervalId = setInterval(function(){
                if (limits(x+20, y, intervalId)){
                ctx.clearRect(x,y, 110, 110);
                // ctx.fillRect(x+20, y, 100, 100);
                ctx.drawImage(chickenImg, x+20, y, 100, 100);
                x+=20;
                }
            },100)
        
        break;


        case 2:
            intervalId =setInterval(function(){
                if (limits(x, y+20, intervalId)){
                ctx.clearRect(x, y, 110, 110);
                // ctx.fillRect(x, y+20, 100, 100);
                ctx.drawImage(chickenImg, x, y+20, 100, 100);

                y+=20;
                }
            },100)
        break;

        case 3:
            intervalId =setInterval(function(){
                if (limits(x-20, y, intervalId)){
                ctx.clearRect(x, y, 110, 110);
                // ctx.fillRect(x-20, y, 100, 100);
                ctx.drawImage(chickenImg, x-20, y, 100, 100);
                x-=20;
                }
            },100) 
        break;


        case 4:
            intervalId =setInterval(function(){
                if (limits(x, y-20, intervalId)){
                ctx.clearRect(x,y, 110, 110);
                // ctx.fillRect(x, y-20, 100, 100);
                ctx.drawImage(chickenImg, x, y-20, 100, 100);

                y-=20;
                }
            },100)
        break;
    }

    setTimeout(function(){
         clearInterval(intervalId);
         runAround(x,y);
    }, rndmIntrvl ) 

   

}

// });

















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



        
