// const valida = () => {
// 	const nameUser = document.querySelectorAll('input[name="user_name"]'), //'.user_name'
// 		qwestion = document.querySelector('input[name="user_quest"]');
// 	const fourcoaps = document.querySelector('#collapseFour');
// 	let inputLength = fourcoaps.querySelector('input');
//     if (nameUser.hasAttribute('required')) {
//         nameUser.removeAttribute('required');
//     }
// 	nameUser.forEach(item => {

// 		item.addEventListener('input', () => {

// 			item.value = item.value.replace(/([^А-Яа-яЁё])*/g, '');
// 			const captureformbtn = document.querySelectorAll('.capture-form-btn');
// 			if (item.value === '') {
// 				captureformbtn.setAttribute('disabled', true);
// 			} else {
// 				captureformbtn.removeAttribute('disabled');
// 			}

// 		});
// 	});

// 	qwestion.addEventListener('input', () => {
// 		qwestion.value = qwestion.value.replace(/([^А-Яа-яЁё.,\-'"!\s])*/g, '');

// 	});
// 	inputLength.addEventListener('input', () => {
// 		inputLength.value = inputLength.value.replace(/\D/g, '').substr(0, 3);

// 	});

// };
// export default maskphone;
