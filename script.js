//buttons lights on and off

$(document).ready(function(){
  $("#buttonSwitchOff").click(function(){
      $(".tree").hide();
      $(".treeOff").show();
  });
  $("#buttonSwitchOn").click(function(){
      $(".tree").show();
      $(".treeOff").hide();
  });
});


////////////////////hover sound boxes///////////////////////

var audio1 = document.getElementById("mySoundOnHoverEmpty");


function playHoverAudioEmpty(){
audio1.play();
}

var audio2 = document.getElementById("mySoundOnHoverTrain");


function playHoverAudioTrain(){
audio2.play();
}


var audio3 = document.getElementById("mySoundOnHoverBear");


function playHoverAudioBear(){
audio3.play();
}


var audio4 = document.getElementById("mySoundOnHoverSoldier");


function playHoverAudioSoldier(){
audio4.play();
}

var audio5 = document.getElementById("mySoundOnHoverBomb");


function playHoverAudioBomb(){
audio5.play();
}

///////////////////////////HOVER BUTTONS/////////////////////////////

var audioHOverButtonOn = document.getElementById("mySoundOnHoverButtonOn");


function playHoverButtonOn(){
audioHOverButtonOn.play();
}

var audioHOverButtonOff = document.getElementById("mySoundOnHoverButtonOff");


function playHoverButtonOff(){
audioHOverButtonOn.play();
}


var audioHOverButtonWrite = document.getElementById("mySoundOnHoverButtonWrite");


function playHoverButtonWrite(){
audioHOverButtonWrite.play();
}


var audioHOverButtonDelete = document.getElementById("mySoundOnHoverButtonDelete");


function playHoverButtonDelete(){
audioHOverButtonDelete.play();
}


var audioHOverButtonShow = document.getElementById("mySoundOnHoverButtonShowTimer");


function playHoverButtonShow(){
audioHOverButtonShow.play();
}
////////////////////////////////////////////EXPLOSION//////////////////////////////////
const colors = [
'#000',
'#200000',
];

function createElements(root, elementCount) {
return Array
  .from({ length: elementCount })
  .map((_, index) => {
    var element = document.createElement('div');
    element.classList = ['snowflake'];
    var color = colors[index % colors.length];
    element.style['background-color']= color; 
    element.style.width = '6px';
    element.style.height = '6px';
  element.style.top = '500px';
    element.style.position = 'fixed';
    element.style.borderRadius = '35%';
    root.appendChild(element);
    return element;
  });
}

function randomMovements(angle, spread, startVelocity) {
var randomAngle = angle * (Math.PI / 1);
var randomSpread = spread * (Math.PI / 50);
return {
  x: 0,
  y: 0,
  wobble: Math.random() * 10,
  velocity: (startVelocity * 0.1) + (Math.random() * startVelocity),
  angle2D: -randomAngle + ((0.5 * randomSpread) - (Math.random() * randomSpread)),
  tiltAngle: Math.random() * Math.PI
};
}

function updatesnowflake(snowflake, disappearing, destroy) { //create the snowflake, progress, destroy the snowflake

snowflake.physics.x += Math.cos(snowflake.physics.angle2D) * snowflake.physics.velocity;
snowflake.physics.y += Math.sin(snowflake.physics.angle2D) * snowflake.physics.velocity;
snowflake.physics.wobble += 0.1;
snowflake.physics.velocity *= destroy;
snowflake.physics.y += 0;
snowflake.physics.tiltAngle += 0.1;

var { x, y, tiltAngle, wobble } = snowflake.physics;
var wobbleX = x + (10 * Math.cos(wobble));
var wobbleY = y + (10 * Math.sin(wobble));
var transform = `translate3d(${wobbleX}px, ${wobbleY}px, 0) rotate3d(0.5, 1, 0.5, ${tiltAngle}rad)`;

snowflake.element.style.transform = transform;
snowflake.element.style.opacity = 1 - disappearing;

}

function animate(root, snowflakes, destroy) {
const totalTicks = 70;
let tick = 0;

function update() {
  snowflakes.forEach((snowflake) => updatesnowflake(snowflake, tick / totalTicks, destroy));

  tick += 1;
  if (tick < totalTicks) {
    requestAnimationFrame(update);
  } else {
    snowflakes.forEach((snowflake) => root.removeChild(snowflake.element));
  }
}

requestAnimationFrame(update);
}

function snowflake(root, {
angle = 100,
destroy = 0.5,
spread = 100,
startVelocity = 90,
elementCount = 1000,
} = {}) {
const elements = createElements(root, elementCount);
const snowflakes = elements.map((element) => ({
  element,
  physics: randomMovements(angle, spread, startVelocity)
}));

animate(root, snowflakes, destroy);
}


const snowClick = document.querySelector('.explosionSmallPresent ')
const trigger = document.querySelector('.openGiftBomb');
trigger.addEventListener('click', (event) => {
snowflake(snowClick)
});
///////////////////////////////EXPLOSIONS small present////////////////////////////////////////////////



$(document).ready(function(){
$("#boxBomb").click(function(){
  $(this).hide();
});
});





////////////////////////////////////SNOWING
var snow;
var SpeedSlider;
var snowVisible;
var speedValue;
var speedingTime;

(function() {
 snow = document.querySelectorAll("#snow .snowflakes");
 SpeedSlider = document.querySelector("#slider");
 snowVisible = true;
 speedValue = SpeedSlider.value;  
 SpeedSlider.addEventListener("input", function(theSliderValue) {
 speedValue = SpeedSlider.value;
 setTheValue();  
  });

  function setTheValue() {
    speedingTime = (120 +- speedValue) * 0.1;


    if (speedValue <= 0) {
      snowVisible = false
    }
    else{
      snowVisible = true
    };
                  
    snow.forEach(particles  => {  
     particles.style.animationDuration = (speedingTime + "s");

      if (snowVisible) {
        particles.style.animationIterationCount = "infinite";  
        particles.style.opacity = "1";
      } else {
        particles.style.animationIterationCount = "0";  
        particles.style.opacity = "0";
      }
    });
  }
  setTheValue();
})();




////////////////////////////////////boxes interaction

//////////////////////////////////////BEAR//////////////////////////////////////
var myOpenGiftAnimation = anime.timeline({
  direction: 'normal',
    easing: 'linear',
    autoplay: false,
  });
  
  myOpenGiftAnimation
  .add({
    targets: '#coverBear',
    translateY: [ { value: -120 }, { value: 270 } ],
         translateX: [ { value: 150 } ],
    //translateY: [ { value: -1900} ] , 
    duration: 1000,
  })
    .add({
      targets: '#toyBear',
      //translateY: [ { value: -400 } ],
     translateY: [ { value: -500 }, { value: -120 }],
         translateX: [ { value: -570 } ],
      duration: 2000,
    scale: {
      value: 1.7,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
      offset: '+=300' 
    });

  document.querySelector('.openGiftBear').onclick = myOpenGiftAnimation.play;
  
/////////////////////////////Soldier//////////////////////////////////////


  var myOpenGiftAnimation = anime.timeline({
    direction: 'normal',
      easing: 'linear',
      autoplay: false,
    });
    
    myOpenGiftAnimation
    .add({
      targets: '#coverBoxSoldier',
      translateY: [ { value: -120 }, { value: 350 } ],
         translateX: [ { value: -120 } ],
      //translateY: [ { value: -1900} ] , 
      duration: 2000,
    })
      .add({
        targets: '#toySoldier',
        translateY: [ { value: -600 } , { value: -430 }],
        translateX: [ { value: -540 }],
        duration: 2000,
      scale: {
      value: 1.7,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
        offset: '+=300' ,
      });
  
    document.querySelector('.openGiftSoldier').onclick = myOpenGiftAnimation.play;
    
  //////////////////////////Train/////////////////////////////
  
    var myOpenGiftAnimation = anime.timeline({
      direction: 'normal',
        easing: 'linear',
        autoplay: false,
      });
      
      myOpenGiftAnimation
      .add({
        targets: '#coverTrain',
          translateY: [ { value: -120 }, { value: 200 } ],
         translateX: [ { value: 150 } ],
      //  translateY: [ { value: -1900} ] , 
        duration: 2000,
      })
        .add({
          targets: '#toyTrain',
          translateY: [ { value: -380 } ],
        translateX: [ { value: -10 }],
          duration: 2000,
        scale: {
      value: 1.4,
      duration: 1600,
      delay: 800,  
      easing: 'easeInOutQuart'
    },
          offset: '+=300' 
        });
    
      document.querySelector('.openGiftTrain').onclick = myOpenGiftAnimation.play;
      
    
    /////////////////////////BOMB/////////////////////////

      
$(document).ready(function(){
  $(".openGiftBomb").click(function(){
      $(".openGiftBomb").animate({
        opacity: '0',
      });
  });
});


var bombSound = new Audio('https://www.soundjay.com/mechanical/sounds/explosion-01.mp3');

function playSound() {
bombSound.play();
}

  
////////empty box////////////////////////




var myOpenGiftEmptyAnimation = anime.timeline({
      direction: 'normal',
        easing: 'linear',
        autoplay: false,
      });
      
      myOpenGiftEmptyAnimation
      .add({
        targets: '#coverEmpty',
         translateY: [ { value: -120 }, { value: 300 } ],
         translateX: [ { value: -110 } ],
        duration: 2000,
      scale: {
      value: 1.2,
      duration: 1600,
      }
      }),
       
       
    


    document.querySelector('.openGiftEmpty').onclick = myOpenGiftEmptyAnimation.play;
    

////////////////////////////////////////////Writing Merry Christmas /////////////////////////////////////////////


  var letterTime = 250;

var lineDrawing = anime({
targets: ".MerryChristmas path",
strokeDashoffset: [anime.setDashoffset, 0],
easing: "easeInOutCubic",
delay: function(el, i) {
  return letterTime * i;
},
autoplay: false
});

document.querySelector("#writeLetters").onclick = lineDrawing.restart;
 
$(document).ready(function(){
  $("#deleteLetters").click(function(){
      $(".MerryChristmas").animate({
        opacity: '0',
      });
  });
});
 
$(document).ready(function(){
  $("#writeLetters").click(function(){
      $(".MerryChristmas").animate({
        opacity: '1',
      });
  });
});


///////////////////////////////COUNTDOWN TIMER////////////////////////////////////////////////////

$(document).ready(function(){
  $("#showtimer").click(function(){
      $("#timerBox").show();
      
  });
  $("#closeBox").click(function(){
      $("#timerBox").hide();
  });
});


var today;
var TimeUntilChristmas;
var days;
var hours;
var minutes;
var seconds;
var updatingTime;

var Christmas = new Date("Dec 25, 2020 00:00:00").getTime();

  updatingTime = setInterval(function() {
  today = new Date().getTime();  
  TimeUntilChristmas = Christmas - today;

  days = Math.floor(TimeUntilChristmas / (1000 * 60 * 60 * 24)); 
  hours = Math.floor((TimeUntilChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
  minutes = Math.floor((TimeUntilChristmas % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor(((TimeUntilChristmas) % (1000 * 60)) / 1000);

  document.getElementById("displayTimeInBox").innerHTML = days + " " + "Days " + hours + " " +"Hours "
  + minutes + " " + "Minutes " + "and" + " " + seconds +" " + "Seconds ";
  
  if (TimeUntilChristmas< 0) {
      clearInterval(updatingTime);
      document.getElementById("displayTimeInBox").innerHTML = "It is Christmas. MERRY CHRISTMAS!";
  }
});
