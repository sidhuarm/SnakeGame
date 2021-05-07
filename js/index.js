// Game Constants + var
const direction = {x:0,y:0};
const musicSound = new Audio("music.mp3");
const foodSound = new Audio("food.mp3");
const gameOverSound = new Audio("gameover.mp3");
const moveSound = new Audio("move.mp3");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x:13,y:15}
];
food = {x:6,y:7};


// Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000 < 1/speed ){
    return;
    }
   lastPaintTime = ctime;
   gameEngine();
}
function gameEngine(){
        // Part 1 Updating snake Array & Food
        if(isCollide(snakeArr)){
            
        }



        // Part 2 Display the snake and Food
        // Display Snake
         board.InnerHTML=""; 
         snakeArr.forEach((e,index) =>{ 
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
       
        if(index===0){
            snakeElement.classList.add('head');
        }else{
        snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
          });
        //Display Food
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);


}

// Main Logic 
window.requestAnimationFrame(main);
window.addEventListener('keydown',e =>{
    inputDir = {x:0,y:1}    // Start The game
    moveSound.play();
    switch (e.key){
        case "ArrowUp" :
           console:log("ArrowUp")
           inputDir.x = 0;
           inputDir.y = -1;
           break;

        case "ArrowDown" :
          console:log("ArrowDown")
          inputDir.x = 0;
          inputDir.y = 1;
          break;

        case "ArrowRight" :
          console:log("ArrowRight")
          inputDir.x = 1;
          inputDir.y = 0;
          break;

         case "ArrowLeft" :
           console:log("ArrowLeft")
           inputDir.x = -1;
           inputDir.y = 0;
           break;

        default:
            break;
    }
});