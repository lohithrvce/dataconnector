import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the dataconnector extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'dataconnector:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension dataconnector is activated!');
  }
};

export default plugin;
