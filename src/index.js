import './style.css';

import { Header } from './components/Header/Header.js';
import { Banner } from './components/Banner/Banner.js';
import { Menu } from './components/Menu/Menu.js';
import { Gallery } from './components/Gallery/Gallery.js';
import { Contact } from './components/Contact/Contact.js';
import { Footer } from './components/Footer/Footer.js';

console.log('funguju!');

const pageElm = document.createElement('div');
pageElm.classList.add('page');

const mainElm = document.createElement('main');
mainElm.append(Banner(), Menu(), Gallery(), Contact());

pageElm.append(Header(), mainElm, Footer());

document.querySelector('#app').append(pageElm);
