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

function p2CardAnim(){
    gsap.from(".cards",{
        rotate:-25,
        duration:0.5,
        scrollTrigger:{
            scroller:"body",
            trigger:".cards",
            scrub:1,

        }
    })
}
p2CardAnim()


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