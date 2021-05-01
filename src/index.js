const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const bodyOverlay = document.querySelector('.body-overlay');
const buttons = document.querySelectorAll('main button');
const backProject = document.querySelector('.back-project');
const main = document.querySelector('main');
const body = document.querySelector('body');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const projectInfo = document.querySelector('.project-info');
const projectDetails = document.querySelector('.project-details');
const backThisProjectButton = document.querySelector('.project-info-buttons button');
const rewardButtons = document.querySelectorAll('.about-project button');
const aboutProject = document.querySelector('.about-project');

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

aboutProject.addEventListener('click', e => {
	if (e.target.nodeName == 'BUTTON') {
		if (backProject.style.opacity == 0) {
			nav.style.zIndex = '0';
			backProject.style.transform = 'scale(1)';
			backProject.style.opacity = '1';
			bodyOverlay.style.opacity = '1';
		}
	}
});

backThisProjectButton.addEventListener('click', e => {
	if (backProject.style.opacity == 0) {
		nav.style.zIndex = '0';
		backProject.style.transform = 'scale(1)';
		backProject.style.opacity = '1';
		bodyOverlay.style.opacity = '1';
	}
});
main.addEventListener('click', e => {
	if (
		e.target !== backThisProjectButton &&
		e.target !== rewardButtons &&
		e.target.nodeName !== 'BUTTON'
	) {
		nav.style.zIndex = '2';
		backProject.style.transform = 'scale(0)';
		backProject.style.opacity = '0';
		bodyOverlay.style.opacity = '0';
	}
});
