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
const radios = document.querySelectorAll('input[name="pledge"]');
const pledges = document.querySelectorAll('.pledge');
const support = document.querySelector('.support');
const submitPledgeButtons = document.querySelectorAll('.pledge button');
const gotItButton = document.querySelector('.support button');

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

const showBackProjectOverlay = () => {
	nav.style.zIndex = '0';
	backProject.style.transform = 'scale(1)';
	backProject.style.opacity = '1';
	bodyOverlay.style.opacity = '1';
};

const hideBackProjectOverlay = () => {
	nav.style.zIndex = '2';
	backProject.style.transform = 'scale(0)';
	backProject.style.opacity = '0';
	bodyOverlay.style.opacity = '0';
};

const hideSupportOverlay = () => {
	support.style.opacity = 0;
	support.style.transform = 'scale(0)';
};

hamburger.addEventListener('click', showMobileMenu);
close.addEventListener('click', showMobileMenu);

aboutProject.addEventListener('click', e => {
	if (e.target.nodeName == 'BUTTON') {
		if (backProject.style.opacity == 0) showBackProjectOverlay();
	}
});

backThisProjectButton.addEventListener('click', e => {
	if (backProject.style.opacity == 0) showBackProjectOverlay();
});

main.addEventListener('click', e => {
	if (
		e.target !== backThisProjectButton &&
		e.target !== rewardButtons &&
		e.target.nodeName !== 'BUTTON'
	)
		hideBackProjectOverlay();
	hideSupportOverlay();
});

radios.forEach(radio => {
	radio.addEventListener('change', e => {
		e.target.parentElement.parentElement.parentElement.parentElement.childNodes.forEach(
			child => {
				if (child.className == 'card' || child.className == 'card active') {
					if (child.className == 'card active') {
						child.childNodes.forEach(gChild => {
							if (gChild.className == 'pledge') {
								gChild.style.display = 'none';
							}
						});
					}
				}
			}
		);
		if (e.target.id === radio.id) {
			if (radio.checked) {
				e.target.parentElement.parentElement.parentElement.parentElement.childNodes.forEach(
					node => {
						if (node.className) {
							node.classList.remove('active');
						}
					}
				);
			}
			e.target.parentElement.parentElement.parentElement.classList.add('active');

			e.target.parentElement.parentElement.parentElement.childNodes.forEach(node => {
				if (node.className == 'pledge') {
					node.style.display = 'block';
				}
			});
		}
	});
});

submitPledgeButtons.forEach(button => {
	button.addEventListener('click', e => {
		e.preventDefault();
		hideBackProjectOverlay();
		support.style.opacity = 1;
		support.style.transform = 'scale(1)';
	});
});

gotItButton.addEventListener('click', hideSupportOverlay);
