console.log("main is called");
 
var blue = new Slider(300,200, 100, 80,colArray[2][2], "pink");
var red = new BUTTON(800,250,150, 80, "rgb(194, 193, 255)", "black");
var purple = new BUTTON(800,480,150, 80, "rgb(253, 160, 255)", "black");
var yellow = new BUTTON(50,480,150, 80, "rgb(255, 230, 142)", "black");
var green = new BUTTON(800,50,150, 80, "rgb(149, 178, 137)", "black");
var pink = new BUTTON(50,50,150, 80, "rgb(255, 188, 209)", "black");
var orange = new BUTTON(50,250,150, 80, "rgb(249, 209, 152)", "black");


function animate(){
    ctx.clearRect(0,0, width, height);
    blue.update();
    purple.update();
    yellow.update();
    green.update();
    pink.update();
    orange.update();
    red.update();
    window.requestAnimationFrame(animate);
}
animate();