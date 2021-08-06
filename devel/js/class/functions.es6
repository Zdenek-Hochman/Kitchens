export class Functions {
	static Elements(selector) {
		return document.querySelectorAll(selector);
	}

	static On(event, selector, callback) {
		const elements = this.#ControlObject(selector);

		if (typeof callback === 'function') {
			elements.forEach((item) => {
				item.addEventListener(event, callback);
			});
		}
	}

	static RemoveClass(selector, []) {
		const elements = this.#ControlObject(selector);

		elements.forEach((item) => {
			arguments[1].forEach((value) => {
				item.classList.remove(value);
			});
		})
	}

	static AddClass(selector, []) {
		const elements = this.#ControlObject(selector);

		elements.forEach((item) => {
			arguments[1].forEach((value) => {
				item.classList.add(value);
			});
		})
	}

	static #ControlObject(selector) {
		let elements = Object();

		if (NodeList.prototype.isPrototypeOf(selector) || HTMLCollection.prototype.isPrototypeOf(selector)) {
			elements = selector
		} else if (selector instanceof HTMLElement) {
			elements = [selector];
		} else {
			elements = this.Elements(selector);
		}

		return elements;
	}

	static SetStyles(Element, Styles) {
		Object.assign(Element.style, Styles);

		return Element;
	}
}
