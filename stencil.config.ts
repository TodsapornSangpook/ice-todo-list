import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'ice-todo-list',
  bundles: [{ components: ['my-component'] }, { components: ['todo-list', 'todo-item'] }],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'ice-todo-list',
      proxiesFile: '../ice-todo-list/react-component/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
