let arrayOfDrums=document.getElementsByClassName("drum");
// console.log(arrayOfDrums);

for(let i=0;i<arrayOfDrums.length;i++){
    arrayOfDrums[i].addEventListener("click",function(){
        console.log(this);
        let buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });



    // for key press
    arrayOfDrums[i].addEventListener("keydown",function(event){
        // console.log(this);
        // let buttonInnerHTML=this.innerHTML;
        makeSound(event.key);
        buttonAnimation(event.key);
    });
}


//for button animation:
const buttonAnimation=(key)=>{
    let activeButton=document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");
    console.log("activeButton");
    setTimeout(()=>{
        activeButton.classList.remove("pressed");
    },100); 


}


//for sound
const makeSound=(key)=>{
    switch(key){
        case "w":
            let tom1=new Audio("assets/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2=new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3=new Audio("assets/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4=new Audio("assets/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare=new Audio("assets/sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash=new Audio("assets/sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick=new Audio("assets/sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            alert("Wrong key pressed");

    }
} 