//electron app
const {app, BrowserWindow} = require('electron')
const path = require('path')
cont url = require('url')

let win

function createWindow () {

  //set instance of BrowserWindow to win
  win = new BrowserWindow({width: 800, height: 600})

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html');
    protocol: 'file:',
    slashes: true
  }))

  //Main methods

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit
  }
})
