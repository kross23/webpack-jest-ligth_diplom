'use strict';

import 'mdn-polyfills/Node.prototype.append';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import consolelog from './modules/consolelog';
import countTimer from './modules/countTimer';
import elementClosest from 'element-closest';
elementClosest(window);
consolelog();
countTimer('14 jun 2020');