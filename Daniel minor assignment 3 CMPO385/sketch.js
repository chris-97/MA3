var z;

function preload(){
  z = loadJSON("zodiac.json");
  soundFormats("wav","mp3",'ogg');
  rat = loadSound('assets/Animals/Rat.wav');
  ox = loadSound('assets/Animals/Ox.wav');
  tiger = loadSound('assets/Animals/Tiger.wav');
  rabbit = loadSound('assets/Animals/Rabbit.wav');
  dragon = loadSound('assets/Animals/Dragon.wav');
  snake = loadSound('assets/Animals/Snake.wav');
  horse = loadSound('assets/Animals/Horse.wav');
  goat = loadSound('assets/Animals/Goat.wav');
  monkey = loadSound('assets/Animals/Monkey.wav');
  rooster = loadSound('assets/Animals/Rooster.wav');
  dog = loadSound('assets/Animals/Dog.wav');
  pig = loadSound('assets/Animals/Pig.wav');
}

function setup(){
    canvas = createCanvas(window.innerWidth,window.innerHeight);

}

function draw(){
  cursor(ARROW);
  var a = [z.Rat,z.Ox,z.Tiger,z.Rabbit,z.Dragon,z.Snake,z.Horse,z.Goat,z.Monkey,z.Rooster,z.Dog,z.Pig];
  var b = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"];

  background(0);
  textAlign(CENTER, CENTER);

  for(var i = 0; i < a.length; i++) {
    fill(255);
    textSize(window.height/20);
    text(a[i].unicode_symbol,100,window.height/7.5+i*window.height/15);
    information(i,b[i]);
  }
}

function mousePressed(){
  var c = [rat,ox,tiger,rabbit,dragon,snake,horse,goat,monkey,rooster,dog,pig];
  for(var i = 0; i < c.length; i++) {
    var d = dist(mouseX, mouseY, 100, window.height/8+i*window.height/15);
    if (d < window.height/40){
      c[i].play();
    }
  }
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
}

function information(arrayN,title){
  var a = [z.Rat,z.Ox,z.Tiger,z.Rabbit,z.Dragon,z.Snake,z.Horse,z.Goat,z.Monkey,z.Rooster,z.Dog,z.Pig];
  this.a = arrayN;
  this.b = title;

  var d = dist(mouseX, mouseY, 100, window.height/8+this.a*window.height/15);
  if (d < window.height/40){
    cursor(HAND);
    fill(255);
    textSize(window.height/10);
    text(this.b,window.width/2,window.height/7);
    //WATER
    if(this.a==0||this.a==11){
      fill(35, 151, 207);
      this.more();}
    //EARTH
    if(this.a==1||this.a==4||this.a==7||this.a==10){
      fill(162, 111, 73);
      this.more();}
    //WOOD
    if(this.a==2||this.a==3){
      fill(145, 186, 101);
      this.more();}
    //FIRE
    if(this.a==5||this.a==6){
      fill(230, 56, 84);
      this.more();}
    //METAL
    if(this.a==8||this.a==9){
      fill(244, 243, 232);
      this.more();}
  }
  this.more = function(){
    textSize(window.height/25);
    text(a[this.a].yinyang,window.width/2,window.height/3);
    text(a[this.a].direction,window.width/2,window.height/3+window.height/15);
    text(a[this.a].season,window.width/2,window.height/3+2*window.height/15);
    text(a[this.a].element,window.width/2,window.height/3+3*window.height/15);
    textSize(window.width/50);
    text(a[this.a].years,window.width/2,window.height/3+4*window.height/15);
  }
}


//fill(255,0+20*this.a,255-20*this.a);
