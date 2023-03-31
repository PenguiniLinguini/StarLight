/* Instructions: when moving the mouse up and down the Y axis, the background color changes.
Clicking with the mouse creates a star, you can make as many as you want.
Pressing the space bar alternates between 3 different shades of color.

Analysis/artist statement: This artwork lets you create star in the sky, creating your own personal galaxy. 
The background represents the setting sky, from sunset to night. 
The stars shift between shades of pastel colors, bright and innocent, they twinkle in the dark. 
*/

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
         background(11, 16, 30);
}

function draw() {
         background(220);
         let r= map(mouseY, 0, width, 10, 150);    
         background(r,0,100); // Moving the mouse up and down changes the amount of red in the backgorund, creating a gradient.
         starShape();  
}


function keyPressed() { 
         if(keyCode===32){
             a=a+1; // When pressing the space bar, the number gooes up by one.
        }
         if(a>2){
             a=0; // When the number reaches 2, it goes back to 0. 
        }
}
  
function mousePressed(){
         if(counting[a]===0){
            colorChoice=floor(random(0,6));
            fill(colors[colorChoice]); // When the number is at 0, it randomizes the colors of the shapes between the first 6 colors in the array.
         }
  
         if(counting[a]===1){
            colorChoice=floor(random(7,12));
            fill(colors[colorChoice]); // When its at 1, it randomizes between the 7th to 12th colors. 
         }
  
         if(counting[a]===2){
             colorChoice=floor(random(13,18));
            fill(colors[colorChoice]); // When its at 2, it randomizes between the 13th to 18th colors. 
         }
  
         x=mouseX;
         y=mouseY;
         growth=random(-30,50); // The size of the shapes are randomized between these limits. 
          star.push({ x: mouseX, y: mouseY });
}
  

function starShape() {
        noStroke()
        for (let i = 0; i < star.length; i++) { // loop through the star array, letting it stay on screen after the loop. 
             quad(star[i].x,star[i].y,star[i].x+30+growth,star[i].y+30+growth,star[i].x,star[i].y+110+growth*2,star[i].x-30-growth,star[i].y+30+growth);
             quad(star[i].x,star[i].y,star[i].x+30+growth,star[i].y-30-growth,star[i].x,star[i].y-110-growth*2,star[i].x-30-growth,star[i].y-30-growth);
             quad(star[i].x,star[i].y,star[i].x+30+growth,star[i].y-30-growth,star[i].x+110+growth*2,star[i].y,star[i].x+30+growth,star[i].y+30+growth);
             quad(star[i].x,star[i].y,star[i].x-30-growth,star[i].y-30-growth,star[i].x-110-growth*2,star[i].y,star[i].x-30-growth,star[i].y+30+growth);
             // The four points of the star.     
        }
}
