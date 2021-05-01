const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const bodyOverlay = document.querySelector('.body-overlay');
const buttons = document.querySelectorAll('main button');
const backProject = document.querySelector('.back-project');
const nav = document.querySelector('nav');
const mainDivs = document.querySelectorAll('main > *');
const main = document.querySelector('main');
const body = document.querySelector('body');
const header = document.querySelector('header');
const profileInfo = document.querySelector('.profile-info');
const profileDetails = document.querySelector('.profile-details');

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

document.addEventListener('click', e => {
	buttons.forEach(button => {
		if (e.target === button) {
			if (backProject.style.opacity == 0) {
				nav.style.zIndex = '0';
				backProject.style.transform = 'scale(1)';
				backProject.style.opacity = '1';
				bodyOverlay.style.opacity = '1';
				body.style.overflow = 'hidden';
			}
		}
	});
});

document.addEventListener('click', e => {
	if (e.target === main || e.target === header || e.target === nav) {
		nav.style.zIndex = '2';
		backProject.style.transform = 'scale(0)';
		backProject.style.opacity = '0';
		bodyOverlay.style.opacity = '0';
		body.style.overflow = 'visible';
	}
});
