
// Button
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Keyboard with sound
addEventListener("keydown", function(e) {
    var keyPressed = e.key;

    switch (keyPressed) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();  
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play(); 
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();  
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play(); 
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();  
            break;
        case "k":
            var snare = new Audio('sounds/snare.mp3');
            snare.play(); 
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();  
            break;
        default:
            console.log("Invalid key");
    }

});


// Click with Sound
for (var i=0; i<numberOfDrumButtons; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        var buttonInnerHTML = this.innerHTML;
        
        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();  
                break;
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play(); 
            break;
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();  
                break;
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play(); 
            break;
            case "j":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();  
                break;
            case "k":
                var snare = new Audio('sounds/snare.mp3');
                snare.play(); 
            break;
            case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();  
                break;

            default:
                console.log();
        }
    })
}

