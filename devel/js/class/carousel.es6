import { Functions as F } from "./functions";
import { Const as C } from "./const";

export class Carousel {

	constructor(className) {
		this.className = className;
		this.items = F.Elements(className);
		this.totalItems = this.items.length;

		this.#SetEventListeners();

	}

	SetInitialClasses() {
		// this.items.firstChild.classList.add("");
		// this.items.lastChild.classList.add("next");
	}

	#SetEventListeners() {
		const Int = this;

		F.On("click", ".arrow--next", (event) => {
			Int.#MoveCarouselTo(0);
			// console.log(true);
		})

		F.On("click", ".arrow--prev", (event) => {
			// console.log(true);
		})
	}

	#DisableInteraction() {
		C.MOVING = true;

		setTimeout(() => {
			C.MOVING = false
		}, 500);
	}

	#MoveCarouselTo(slide) {
		if (!C.MOVING) {
			this.#DisableInteraction();

			let nextSlide = slide + 1;
			let prevSlide = slide - 1;

			if (prevSlide <= 0) {
				prevSlide = (this.totalItems - 1);
			} else if (nextSlide >= (this.totalItems - 1)) {
				nextSlide = 0;
			}

			F.RemoveClass(this.items, ["prev", "next", "active"])
			F.RemoveClass(this.items, ["prev", "next", "active"])

			F.AddClass(this.items[prevSlide], ["prev"]);
			F.AddClass(this.items[slide], ["prev"]);
			F.AddClass(this.items[nextSlide], ["prev"]);

			// if (slide === 0) {
			//           newPrevious = (totalItems - 1);
			//           oldPrevious = (totalItems - 2);
			//           oldNext = (slide + 1);
			//         } else if (slide === (totalItems -1)) {
			//           newPrevious = (slide - 1);
			//           newNext = 0;
			//           oldNext = 1;
			//         }
			//



		}
	}
	//         // Based on the current slide, reset to default classes.
	//       }
	//     }
	//   }
}

//     next.addEventListener('click', moveNext);
//     prev.addEventListener('click', movePrev);
//
//
//
//   // Next navigation handler
//   function moveNext() {
//
//     // Check if moving
//     if (!moving) {
//
//       // If it's the last slide, reset to 0, else +1
//       if (slide === (totalItems - 1)) {
//         slide = 0;
//       } else {
//         slide++;
//       }
//
//       // Move carousel to updated slide
//       moveCarouselTo(slide);
//     }
//   }
//
//   // Previous navigation handler
//   function movePrev() {
//
//     // Check if moving
//     if (!moving) {
//
//       // If it's the first slide, set as the last slide, else -1
//       if (slide === 0) {
//         slide = (totalItems - 1);
//       } else {
//         slide--;
//       }
//
//       // Move carousel to updated slide
//       moveCarouselTo(slide);
//     }
//   }
//
//   // Initialise carousel
//   function initCarousel() {
//     setInitialClasses();
//     setEventListeners();
//
//     // Set moving to false now that the carousel is ready
//     moving = false;
//   }
//
//   // make it rain
//   initCarousel();
//
// }(document));
