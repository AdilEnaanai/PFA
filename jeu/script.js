let player=document.getElementById("player");
movable=false;
let vitesse=5;
deplacement={"ArrowUp":-1,"ArrowDown":1,"ArrowLeft":-1,"ArrowRight":1};
let colors={true:"green",false:"red"};
document.addEventListener("mousemove",function(e){
    if(!movable) return;
    let x=e.clientX-25;
    let y=e.clientY-25;
    player.style.position="absolute";
    player.style.left=x+"px";
    player.style.top=y+"px";
    
});

player.addEventListener("mousedown",function(){
    movable=!movable;
    player.style.backgroundColor=colors[movable];
});


document.addEventListener("keydown",function(e){
    player.style.position="absolute";
    if(e.key.endsWith("Right")||e.key.endsWith("Left")){
        player.style.left=(parseInt(player.style.left||0)+vitesse*deplacement[e.key]||0)+"px";
    }else if(e.key.endsWith("Up")||e.key.endsWith("Down")){
        player.style.top=(parseInt(player.style.top||0)+vitesse*deplacement[e.key]||0)+"px";
    }

});