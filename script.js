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