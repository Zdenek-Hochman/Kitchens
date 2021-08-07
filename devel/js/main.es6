import { Carousel } from "./class/carousel";
import { Tilt } from "./class/tilt";

document.addEventListener("DOMContentLoaded", function () {
	const carouselInit = new Carousel(".carousel-items__item");

	const tiltInit = new Tilt(".figure-image-holder");
});
