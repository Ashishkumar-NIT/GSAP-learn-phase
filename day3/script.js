var initialPath = `M 10 100 Q 250 100 490 100`;
var finalPath = `M 10 100 Q 250 100 490 100`;

var string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.1
    })
})

string.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(2,0.5"
    })
})

// string.addEventListener("mouseenter", function(){
//     console.log("entered");
// })

// string.addEventListener("mouseleave", function(){
//     console.log("leaved");
// })