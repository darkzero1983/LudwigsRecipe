var map = {
	'app': 'wwwroot/app',
	'rxjs': 'node_modules/rxjs',
	'zonejs': 'node_modules/zone.js/dist',
	'reflect-metadata': 'node_modules/reflect-metadata',
	'@angular': 'node_modules/@angular'
};

var packages = {
	'app': { main: 'main', defaultExtension: 'js' },
	'rxjs': { defaultExtension: 'js' },
	'zonejs': { main: 'zone', defaultExtension: 'js' },
	'reflect-metadata': { main: 'Reflect', defaultExtension: 'js' }
};

var packageNames = [
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/forms',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router',
  'app/components',
  'app/services',
  'app/directives',
  'app/pipes',
  'app/models',
  'app/module',
  'app/global'
];

packageNames.forEach(function (pkgName) {
	packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

System.config({
	baseURL: '/',
	map: map,
	packages: packages
});