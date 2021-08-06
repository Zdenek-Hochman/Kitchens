import { Functions as F } from "./functions";

export class Tilt {
	#element;

	constructor(selector) {
		this.#element = F.Elements(selector);

		this.#TiltInit(this.#element);
	}

	#TiltInit(element) {
		F.On("mouseenter", element, (event) => {
			const tiltImg = event.currentTarget;

			F.On("mousemove", tiltImg, (event) => {
				const thisImg = event.currentTarget;

				const Rotate = {
					x: -((thisImg.getBoundingClientRect().width / 2) - event.offsetX) * 30 / window.innerWidth,
					y: ((thisImg.getBoundingClientRect().height / 2) - event.offsetY) * 30 / window.innerHeight
				}

				F.SetStyles(thisImg, {
					"-webkit-transform": `rotateX(${Rotate.y}deg) rotateY(${Rotate.x}deg)`,
					"-ms-transform": `rotateX(${Rotate.y}deg) rotateY(${Rotate.x}deg)`,
					"-moz-transform": `rotateX(${Rotate.y}deg) rotateY(${Rotate.x}deg)`,
					"-o-transform": `rotateX(${Rotate.y}deg) rotateY(${Rotate.x}deg)`,
					"transform": `rotateX(${Rotate.y}deg) rotateY(${Rotate.x}deg)`
				});
			});

			F.On("mouseleave", tiltImg, (event) => {
				const thisImg = event.currentTarget;

				setTimeout(() => {
					F.SetStyles(thisImg, {
						"-webkit-transform": `rotateX(0deg) rotateY(0deg)`,
						"-ms-transform": `rotateX(0deg) rotateY(0deg)`,
						"-moz-transform": `rotateX(0deg) rotateY(0deg)`,
						"-o-transform": `rotateX(0deg) rotateY(0deg)`,
						"transform": `rotateX(0deg) rotateY(0deg)`
					});
				}, 300);
			})
		})
	}
}
