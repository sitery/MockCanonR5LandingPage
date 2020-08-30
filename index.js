// gsap animation timeline

$(document).ready(function () {
  var timeline = gsap.timeline();

  timeline.from(".r5mainimage", {
    duration: 1.5,
    opacity: 0,
    scale: 0.3,
    ease: "back",
  });
  timeline.to(".eosheadertext", {
    duration: 1,
    x: 80,
    ease: "elastic",
    stagger: 0.25,
  });
  timeline.to(".preorder", {
    duration: 1,
    x: -50,
    ease: "elastic",
    stagger: 0.25,
  });
  timeline.from(".eightk", {
    duration: 1,
    opacity: 0,
    scale: 0.3,
    ease: "back",
  });
  timeline.from(".onehundredaf", {
    duration: 1,
    opacity: 0,
    scale: 0.3,
    ease: "back",
  });
  timeline.from(".nocrop", {
    duration: 1,
    opacity: 0,
    scale: 0.3,
    ease: "back",
  });
  timeline.from(".humananimalaf", {
    duration: 1,
    opacity: 0,
    scale: 0.3,
    ease: "back",
  });

  //   mouseover anchor animation

  $("a").mouseover(function (e) {
    gsap.to($(this), 0.2, { css: { scale: 1.1 }, repeat: 3, yoyo: true });
  });
});
