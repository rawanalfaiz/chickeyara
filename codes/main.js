//=========================global variables==================================
var can = document.getElementById('canvas1');
var ctx;
//=========================global variables==================================


$(document).ready(function(){// when opening the index.html page on the browser
    // draw a canves for the game
    can.width = 1350;
    can.height = 600; 
    ctx = can.getContext('2d');
    appear();


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
         // calling the function that make the chicken pop up
         location.reload();

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

//===========================================================================

//=============================page transestion==============================
window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
  });

//================================canvas=====================================


// $("can").window
// (function(){
//     $(this).fadeOut();
// });

//================================end of canvas==============================

});


