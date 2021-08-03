export class Functions {
	static Elements(selector) {
		return document.querySelectorAll(selector);
	}

	static On(event, selector, callback) {
		const Int = this;

		if (typeof callback === 'function') {
			Int.Elements(selector).forEach((item) => {
				item.addEventListener(event, callback);
			});
		}
	}

	static RemoveClass(selector, []) {
		let elements = Object();

		if (NodeList.prototype.isPrototypeOf(selector) || HTMLCollection.prototype.isPrototypeOf(selector)) {
			elements = selector
		} else {
			elements = this.Elements(selector);
		}

		elements.forEach((item) => {
			arguments[1].forEach((value) => {
				item.classList.remove(value);
			});
		})
	}

	static AddClass(selector, []) {
		let elements = Object();

		if (NodeList.prototype.isPrototypeOf(selector) || HTMLCollection.prototype.isPrototypeOf(selector)) {
			elements = selector
		} else {
			elements = this.Elements(selector);
		}

		elements.forEach((item) => {
			arguments[1].forEach((value) => {
				item.classList.add(value);
			});
		})
	}
}
