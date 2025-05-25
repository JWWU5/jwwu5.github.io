import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Horizontal scroll animation
gsap.to(".timeline-container", {
  x: () => -($(".timeline-container").width() - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".education-timeline",
    start: "top top",
    end: "+=500%", // Adjust based on content length
    scrub: 1, // Smooth scrubbing
    pin: true, // Pin the container while scrolling
  }
});