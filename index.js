const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // This enables the use of require in the renderer process
    }
  });

  mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);
