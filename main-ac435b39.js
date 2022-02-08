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
