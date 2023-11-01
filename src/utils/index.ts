export function fileToDataURL(file: File, callback: Function) {
	const reader = new FileReader();
	reader.onload = (event) => {
		if (event && event.target) {
			callback(event.target.result as string);
		} else {
			console.error("Failed to read file as data URL.");
		}
	};
	reader.readAsDataURL(file);
}
