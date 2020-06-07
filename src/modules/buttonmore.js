const buttonmore = () => {
	const addSentenceBtn = document.querySelector('.add-sentence-btn'), //кнопка
		sentence = document.querySelector('.sentence'), // вся секция
		hiddenAll = sentence.querySelectorAll('.hidden'),
		visibleSmBlock = sentence.querySelector('.visible-sm-block'),
		popupDiscount = document.querySelector('.popup-discount');
	const visiblBlock = () => {
		hiddenAll[0].classList.remove('hidden');
		hiddenAll[1].classList.remove('hidden');
		visibleSmBlock.classList.remove('visible-sm-block');
	};


	sentence.addEventListener('click', event => {
		const target = event.target;
		const buttomMore = target.closest('.add-sentence-btn');
		const discountBtn = target.closest('.discount-btn');

		if (buttomMore !== null) {
			visiblBlock();
			addSentenceBtn.classList.add('none');
		}
		if (discountBtn !== null) {
			popupDiscount.classList.add('active');
		}

	});

};
export default buttonmore;
