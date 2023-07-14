const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const elementIndex = hiddenElements.indexOf(entry.target);
			appearFunctions[elementIndex]();
		}
	});
});

const hiddenElements: Element[] = [];
const appearFunctions: (() => void)[] = [];

export function observeElement(element: HTMLElement, appear: () => void): void {
	observer.observe(element);
	hiddenElements.push(element);
	appearFunctions.push(appear);
}

const letters = "ABCDEFGHIJKLKLMNOPQRSTUVWXYZ0123456789";

export function hackingAnimation(element: HTMLElement): void {
	const initialText = element.innerText;
	let iterations = 0;

	const interval = setInterval(() => {
		element.innerText = element.innerText
			.split("")
			.map((_, index) => {
				if (index < iterations) {
					return initialText[index];
				}

				return letters[Math.floor(Math.random() * 36)];
			})
			.join("");

		if (iterations >= initialText.length) {
			clearInterval(interval);
		}

		iterations += 1 / 2;
	}, 30);
}
