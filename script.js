// Shery.mouseFollower();
// Shery.makeMagnet(".magnet");


// Shery.hoverWithMediaCircle(".hover", {images: ["https://cdn.prod.website-files.com/6530f0423a815673c177472f/65b02cc301f229f77d4f38eb_Rectangle%20354.png", "https://cdn.prod.website-files.com/6530f0423a815673c177472f/65b02ceff5619c8b2f19a2bf_Rectangle%20356.png","https://cdn.prod.website-files.com/6530f0423a815673c177472f/65cc92c52f54e9dbba2a76cf_AdobeStock_51744816.jpeg"]});


gsap.to(".cards", {
    scrollTrigger: {
        trigger: ".page-1",
        pin: true,
        start:"top top",
        end:"bottom bottom",
        endTrigger: ".end",
        scrub:1,
    },
    y:"-380%",
    duration: 3,
})


