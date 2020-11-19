
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine
var Ground
var Paperball
var box1,box2,box3
var paperimg,dustbinimg,dustbin

function preload()
{
paperimg = loadImage("paper.png");
dustbinimg=loadImage("dustbingreen.png")
}

function setup() {
  createCanvas(800, 700);
  
  dustbin=createSprite(740,600,100,100)
  dustbin.addImage(dustbinimg)
  dustbin.scale=0.5

	engine = Engine.create();
	world = engine.world;

	Ground=new ground(400,685)
  Paperball=new paper(150,600);

  //Create the Bodies Here.
  //box1=createSprite(600,660,200,20);
	//box1.shapeColor=color("green");

	//box2=createSprite(690,620,20,100);
	//box2.shapeColor=color("green");

	//box3=createSprite(490,620,20,100);
  //box3.shapeColor=color("green");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  Ground.display()
  Paperball.display()
  //box1.display()
  //box2.display()
  //box3.display()

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(Paperball.body,Paperball.body.position,{x:100,y:-260});
     
   }
 }
 