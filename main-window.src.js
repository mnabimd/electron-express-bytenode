'use strict';

const { port, url } = require('./server');
const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
   mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: { nodeIntegration: true }
   });

   mainWindow.loadURL(url);
   mainWindow.on('close', (event) => {
      mainWindow = null;
   });
}

app.on('ready', createWindow);

app.on('window-all-closed', (_) => {
   if (process.platform !== 'darwin') {
      app.quit();
   }
});

app.on('activate', (_) => {
   if (mainWindow === null) {
      createWindow();
   }
});

exports.app = app;
exports.mainWindow = mainWindow;
