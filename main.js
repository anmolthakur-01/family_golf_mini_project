let crsr = document.querySelector("#cursor");
let crbl = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px";
    crsr.style.top= dets.y+"px";
    crbl.style.left= dets.x-100+"px";
    crbl.style.top= dets.y-100+"px";
});

gsap.to("#nav",{
    backgroundColor:"#000",
    duration: 0.5,
    height: "70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scoller: "body",
        start: "top -50%",
        end: "top -100%",
        scrub: 2
    }
})