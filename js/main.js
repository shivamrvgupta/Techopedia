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
