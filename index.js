const { app, BrowserWindow } = require('electron');
require('@electron/remote/main').initialize();
const createWindow = () => {
  
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        nativeWindowOpen: true,
        enableRemoteModule: true,
        sandbox:false,
        nodeIntegrationInSubFrames:true, //for subContent nodeIntegration Enable
        webviewTag:true, //for webView
        enableRemoteModule: true
      }
    })
  
    win.loadFile('IDE/pages/main-menu.html')
    require("@electron/remote/main").enable(win.webContents)

  }

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })