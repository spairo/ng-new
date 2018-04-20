const packageJson = require('../../package.json');

export const environment = {
  appName: 'NEW',
  envName: 'PROD',
  production: true,
  hostname: 'https://150.250.140.226:8700',
  dynPath: 'New',
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
