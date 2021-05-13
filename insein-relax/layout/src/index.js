'use strict';

import addAnimateCSS from './modules/addAnimateCSS';
import toggleMenu from './modules/toggleMenu';
import togglePhone from './modules/togglePhone';
import addSmoothScroll from './modules/addSmoothScroll';
import togglePopups from './modules/togglePopups';
import phoneHandler from './modules/phoneHandler';
import sendForms from './modules/sendForms';
import tooltipHandler from './modules/tooltipHandler';
import repairsTypes from './modules/repairsTypes';
import portfolioSlider from './modules/portfolioSlider';
import documents from './modules/documents';
import testimonials from './modules/testimonials';
import faq from './modules/faq';

addAnimateCSS();
togglePhone();
toggleMenu();
addSmoothScroll();
togglePopups();
phoneHandler();
sendForms();
tooltipHandler();
repairsTypes();
portfolioSlider();
documents();
testimonials();
faq();

