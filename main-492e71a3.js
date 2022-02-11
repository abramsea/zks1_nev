const expandingTexts = document.querySelectorAll('section.expanding-text');

if (expandingTexts.length)
{
	expandingTexts.forEach((section) => {
		const items = section.querySelectorAll('.expanding-text__item');

		items.forEach(item => {

			const head = item.querySelector('.expanding-text__head');
			const infoWrapper = item.querySelector('.expanding-text__info-wrapper');
			
			head.addEventListener('click', () => {
				const infoHeight = item.querySelector('.expanding-text__info').offsetHeight;

				if ( item.classList.contains('expand'))
				{
					item.classList.remove('expand');
					infoWrapper.style.height = `${infoHeight}px`;
					setTimeout(() => {
						infoWrapper.style.height = 0;
					}, 100);
				}
				else
				{
					item.classList.add('expand');
					infoWrapper.style.height = `${infoHeight}px`;
					setTimeout(() => {
						infoWrapper.style.height = 'auto';
					}, 200);
				}
			});
		});
	});
}
const header = document.querySelector('header');
const HEADER_HEIGHT = 153;
const btn = document.querySelector('.header-mobile__burger');
const menu = document.querySelector('.header__wrapper');

window.addEventListener('scroll', () => {
	if ( document.documentElement.clientWidth >= 955 && window.scrollY > HEADER_HEIGHT + 100 )
	{
		header.classList.add('collapsed');
	}
	else
	{
		header.classList.remove('collapsed');
	}
});

btn.addEventListener('click', () => {
	if (btn.classList.contains('active'))
	{
		btn.classList.remove('active');
		menu.classList.remove('visible');
	}
	else
	{
		btn.classList.add('active');
		menu.classList.add('visible');
	}
});
