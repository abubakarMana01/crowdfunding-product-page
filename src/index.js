const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const bodyOverlay = document.querySelector('.body-overlay');

const showMobileMenu = () => {
	if (mobileMenu.style.transform === 'scale(1)') {
		mobileMenu.style.transform = 'scale(0)';
		bodyOverlay.style.opacity = '0';
		close.style.display = 'none';
		hamburger.style.display = 'block';
	} else {
		mobileMenu.style.transform = 'scale(1)';
		bodyOverlay.style.opacity = '1';
		hamburger.style.display = 'none';
		close.style.display = 'block';
	}
};

hamburger.addEventListener('click', showMobileMenu);
close.addEventListener('click', showMobileMenu);
