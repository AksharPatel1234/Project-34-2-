
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bomb;
var boom;
var bomb_con_1;
var rope1;


function preload(){
 
  boom = loadImage("bomb2.png")
  buildingImage= loadImage("building.jpg")
  DBuilding = loadImage("destroyed building.jpg")
  city = loadImage("city.webp")
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  rope1 = new Rope(7,{x:200,y:50})
  bomb = createSprite(200,200,20,20)
  bomb_con_1 = new Link(rope1,bomb)
 
  building = createSprite(200,335,50,50)
  building.scale = 0.07
  building.addImage(buildingImage)

button = createImg("button.webp")
button.position(200,50)
button.size(50,50)
button.mouseClicked(drop)

 

 
}



function draw() 
{
  
  
  background(51);
  image(city,0,0,width,height)

 

 

  

  rope1.show();
  

  Engine.update(engine)
  
  drawSprites()

 
}

function drop(){
  rope1.break()
}

