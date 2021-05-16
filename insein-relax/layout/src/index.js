'use strict';

import timeoutedDisplayBlock from './modules/timeoutedDisplayBlock';
import removeRequiredAttr from './modules/removeRequiredAttr';
import toggleMenu from './modules/toggleMenu';
import togglePhone from './modules/togglePhone';
import fillRepairsSlider from './modules/fillRepairsSlider';
import addSmoothScroll from './modules/addSmoothScroll';
import popupRepairsSlider from './modules/popupRepairsSlider';
import togglePopups from './modules/togglePopups';
import phoneHandler from './modules/phoneHandler';
import sendForms from './modules/sendForms';
import tooltipHandler from './modules/tooltipHandler';
import repairsTypes from './modules/repairsTypes';
import portfolioSlider from './modules/portfolioSlider';
import documents from './modules/documents';
import testimonials from './modules/testimonials';
import accordion from './modules/accordion';


removeRequiredAttr();
timeoutedDisplayBlock();
fillRepairsSlider();
togglePhone();
toggleMenu();
addSmoothScroll();
popupRepairsSlider();
togglePopups();
phoneHandler();
sendForms();
tooltipHandler();
repairsTypes();
portfolioSlider();
documents();
testimonials();
accordion();

