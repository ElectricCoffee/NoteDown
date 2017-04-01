const {app, BrowserWindow} = require('electron')
const path = require('path')
const url  = require('url')

let window

app.on('ready', () => {
  window = new BrowserWindow({
    title: 'NoteDown',
    width: 800, height: 600,
    show: false
  })

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.xhtml'),
    protocol: 'file:',
    slashes: true
  }))

  window.on('closed', () => {
    window = null
  })

  window.on('ready-to-show', () =>{
    window.show();
    window.focus();
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    window = null
  }
})
