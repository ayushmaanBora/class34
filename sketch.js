var ball;
var database;
var ballPosition;
function setup(){

database = firebase.database();
   console.log(database);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    locOfChild =  database.ref('ball/position'); 
    locOfChild.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
function readPosition(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;
}

function showError(){
console.log("error in reading/ writting to the database")
}

function writePosition(x,y){
database.ref('ball/position').set({
    'x': ball.x + x,
    'y': ball.y + y 
})


}
function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
