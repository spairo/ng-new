const packageJson = require('../../package.json');

export const environment = {
  appName: 'NEW',
  envName: 'DEV',
  production: false,
  hostname: 'https://150.250.250.206:10443/mgrmd_mx_web/mgrm_mult_web_neyw_01',
  dynPath: '/assets/',
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
