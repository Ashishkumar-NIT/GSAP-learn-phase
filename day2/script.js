gsap.from("#page1 #box",{
    opacity:0,
    duration:2,
    // x:500,
    rotate:720,
    // delay:1,
    scrollTrigger:{
        trigger:"#page1 #box",
        scroller:"body",
        markers:true,
        start:"top 30%",
        end:"top 1%",
        scrub:3,
        pin:true
    }
})


// gsap.from("#page2 h1",{
//         opacity:0,
//         scale:0.2,
//         duration:1,
//         rotate:480,
//         x:100,
//         scrollTrigger:{
//             trigger:"#page2 h1",
//             scroller:"body",
//             markers:true,
//             start:"top 40%"
//         }

// })

// gsap.from("#page2 h2",{
//         opacity:0,
//         scale:0.2,
//         duration:1,
//         rotate:480,
//         x:100,
//         scrollTrigger:{
//             trigger:"#page2 h2",
//             scroller:"body",
//             markers:true,
//             start:"top 40%"
//         }

// })
// gsap.from("#page3 #box",{
//     opacity:0,
//     duration:2,
//     x:500,
//     // delay:1,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 100%"
//     }
// })


// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page1 box",
//         scroller:"body",
//         markers:true
//     }
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })

// gsap.from("#page3 #box",{
//     scale:0,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page3 box",
//         scroller:"body",
//         markers:true
//     }
// })