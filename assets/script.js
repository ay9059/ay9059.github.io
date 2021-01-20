var gear = document.getElementById("wheelImage");

//Optimized scrolling, to prevent janking
;(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})();
window.addEventListener("optimizedScroll", function() {
     gear.style.transform = "rotate(" + window.pageYOffset/6 + "deg)";
 
});

//This snippet makes things appear only if its in the viewport
function isInViewport (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


myID = document.getElementById("educationtitle");
showID = document.getElementById("edu");
console.log(myID)

function myScrollFunc(){
    console.log("one call");

  var y = window.scrollY;
  
  if (isInViewport(myID)) {

    showID.className = "educationshow"
  } else {
      if(showID.className!="educationshow"){
         showID.className = "educationhide"
      }
    
  }
};

first = document.getElementById("project");
second = document.getElementById("proju");
function pro(){
    console.log("one call");

  var y = window.scrollY;
  
  if (isInViewport(first)) {

    second.className = "educationshow"
  } else {
      if(second.className!="educationshow"){
         second.className = "educationhide"
      }
    
  }
};


third = document.getElementById("futurepl");
fourth = document.getElementById("futu");
function future(){
    console.log("one call");

  var y = window.scrollY;
  
  if (isInViewport(third)) {

    fourth.className = "educationshow"
  } else {
      if(fourth.className!="educationshow"){
         fourth.className = "educationhide"
      }
    
  }
};



document.addEventListener("scroll", myScrollFunc);
document.addEventListener("scroll", pro);
document.addEventListener("scroll", future);


