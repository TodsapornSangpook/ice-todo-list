import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ice-todo-list',
  bundles: [{ components: ['my-component'] }, { components: ['todo-list', 'todo-item'] }],
  outputTargets: [
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
