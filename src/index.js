const { app, BrowserWindow } = require('electron')

const createWindows = () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            preload: './preload.js'
        }
    })

    win.loadFile('./views/index.html')
}

app.whenReady().then(createWindows)