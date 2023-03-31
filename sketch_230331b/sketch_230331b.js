let y=0;  
let x=0;
let a=0;
let star = [];
let counting= [0, 1, 2];
let growth=0;
let colors=  ["#9F7514", "#CE9B0F","#ECB315", '#EDBD2D', '#F1CD2B', '#FFE033',
"#B14C78","#D66382","#E07B94","#C76CA4","#E290BD","#F7AFC0",
"#643095","#6F3B90","#8B5FBF","#A470CB","#B485C7","#AD91C7"];
let colorChoice;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(11, 16, 30)
}


function draw() {
    background(220);
  let r= map(mouseY, 0, width, 10, 150);  
  background(r,0,100) 
  starShape();  
}


function keyPressed() { 
   if (keyCode===32){
      a=a+1;
  }
   if(a>2){
      a=0;
  }
}
  
function mousePressed(){
  if(counting[a]===0){
    colorChoice=floor(random(0,6));
    fill(colors[colorChoice]);
    }
  
  if(counting[a]===1){
    colorChoice=floor(random(7,12));
    fill(colors[colorChoice]);
    }
  
  if(counting[a]===2){
    colorChoice=floor(random(13,18));
    fill(colors[colorChoice]);
    }
  x=mouseX;
  y=mouseY;
  growth=random(-30,50);
  star.push({ x: mouseX, y: mouseY });
}
  

function starShape(){
  noStroke()
  for (let i = 0; i < star.length; i++) {
  quad(star[i].x,star[i].y,star[i].x+30+growth,star[i].y+30+growth,star[i].x,star[i].y+110+growth*2,star[i].x-30-growth,star[i].y+30+growth);
  quad(star[i].x,star[i].y,star[i].x+30+growth,star[i].y-30-growth,star[i].x,star[i].y-110-growth*2,star[i].x-30-growth,star[i].y-30-growth);
  quad(star[i].x,star[i].y,star[i].x+30+growth,star[i].y-30-growth,star[i].x+110+growth*2,star[i].y,star[i].x+30+growth,star[i].y+30+growth);
  quad(star[i].x,star[i].y,star[i].x-30-growth,star[i].y-30-growth,star[i].x-110-growth*2,star[i].y,star[i].x-30-growth,star[i].y+30+growth);
  }
}
