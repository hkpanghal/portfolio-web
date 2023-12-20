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

function p4DynamicCrsr(){
    let dcimg = document.querySelector("#dcimg")
    document.querySelectorAll(".dmove").forEach(function(elem){
        
        elem.addEventListener("mouseenter",function(){

            dcimg.setAttribute("src",elem.children[0].getAttribute("src"))
            gsap.to("#dynamic-crsr",{
                display:"block",
                opacity:1,
                
            })

            gsap.to("#page4",{
                backgroundColor:elem.getAttribute("data"),
                duration:1,
            })
        })
        elem.addEventListener("mouseleave",function(){

            gsap.to("#dynamic-crsr",{
                display:"none",
                opacity:0
            })

            gsap.to("#page4",{
                backgroundColor:"#dadada5f",
            })
        })
        elem.addEventListener("mousemove",function(dets){
       

            
             gsap.to("#dynamic-crsr",{
                 x:dets.clientX,
                 y:dets.clientY,
                 duration:0.5,
     
             })
         })
    })

   
}
p4DynamicCrsr()