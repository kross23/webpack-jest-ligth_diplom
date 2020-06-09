

import 'mdn-polyfills/Node.prototype.append';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import constructor from './modules/constructor';
import sendForm from './modules/sendForm';
import maskphone from './modules/maskphone';
import popupCall from './modules/popupCall';
import active from './modules/active';
import buttonmore from './modules/buttonmore';
import bayn from './modules/checkbayn';
import elementClosest from 'element-closest';
elementClosest(window);
active();
popupCall();
sendForm();
constructor();
buttonmore();
bayn();
maskphone();