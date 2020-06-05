'use strict';

import 'mdn-polyfills/Node.prototype.append';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import popupCall from './modules/popupCall';
import active from './modules/active';
import elementClosest from 'element-closest';
elementClosest(window);
active();
popupCall();
