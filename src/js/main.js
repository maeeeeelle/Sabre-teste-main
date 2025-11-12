// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const blackHole = document.querySelector("#part-1-blackHole");
// const imgGalaxy = document.querySelector(".part-1-img");

// let isExpanded = false; // Variable pour savoir si le cercle est agrandi

// imgGalaxy.addEventListener("click", () => {
//   // const imgSpace = document.querySelector(".part-1-img");

//   if (!isExpanded) {
//     // Animation d'agrandissement
//     gsap.to(imgGalaxy, {
//       scale: 2,
//       duration: 0.3,
//       borderRadius: 0,
//       ease: "power2.out",
//     });

//     gsap.to(imgGalaxy, {
//       scale: (40, 40),
//       duration: 0.8,
//       ease: "power2.out",
//       onComplete: () => {
//         document.body.style.overflow = "auto";
//         isExpanded = true; // Le cercle est maintenant agrandi
//       },
//     });
//   } else {
//     // Animation inverse (rétrécissement)
//     gsap.to(imgGalaxy, {
//       // width: 50,
//       duration: 0.3,
//       borderRadius: 100,
//       ease: "power2.in",
//     });

//     gsap.to(imgGalaxy, {
//       scale: 1,
//       duration: 0.8,
//       ease: "power2.in",
//       onComplete: () => {
//         document.body.style.overflow = "hidden"; // Optionnel
//         isExpanded = false; // Le cercle est maintenant petit
//       },
//     });
//   }
// });

// const part2Timline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".container-part-2",
//     scrub: true,
//     // pin: ".container-part-2",
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//   },
// });

// part2Timline.to("#cloud-1", { opacity: 1, x: 800 });
// part2Timline.to("#cloud-2", { opacity: 0.5, x: -280 });
// part2Timline.to("#cloud-3", { opacity: 0.7, x: 100 }); // const part3Timline = gsap.timeline({
// //   scrollTrigger: {
// //     trigger: ".part-3-cave",
// //     start: "top top",
// //     scrub: true,
// //     pin: ".part-3-parallax",
// //     pinSpacing: true,
// //     markers: true,
// //   },
// // });

// //

// part3Timline.to("#case-1", { opacity: 1 });
// part3Timline.to("#case-2", { opacity: 1 });

// /////
// //
// part3Timline.to("#lightning", { opacity: 1 });
// ///
// //
// //
// //
// // HORIZONTAL
// // gsap.to(".slider-track", {
// //   scrollTrigger: {
// //     trigger: ".horizontal-mask",
// //     start: "top top",
// //     end: "+800%",
// //     pin: true,
// //     scrub: true,
// //     markers: true, //false pour retiré le text qui intique end scrolling
// //   },
// //   x: "-75%",
// //   ease: "sine.inOut",
// // });
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".slider-track", {
//   x: "-300%", // Ajuste selon la longueur de ton image
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".horizontal-mask",
//     start: "top top",
//     end: "+=400%", // Ajuste pour plus ou moins de scroll
//     pin: true,
//     scrub: true,
//     markers: true,
//   },
// });
// // Animation horizontale
// /////
// //
// ///
// //
// //
// //

// // Animation du flocon de neige avec mouvement zigzag
// gsap.to(".part-5-snowflake", {
//   scrollTrigger: {
//     trigger: ".part-5-snow",
//     start: "top top",
//     end: "bottom bottom",
//     pin: true,
//     scrub: true,
//     markers: true, // false pour retirer le texte qui indique end scrolling
//   },
//   y: "220vh", // Descend jusqu'en bas
//   x: "+=100vw", // Mouvement horizontal pour créer le zigzag
//   ease: "sine.inOut",
//   motionPath: {
//     path: [
//       { x: 0, y: 0 },
//       { x: 100, y: "25vh" },
//       { x: -50, y: "50vh" },
//       { x: 120, y: "75vh" },
//       { x: -80, y: "100vh" },
//       { x: 90, y: "125vh" },
//       { x: -40, y: "150vh" },
//       { x: 60, y: "175vh" },
//       { x: 0, y: "200vh" },
//     ],
//     curviness: 1.5,
//   },
// });

// const parallax = gsap.parallax({
//   scrollTrigger: {
//     trigger: ".part-3-parallax",
//     start: "top top",
//     end: "+300%",
//     scrub: true,
//     pin: true,
//     markers: true,
//   },
// });
// parallax.to("#case-1", {
//   y: -100,
// });
// parallax.to(
//   "#case-2",
//   {
//     y: -400,
//   },
//   0
// );

// // document.body.style.overflow = "hidden";

// // blackHole.addEventListener("click", () => {
// //   const img = blackHole.querySelector("img");

// //   // Réduire le zoom de l'image pendant l'agrandissement du cercle
// //   gsap.to(img, {
// //     scale: 1, // Revient à la taille normale
// //     duration: 0.3,
// //     x: 20,
// //     y: 10,
// //     ease: "power2.out",
// //   });

// //   gsap.to(blackHole, {
// //     scale: 45,
// //     duration: 0.8,
// //     ease: "power2.out",
// //     onComplete: () => {
// //       document.body.style.overflow = "auto";
// //     },
// //   });
// // });
