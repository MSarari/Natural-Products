
document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".hero", { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

	gsap.fromTo(
		".about-us",
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
	);

	gsap.fromTo(
		".contact-us",
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.2 }
	);

    // Fade-in for individual cards
    gsap.fromTo(
        ".category-cards", 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)", stagger: 0.3, delay: 0.8 }
    );

    document.querySelectorAll(".card img").forEach((img) => {
        img.addEventListener("mouseover", () => {
            gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power1.out" });
        });
        img.addEventListener("mouseout", () => {
            gsap.to(img, { scale: 1, duration: 0.3, ease: "power1.out" });
        });
    });
});
