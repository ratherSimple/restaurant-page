import {navbar} from './initial-loadup.js'
import {home} from './home.js'
import {menu} from './menu.js'
import {contact} from './contact.js'

navbar.display();
home.display();

document.querySelector('#about').addEventListener('click', home.display);
document.querySelector('#menu').addEventListener('click', menu.display);
document.querySelector('#contact').addEventListener('click', contact.display);