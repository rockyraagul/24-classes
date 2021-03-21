const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Wood;
var Hammer;
var stone;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Wood = new Wood(700,250,70,70);
    stone = new Stone(850,250);
    Hammer = new Hammer(550,250,300,25);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    
    Engine.update(engine);
    Wood.display();
    pig1.display();
    Hammer.display();
    pig2.display();
    bird.display();
    ground.display();
}