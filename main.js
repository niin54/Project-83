var mouseEvent = "empty";
var prevx, prevy;
width= screen.width;
newwidth= screen.width-70;
newheight=screen.height-300;


    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    if(width<992) {
       canvas.width=newwidth;
       canvas.height=newheight;
       document.body.style.overflow="hidden";
    }
    function touchstart(e){
        console.log("Touchstart");
        prevx=e.touches[0].clientX-canvas.offsetLeft;
        prevy=e.touches[0].clientY-canvas.offsetTop;
}
function touchmove(e) {
    x=e.touches[0].clientX-canvas.offsetLeft;
    y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + prevx + "y = " + prevy);
        ctx.moveTo(prevx, prevy);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
}
    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         x = e.clientX - canvas.offsetLeft;
         y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + prevx + " y = " + prevy);
        ctx.moveTo(prevx, prevy);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + x + " y = " + y);
        ctx.lineTo(x,y);
        ctx.stroke();
        }

        prevx=x; 
        prevy=y;
    }
