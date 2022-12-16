const nav = document.getElementById('mynav');


window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
    nav.style.background = 'rgba(0, 0, 0, 0.205)';
    nav.style.backdropFilter = ' blur(100px)' ;

  }
  else{
    nav.style.background = 'rgba(0, 0, 0, 0.205)';
    nav.style.backdropFilter = ' blur(100px)' ;
  }
}
