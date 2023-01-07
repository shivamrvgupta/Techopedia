var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
loader.style.display = "none";
})
// Glitch Timeline Function
var $text = document.querySelector('.btn-glitch-active'),
    $filter = document.querySelector('.svg-sprite'),
    $turb = $filter.querySelector('#filter feTurbulence'),
    turbVal = { val: 0.000001 },
    turbValX = { val: 0.000001 };

var glitchTimeline = function() {
    var timeline = new TimelineMax({
        repeat: -1,
        repeatDelay: 2,
        paused: true,
        onUpdate: function () {
            $turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
        }
    });

    timeline
        .to(turbValX, 0.1, { val: 0.5 })
        .to(turbVal, 0.1, { val: 0.02 });
    timeline
        .set(turbValX, { val: 0.000001 })
        .set(turbVal, { val: 0.000001 });
    timeline
        .to(turbValX, 0.2, { val: 0.4 }, 0.4)
        .to(turbVal, 0.2, { val: 0.002 }, 0.4);
    timeline
        .set(turbValX, { val: 0.000001 })
        .set(turbVal, { val: 0.000001 });

    // console.log("duration is: " + timeline.duration());

    return {
        start: function() {
            timeline.play(0);
        },
        stop: function() {
            timeline.pause();
        }
    };
};

btnGlitch = new glitchTimeline();

$('.btn-glitch')
    .on('mouseenter', function () {
          $(this).addClass('btn-glitch-active');
          btnGlitch.start();
    })
    .on('mouseleave', function () {
        var $this = $(this);
        if ( $this.hasClass('btn-glitch-active') ) {
            $this.removeClass('btn-glitch-active');
            btnGlitch.stop();
        }
    });


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
accordionItemHeaders.forEach(accordionItemHeader => {
accordionItemHeader.addEventListener("click", event => {
  accordionItemHeader.classList.toggle("active");
  const accordionItemBody = accordionItemHeader.nextElementSibling;
  if (accordionItemHeader.classList.contains("active")) {
    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    accordionItemHeader.style.backgroundColor = "#000516";
    accordionItemHeader.style.border = "#fff solid 1px";
  }
  else {
    accordionItemBody.style.maxHeight = 0;
    accordionItemHeader.style.backgroundColor = "transparent";
    accordionItemHeader.style.border = "#fff solid 1px";
  }

});
});

AOS.init();


// Nav



$("#toggle").click(function () {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function () {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});

$(".close-btn").click(function () {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});

TweenMax.from("#brand", 1, {
  delay: 0.4,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  "#menu li a",
  1,
  {
    delay: 0.4,
    opacity: 0,
    ease: Expo.easeInOut,
  },
  0.1
);

// Timer

 // The data/time we want to countdown to
 var countDownDate = new Date("Jan 22, 2023 16:37:52").getTime();
      
 // Run myfunc every second
 var myfunc = setInterval(function() {

 var now = new Date().getTime();
 var timeleft = countDownDate - now;
     
 // Calculating the days, hours, minutes and seconds left
 var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
 var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
     
 // Result is output to the specific element
 document.getElementById("days").innerHTML = days + "d "
 document.getElementById("hours").innerHTML = hours + "h " 
 document.getElementById("minutes").innerHTML = minutes + "m " 
 document.getElementById("seconds").innerHTML = seconds + "s " 
     
 // Display the message when countdown is over
 if (timeleft < 0) {
     clearInterval(myfunc);
     document.getElementById("days").innerHTML = ""
     document.getElementById("hours").innerHTML = "" 
     document.getElementById("mins").innerHTML = ""
     document.getElementById("secs").innerHTML = ""
     document.getElementById("end").innerHTML = "TIME UP!!";
 }
 }, 1000);
 


              let toggles = document.getElementsByClassName('faq-wrapper');
                let contentDiv = document.getElementsByClassName('faq-content');
                let icons = document.getElementsByClassName('bx');
                
                for(let i=0; i<toggles.length; i++){
                    toggles[i].addEventListener('click', ()=>{
                        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
                            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
                            toggles[i].style.color = "#23daab";
                            icons[i].classList.remove('bx-plus');
                            icons[i].classList.add('bx-minus');
                        }
                        else{
                            contentDiv[i].style.height = "0px";
                            toggles[i].style.color = "#111130";
                            icons[i].classList.remove('bx-minus');
                            icons[i].classList.add('bx-plus');
                        }
                
                        for(let j=0; j<contentDiv.length; j++){
                            if(j!==i){
                                contentDiv[j].style.height = "0px";
                                toggles[j].style.color = "#111130";
                                icons[j].classList.remove('bx-minus');
                                icons[j].classList.add('bx-plus');
                            }
                        }
                    });
                }
                
