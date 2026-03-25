

let tl = gsap.timeline();

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    // delay:1
})
tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.2
})
tl.from("h1",{
    y:20,
    opacity:0,
    scale:0.8,
    duration:1
})











// let tl = gsap.timeline()


// tl.to("#box1",{
//     x:2000,
//     duration:1,
//     stagger:1,
//     rotate:120,
// })





// gsap.from("h1",{
//     y:30,
//     opacity:0,
//     duration:1,
//     delay:1,
//     stagger:-0.3,
//     repeat:-1,
//     yoyo:true
// })




gsap.to("#box1",{
    x:1400,
    duration:1,
    delay:2,
    rotate:180,
    backgroundColor:"orangee",
    borderRadius:"10%",
    scale:1
}) 
gsap.to("#box1",{
    y:500,
    duration:1,
    delay:3,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"20%",
    scale:0.8
}) 
gsap.to("#box1",{
    x:0,
    duration:1,
    delay:4,
    rotate:180,
    backgroundColor:"yellow",
    borderRadius:"35%",
    scale:0.6
}) 
gsap.to("#box1",{
    y:0,
    duration:1,
    delay:5,
    rotate:0,
    backgroundColor:"white",
    borderRadius:"50%",
    scale:0.4
}) 