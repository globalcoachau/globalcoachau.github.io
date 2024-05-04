;(function () {
	'use strict'

	const whatsappNumber = '+61410116357';
	let form = document.getElementById('submit-quote-request-form');

	form.addEventListener('submit', function (event) {
		event.preventDefault()
		let formDataArr = [...form]

		let formData = ''

		formDataArr.forEach((f) => {
			if (f.id) {
				let labelName = document?.querySelector(
					'label[for=' + f.id + ']',
				)?.innerHTML
				let regexTag = /<[^>]*>/g
				labelName = labelName?.replace(regexTag, '')
				labelName = labelName?.replace('*', '')
				labelName = labelName?.trim()
				formData += `${labelName}:\n${f?.value}\n\n`
			}
		})

		let formDataFinal = encodeURIComponent(formData);

		const waUrl = `https://wa.me/${whatsappNumber}?text=${formDataFinal}`;
		window.open(waUrl);
	})
})()
