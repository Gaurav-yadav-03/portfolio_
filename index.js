function scroller(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}


function revealToSpan(){

document.querySelectorAll(".reveal")
.forEach(function(elem){
    //create two spans
    var parent=document.createElement("span");
    var child=document.createElement("span");
// parent and child set their respectve classes
parent.classList.add("parent");
child.classList.add("child");

// span parents gets child and child gets elem
child.innerHTML=elem.innerHTML;
parent.appendChild(child);

//elem element replaces parent elemnt
elem.innerHTML="";
elem.appendChild(parent);
})
}
function cardShow() {
  var showingImage;
  var workBackground = window.innerWidth < 768 ? "#282828" : "snow"; // Change background color based on screen width
  document.querySelectorAll(".cnt").forEach(function(cnt) {
    cnt.addEventListener("mousemove", function(dets) {
      showingImage = dets.target;
      showingImage.style.filter = "grayscale(1)";
      document.querySelector(".work").style.backgroundColor = dets.target.dataset.color;
    });
    cnt.addEventListener("mouseleave", function(dets) {
      var cursor = document.querySelector(".car");
      showingImage.style.filter= "grayscale(0)";
      document.querySelector(".work").style.backgroundColor = workBackground; // Set background color
    });
  });
}

cardShow();


 var main=document.querySelector(".main");
 var crsr=document.querySelector(".cursor");
 var crsr2=document.querySelector(".cursor-blur");
 main.addEventListener("mousemove",function(tre){
   crsr.style.left=tre.x+"px";
   crsr.style.top=tre.y+"px";
   crsr2.style.left=tre.x-50+"px";
   crsr2.style.top=tre.y-50+"px";

 })
 

function animate(){
  var tl1=gsap.timeline({
  scrollTrigger:{
    trigger:".imaginary .imgcntr",
    scroller:".main",
    markers:true,
    start:"top 100%",
    end:"top 100%",
    scrub:3
}
})
tl1.to(".imgcntr",{
 opacity:1,
 y:10,
 stagger:.5,
},"ti")
tl1.from(".imgleft",{
  opacity:0,
  y:-50,
 },"ti")


var tl2=gsap.timeline({
  scrollTrigger:{
    trigger:".row",
    scroller:".main",
    markers:true,
    start:"top 2%",
    end:"top 10%",
    scrub:3
}
})
tl2.to(".row h1",{
  opacity:0,
  x:-100,
  duration:5,
 },"tp")
 tl2.to("#ow h2",{
  opacity:0,
  x:100,
  duration:5,
 },"tp")
 tl2.to(".home .nav",{
  opacity:0,
  y:-50,
  duration:1,
 })

 .from('.help',{
  delay:1,
  stagger:.1,
  opacity:0,
});
 
}
function loader(){
    var tl=gsap.timeline();

    tl.from(".child span",{
        x:"100%",
        duration:1,
        ease:Power3.easeInOut
     })
    
    .to(".parent .child",{
       y:"-100%",
       duration:1,
       delay:.5,
       ease:Circ.easeInOut
    })

    
    .to(".loader",{
        height:0,
        duration:1,
        ease:Expo.easeInOut
    },"anim")
    
    .to(".green",{
        height:"100%",
        top:0,
        duration:.5,
        ease:Expo.easeInOut
    },"anim")
    .to(".green",{
        height:"0%",
        duration:1,
        delay:.25,
        ease:Expo.easeInOut
    },"anim")
   
}

 

scroller();
revealToSpan();
animate();
loader();
