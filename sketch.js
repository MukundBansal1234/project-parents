const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20,box21;
var box22,box23,box24,box25,box26;
var box27,box28,box29,box30;
var box31,box32,box33;
var box34,box35;
var box36;
var box37,box38,box39,box40,box41,box42;
var box43,box44,box45,box46,box47;
var box48,box49,box50,box51;
var box52,box53,box54;
var box55,box56;
var box57;
var ground,platform1,platform2;
var elastic;
var polygon;


function setup(){
     createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
   box1= new Bluebox(575,275,30,40);
   box2= new Bluebox(595,275,30,40); 
   box3= new Bluebox(615,275,30,40); 
   box4= new Bluebox(635,275,30,40); 
   box5= new Bluebox(655,275,30,40); 
   box6= new Bluebox(675,275,30,40); 
   box7= new Bluebox(695,275,30,40);
   box8= new Bluebox(715,275,30,40);


   box9= new Yellowbox(585,245,30,40);
   box10= new Yellowbox(605,245,30,40);
   box11= new Yellowbox(625,245,30,40);
   box12= new Yellowbox(645,245,30,40);
   box13= new Yellowbox(665,245,30,40);
   box14= new Yellowbox(685,245,30,40);
   box15= new Yellowbox(705,245,30,40);


   box16= new Greenbox(595,215,30,40);
   box17= new Greenbox(615,215,30,40);
   box18= new Greenbox(635,215,30,40);
   box19= new Greenbox(655,215,30,40);
   box20= new Greenbox(675,215,30,40);
   box21= new Greenbox(695,215,30,40);


   box22= new Redbox(605,185,30,40);
   box23= new Redbox(625,185,30,40);
   box24= new Redbox(645,185,30,40);
   box25= new Redbox(665,185,30,40);
   box26= new Redbox(685,185,30,40);


   box27= new Yellowbox(615,155,30,40);
   box28= new Yellowbox(635,155,30,40);
   box29= new Yellowbox(655,155,30,40);
   box30= new Yellowbox(675,155,30,40);


   box31= new Bluebox(625,125,30,40);
   box32= new Bluebox(645,125,30,40);
   box33= new Bluebox(665,125,30,40);
   

   box34= new Redbox(635,95,30,40);
   box35= new Redbox(655,95,30,40);


   box36= new Greenbox(645,65,30,40);
   polygon= new Polygon(0,0,50);


   box37=new Bluebox(1000,190,20,30);
   box38=new Bluebox(1020,190,20,30);
   box39=new Bluebox(1040,190,20,30);
   box40=new Bluebox(1060,190,20,30);
   box41=new Bluebox(1080,190,20,30);
   box42=new Bluebox(1100,190,20,30);
   

   box43=new Yellowbox(1010,170,20,30);
   box44=new Yellowbox(1030,170,20,30);
   box45=new Yellowbox(1050,170,20,30);
   box46=new Yellowbox(1070,170,20,30);
   box47=new Yellowbox(1090,170,20,30);
   
   
   box48= new Redbox(1020,150,20,30);
   box49= new Redbox(1040,150,20,30);
   box50= new Redbox(1060,150,20,30);
   box51= new Redbox(1080,150,20,30);


   box52= new Greenbox(1030,130,20,30);
   box53= new Greenbox(1050,130,20,30);
   box54= new Greenbox(1070,130,20,30);


   box55= new Yellowbox(1040,110,20,30);
   box56= new Yellowbox(1060,110,20,30);


   box57= new Redbox(1050,90,20,30);

   spring = new Projectile(polygon.body,{x:200,y:200});

   ground= new Platform(600,390,1200,20);

   platform1= new Platform(650,300,200,20);

   platform2=new Platform(1050,200,200,20);
  
   
}

function draw(){
    background(0);
    Engine.update(engine);
    polygon.display();
    spring.display();
    ground.display();
    platform1.display();
    platform2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();

    box27.display();
    box28.display();
    box29.display();
    box30.display();

    box31.display();
    box32.display();
    box33.display();

    box34.display();
    box35.display();

    box36.display();

    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();

    box43.display();
    box44.display();
    box45.display();
    box46.display();
    box47.display();
    
    box48.display();
    box49.display();
    box50.display();
    box51.display();
    
    box52.display();
    box53.display();
    box54.display();

    box55.display();
    box56.display();

    box57.display();
    
       textSize(30);
       text("Thamk You for making me join Coding",100,50);
       text("I will never let you down",125,100);
       text("I will try my best to do ",125,150);
       text("justice to the decision for making me join coding",125,200);
    

   drawSprites();
}
function mouseDragged(){
   Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
   spring.fly();
}
function keyPressed(){
   if (keyCode === 32){
      spring.attach(polygon.body); 
   }
}

