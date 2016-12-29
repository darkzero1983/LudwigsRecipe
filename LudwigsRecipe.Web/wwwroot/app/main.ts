﻿require('node_modules/jquery/dist/jquery.min.js');
require('node_modules/bootstrap/dist/js/bootstrap.min.js');
require('node_modules/zone.js/dist/zone.min.js');

require('node_modules/reflect-metadata/Reflect.js');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from 'app/module';
import { enableProdMode } from '@angular/core';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);