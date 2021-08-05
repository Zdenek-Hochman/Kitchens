import { Functions as F } from "./functions";
import { Const as C } from "./const";

export class Carousel {

	constructor(className) {
		this.className = className;
		this.items = F.Elements(className);
		this.totalItems = this.items.length;

		this.#SetEventListeners();
	}

	#SetEventListeners() {
		const Int = this;

		F.On("click", ".arrow--next", (event) => {
			if (!C.MOVING) {
				C.SLIDE = (C.SLIDE === (Int.totalItems - 1)) ? 0 : C.SLIDE + 1;

				Int.#MoveCarouselTo(C.SLIDE);
			}
		})

		F.On("click", ".arrow--prev", (event) => {
			if (!C.MOVING) {
				C.SLIDE = (C.SLIDE === 0) ? (this.totalItems - 1) : C.SLIDE = C.SLIDE - 1;

				Int.#MoveCarouselTo(C.SLIDE);
			}
		})
	}

	#DisableInteraction() {
		C.MOVING = true;

		setTimeout(() => {
			C.MOVING = false
		}, 500);
	}

	#MoveCarouselTo(actualSlide) {
		if (!C.MOVING) {
			this.#DisableInteraction();

			let nextSlide = actualSlide + 1;
			let prevSlide = actualSlide - 1;

			(prevSlide < 0) ? (prevSlide = (this.totalItems)) : (nextSlide > (this.totalItems - 1)) ? nextSlide = 0: null;

			F.RemoveClass(this.items, [
                "carousel-items__item--prev",
                "carousel-items__item--next",
                "carousel-items__item--active"
            ]);

			F.AddClass(this.items[prevSlide], ["carousel-items__item--prev"]);
			F.AddClass(this.items[actualSlide], ["carousel-items__item--active"]);
			F.AddClass(this.items[nextSlide], ["carousel-items__item--next"]);
		}
	}
}
