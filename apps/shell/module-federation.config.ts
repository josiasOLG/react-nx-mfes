import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: [
    ['mfe1', 'http://localhost:4201/remoteEntry.js']
  ],
  shared: (libraryName, sharedConfig) => {
    if (libraryName === 'react' || libraryName === 'react-dom') {
      return {
        singleton: true,
        eager: true,
        requiredVersion: sharedConfig.requiredVersion,
      };
    }
    return false;
  }
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
