function makeFalse(){
 return false
}

function mouseNum(e){
    if(e.which==2||e.which==3)
    return false
}

if(document.layers){
    document.captureEvents(Event.mousedown)
    document.onmousedown=mouseNum
}
document.oncontextmenu = makeFalse;