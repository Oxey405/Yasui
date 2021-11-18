const { app, BrowserWindow } = require('electron');
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
        webviewTag:true //for webView
      }
    })
  
    win.loadFile('IDE/pages/index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })