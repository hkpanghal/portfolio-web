function smoothScroll(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

// smoothScroll()
function navBar(){
    let aNavList = document.querySelectorAll("#navbar a");
    let bLine    = document.querySelectorAll(".bline")
    aNavList.forEach(function(elem){

       
        elem.addEventListener("mouseenter",function(){
            let t = gsap.timeline()
            t.to(elem.childNodes[1],{
                x:"100%",
                duration:0.2,
            })  
            t.from(elem.childNodes[1],{
                x:"-100%",
                duration:0.2,
            })  
        })
       
    })
}

navBar()

function p1Time(){
    const d = new Date();
    console.log(Math.floor(12/12))
    document.querySelector("#local-time").innerHTML = `MY LOCAL  TIME ${d.getHours()}: ${d.getMinutes()} ${"<br>"} GMT (+${d.getHours()%12}:${d.getMinutes()} ${Math.floor(d.getHours()/12 )> 0 ? 'pm' :'am'})`
}

p1Time()
function p2CardAnim(){
    gsap.from(".cards",{
        rotate:-25,
        duration:0.5,
        scrollTrigger:{
            scroller:" body #main",
            trigger:".cards",
            scrub:1,

        }
    })
}
p2CardAnim()

function p2AboutAnim(){
    gsap.from("#page2 #about-section ",{
        x:"-100%",
        // duration:1,
        delay:-1,
        ease:Expo.in,
        scrollTrigger:{
            scroller:"body #main",
            trigger:"#page2 #about-section",
            // markers:true,
            // start:"top 70%",
            end:"top 40%",
            scrub:3,
    
        }
        
    })

}

p2AboutAnim()

function p3TextAnim(){

    gsap.from("#page3 #dupper p",{
         y:"100%",
        ease:Expo.In,
        duration:0.5,
        opacity:0,
        scrollTrigger:{
            scroller:"body #main",
            trigger:"#page3 #dupper p, #page3 #dlower h1 ",
            // markers:true,
            start:"top 70%",
            end:"top 40%",
    
        }
    })
    gsap.from(" #page3 #dlower h1 ",{
         y:"100%",
        ease:Expo.In,
        duration:0.5,
        opacity:0,
        scrollTrigger:{
            scroller:"body #main",
            trigger:" #page3 #dlower h1 ",
            // markers:true,
            start:"top 105%",
            // end:"top 40%",
    
        }
    })
}

p3TextAnim()
function dynamicCrsrPosition(){

    document.querySelector("#main").addEventListener("mousemove",function(dets){
        gsap.to("#dynamic-crsr",{
            x:dets.clientX,
            y:dets.clientY,
            duration:0.5,
    
        })
    })
}
dynamicCrsrPosition();


function DynamicCrsr(){
    let dcimg = document.querySelector("#dcimg")

    
    document.querySelectorAll(".dmove").forEach(function(elem){
        
        elem.addEventListener("mouseenter",function(){

            dcimg.setAttribute("src",elem.children[0].getAttribute("src"))
            gsap.to("#dynamic-crsr",{
                display:"block",
                opacity:1,
                
            })

            gsap.to("#main",{
                backgroundColor:elem.getAttribute("data"),
                duration:1,
            })
        })
        elem.addEventListener("mouseleave",function(){

            gsap.to("#dynamic-crsr",{
                display:"none",
                opacity:0
            })

            gsap.to("#main",{
                backgroundColor:"#dadada5f",
                duration:1,
            })
        })
       
    })

   
}
DynamicCrsr()

function CommonPartAnim(){


    document.querySelectorAll(".dmove").forEach(function(elem){
        
    
        elem.addEventListener("mouseenter",function(){

            gsap.to( `#${elem.getAttribute("id")} .commonpart .upper p`,{
        
                opacity:1,
                duration:1,
                stagger:0.25,
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to( `#${elem.getAttribute("id")} .commonpart .upper p`,{
        
                opacity:0,
                duration:1,
                stagger:0.25,
                
            })
        })
        
    })
    
}
CommonPartAnim()


function buttonAnim(){

    document.querySelectorAll(".button").forEach(function(elem){


        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[0],{
                width:"100%",
                opacity:1,
                duration:0.5,
            })
        })
        elem.addEventListener("mouseleave",function(){
           
            t = gsap.timeline()
            t.to(elem.childNodes[0],{
                opacity:0,
                duration:0.2,
            })
            t.to(elem.childNodes[0],{
                width:"0%",
            })
           
        })
    })
   
}
buttonAnim()


function p7ListAnim(){

    

    document.querySelectorAll("#p7-list li").forEach(function(elem){

        elem.addEventListener("mouseenter",function(){
            let t = gsap.timeline()
            t.to(elem.children[1],{
                width:"0%",
                duration:0.2,
            })  
            t.from(elem.children[1],{
                width:"100%",
                duration:0.2,
            }) 
            
            gsap.to(elem.children[0].children,{
                opacity:1
            })
        })


        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.children[0].children,{
                opacity:0
            })
        })

    })
  
}
p7ListAnim()


function fadeMe(){
    document.querySelectorAll(".fade-me").forEach(function(elem){
       gsap.to(elem,{
        color:"#dadada",
        duration:1,
        stagger:0.25,
        scrollTrigger:{
            scroller:"#main",
            trigger:elem,
            scrub:3,
    
        }
       })
    })
}
// fadeMe()

