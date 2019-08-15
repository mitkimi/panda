'use strict'

import { app, BrowserWindow, Menu, Tray } from 'electron'
const path = require('path')
// webFrame.setZoomLevelLimits(1, 1)
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let tray
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    webPreferences: {
      webSecurity: false
    },
    height: 550,
    useContentSize: true,
    width: 860,
    resizable: false // 禁止调整窗口大小
  })

  // 禁止缩放
  let webContents = mainWindow.webContents
  webContents.on('did-finish-load', () => {
    webContents.setZoomFactor(1)
    webContents.setVisualZoomLevelLimits(1, 1)
    webContents.setLayoutZoomLevelLimits(0, 0)
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', (e) => {
    mainWindow = null
  })
  mainWindow.on('close', (e) => {
    mainWindow.hide()
    mainWindow.setSkipTaskbar(true)
    e.preventDefault() // 禁止关闭
  })
}

app.on('ready', () => {
  tray = new Tray(path.join(__dirname, '../renderer/assets/icon-20.png'))
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '显示主界面',
      click: () => {
        mainWindow.show()
      }
    },
    {
      label: '退 出',
      click: () => {
        app.quit()
      }
    }
  ])
  tray.setToolTip('Panda Tools')
  tray.setContextMenu(contextMenu)
  createWindow()
})

app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') {
  //   app.quit()
  // }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
