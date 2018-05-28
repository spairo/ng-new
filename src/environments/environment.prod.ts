const packageJson = require('../../package.json');

export const environment = {
  appName: 'NEW',
  envName: 'DEV',
  production: false,
  hostname: 'https://150.100.96.75:36020',
  dynPath: '/mgrm_mult_web_gestionbanqueros_01',
  mock: '/assets/',
  platform: 'structuredProduct',
  apiVersion: 'v1',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript']
  }
};
