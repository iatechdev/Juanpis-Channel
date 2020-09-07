// FUNCTION FOR PUT THE BACKGROUND IN THE CARDS OF THE CAROUSEL
function displayvideo(){ 
    if( document.getElementById("view").style.display === "block" || document.getElementById("viewtwo").style.display ==="block"){
        document.getElementById("view").style.display="none";
        document.getElementById("viewtwo").style.display="none";
    } else {
        document.getElementById("view").style.display="block";
    }}
function displayvideonew(){
    if( document.getElementById("viewnews").style.display === "block" || document.getElementById("viewtwonew").style.display ==="block"){
        document.getElementById("viewnews").style.display="none";
        document.getElementById("viewtwonew").style.display="none";
    } else {
        document.getElementById("viewnews").style.display="block";
    }}
function displayvideogomelo(){
    if( document.getElementById("viewgomelo").style.display === "block" || document.getElementById("viewtwogomelo").style.display ==="block"){
        document.getElementById("viewgomelo").style.display="none";
        document.getElementById("viewtwogomelo").style.display="none";
    } else {
        document.getElementById("viewgomelo").style.display="block";
    }}
function displayvideopoli(){
    if( document.getElementById("viewpoli").style.display === "block" || document.getElementById("viewtwopoli").style.display ==="block"){
        document.getElementById("viewpoli").style.display="none";
        document.getElementById("viewtwopoli").style.display="none";
    } else {
        document.getElementById("viewpoli").style.display="block";
    }}
function displayvideoheros(){
    if( document.getElementById("viewheros").style.display === "block" || document.getElementById("viewtwoheros").style.display ==="block"){
        document.getElementById("viewheros").style.display="none";
        document.getElementById("viewtwoheros").style.display="none";
    } else {
        document.getElementById("viewheros").style.display="block";
    }}
function displayvideofriends(){
    if( document.getElementById("viewfriends").style.display === "block" || document.getElementById("viewtwofriends").style.display ==="block"){
        document.getElementById("viewfriends").style.display="none";
        document.getElementById("viewtwofriends").style.display="none";
    } else {
        document.getElementById("viewfriends").style.display="block";
    }}


function displaycomentar(){
    document.getElementById("viewtwo").style.display="block";
    document.getElementById("view").style.display="none";
}
function displaycomentarnew(){
    document.getElementById("viewtwonew").style.display="block";
    document.getElementById("viewnews").style.display="none";
}
function displaycomentargomelo(){
    document.getElementById("viewtwogomelo").style.display="block";
    document.getElementById("viewgomelo").style.display="none";
}
function displaycomentarpoli(){
    document.getElementById("viewtwopoli").style.display="block";
    document.getElementById("viewpoli").style.display="none";
}
function displaycomentarheros(){
    document.getElementById("viewtwoheros").style.display="block";
    document.getElementById("viewheros").style.display="none";
}
function displaycomentarfriends(){
    document.getElementById("viewtwofriends").style.display="block";
    document.getElementById("viewfriends").style.display="none";
}

function displaydescripcion(){
    document.getElementById("viewtwo").style.display="none";
    document.getElementById("view").style.display="block";      
 }
 function displaydescripcionnew(){
    document.getElementById("viewtwonew").style.display="none";
    document.getElementById("viewnews").style.display="block";      
 }
 function displaydescripciongomelo(){
    document.getElementById("viewtwogomelo").style.display="none";
    document.getElementById("viewgomelo").style.display="block";      
 }
 function displaydescripcionpoli(){
    document.getElementById("viewtwopoli").style.display="none";
    document.getElementById("viewpoli").style.display="block";      
 }
 function displaydescripcionheros(){
    document.getElementById("viewtwoheros").style.display="none";
    document.getElementById("viewheros").style.display="block";      
 }
 function displaydescripcionfriends(){
    document.getElementById("viewtwofriends").style.display="none";
    document.getElementById("viewfriends").style.display="block";      
 }
   
function displayreproducir(){
    document.getElementById("reproducir").style.display="block";  
}
function regresar(){
    document.getElementById("reproducir").style.display="none";
}
function regresartwo(){
    document.getElementById("comentar").style.display="none";
    document.getElementById("bodyrep").style.opacity = "1";
}
function comentar(){
    document.getElementById("bodyrep").style.display="block";
    document.getElementById("bodyrep").style.opacity = "0.1";
    document.getElementById("comentar").style.display="block";
}
  
 


//*video*/
var mivideo= document.getElementById("video1");
function playPause(){

    if(mivideo.paused)
    (mivideo.play());
    else
    mivideo.pause();
}
function stop(){
    mivideo.pause();
    mivideo.currentTime=0;
}
function skip(value){
    mivideo.currentTime+=value;
}

// FUNCTION FOR PUT THE BACKGROUND IN THE CARDS OF THE CAROUSEL
function display(e){ 
    if(e.currentTarget.style.backgroundImage !== "url('../img/rp-hover.png')" & e.currentTarget.style.height !== "500px"){
        e.currentTarget.style.backgroundImage="url('../img/rp-hover.png')";
        e.currentTarget.style.height="500px";
        e.currentTarget.style.backgroundPosition = 'center';
        e.currentTarget.style.backgroundColor="transparente";
        e.currentTarget.style.zIndex='2';
    }else{
        e.currentTarget.style.backgroundColor="transparente";
        e.currentTarget.style.backgroundImage="";
        e.currentTarget.style.backgroundPosition = 'top';
        e.currentTarget.style.height="450px";
    }
}
document.getElementById('viewhover').addEventListener('click', display);
document.getElementById('viewhovertwo').addEventListener('click', display);
document.getElementById('viewhoverthree').addEventListener('click', display);
document.getElementById('viewhoverfour').addEventListener('click', display);
document.getElementById('viewhoverfive').addEventListener('click', display);
document.getElementById('viewhoversix').addEventListener('click', display);
document.getElementById('viewhoverseven').addEventListener('click', display);
document.getElementById('viewhovereigth').addEventListener('click', display);
document.getElementById('viewhovernine').addEventListener('click', display);

document.getElementById('viewhovernews').addEventListener('click', display);
document.getElementById('viewhovertwonews').addEventListener('click', display);
document.getElementById('viewhoverthreenews').addEventListener('click', display);
document.getElementById('viewhoverfournews').addEventListener('click', display);
document.getElementById('viewhoverfivenews').addEventListener('click', display);
document.getElementById('viewhoversixnews').addEventListener('click', display);
document.getElementById('viewhoversevennews').addEventListener('click', display);
document.getElementById('viewhovereigthnews').addEventListener('click', display);
document.getElementById('viewhoverninenews').addEventListener('click', display);

document.getElementById('viewhovergomelo').addEventListener('click', display);
document.getElementById('viewhovertwogomelo').addEventListener('click', display);
document.getElementById('viewhoverthreegomelo').addEventListener('click', display);
document.getElementById('viewhoverfourgomelo').addEventListener('click', display);
document.getElementById('viewhoverfivegomelo').addEventListener('click', display);
document.getElementById('viewhoversixgomelo').addEventListener('click', display);
document.getElementById('viewhoversevengomelo').addEventListener('click', display);
document.getElementById('viewhovereigthgomelo').addEventListener('click', display);
document.getElementById('viewhoverninegomelo').addEventListener('click', display);

document.getElementById('viewhoverpoli').addEventListener('click', display);
document.getElementById('viewhovertwopoli').addEventListener('click', display);
document.getElementById('viewhoverthreepoli').addEventListener('click', display);
document.getElementById('viewhoverfourpoli').addEventListener('click', display);
document.getElementById('viewhoverfivepoli').addEventListener('click', display);
document.getElementById('viewhoversixpoli').addEventListener('click', display);
document.getElementById('viewhoversevenpoli').addEventListener('click', display);
document.getElementById('viewhovereigthpoli').addEventListener('click', display);
document.getElementById('viewhoverninepoli').addEventListener('click', display);

document.getElementById('viewhoverheros').addEventListener('click', display);
document.getElementById('viewhovertwoheros').addEventListener('click', display);
document.getElementById('viewhoverthreeheros').addEventListener('click', display);
document.getElementById('viewhoverfourheros').addEventListener('click', display);
document.getElementById('viewhoverfiveheros').addEventListener('click', display);
document.getElementById('viewhoversixheros').addEventListener('click', display);
document.getElementById('viewhoversevenheros').addEventListener('click', display);
document.getElementById('viewhovereigthheros').addEventListener('click', display);
document.getElementById('viewhovernineheros').addEventListener('click', display);

document.getElementById('viewhoverfriends').addEventListener('click', display);
document.getElementById('viewhovertwofriends').addEventListener('click', display);
document.getElementById('viewhoverthreefriends').addEventListener('click', display);
document.getElementById('viewhoverfourfriends').addEventListener('click', display);
document.getElementById('viewhoverfivefriends').addEventListener('click', display);
document.getElementById('viewhoversixfriends').addEventListener('click', display);
document.getElementById('viewhoversevenfriends').addEventListener('click', display);
document.getElementById('viewhovereigthfriends').addEventListener('click', display);
document.getElementById('viewhoverninefriends').addEventListener('click', display);

document.getElementById('viewhover').addEventListener('click', displayvideo);
document.getElementById('viewhovernews').addEventListener('click', displayvideonew);
document.getElementById('viewhovergomelo').addEventListener('click', displayvideogomelo);
document.getElementById('viewhoverpoli').addEventListener('click', displayvideopoli);
document.getElementById('viewhoverheros').addEventListener('click', displayvideoheros);
document.getElementById('viewhoverfriends').addEventListener('click', displayvideofriends);



