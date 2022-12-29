import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

/**
 * Initialization data for the dataconnector extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'dataconnector:plugin',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension dataconnector is activated!');
    console.log('ICommandPalette:', palette);
  }
};

export default plugin;
