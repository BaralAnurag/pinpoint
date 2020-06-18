const { app, BrowserWindow, Menu, Tray } = require('electron');
const isDevMode = require('electron-is-dev');
const { CapacitorSplashScreen, configCapacitor } = require('@capacitor/electron');


const path = require('path');

// Place holders for our windows so they don't get garbage collected.
let mainWindow = null;

// Placeholder for SplashScreen ref
let splashScreen;

//Change this if you do not wish to have a splash screen
let useSplashScreen = true;

const iconPath = path.join(__dirname, 'images',
  process.platform === 'win32' ? 'icon.ico' : 'icon.png');

  let isQuitting = false;

// Create simple menu for easy devtools access, and for demo
// const menuTemplate = [
//   {
//     label: 'Options',
//     submenu: [
//       {
//         label: 'Open Dev Tools',
//         click() {
//           mainWindow.openDevTools();
//         },
//       },
//     ],
//   },
// ];

// Create an application menu
 const menuTemplate = [];

// We can ask the OS for default menus by role, and they will be built for us
const appMenu = { role: 'appMenu' };
const fileMenu = { role: 'fileMenu' }
const editMenu = { role: 'editMenu' };
const windowMenu = { role: 'windowMenu' };

const devMenu = {
  label: 'Options',
  submenu: [
    { role: 'toggleDevTools', label: 'Dev Tools', accelerator: 'F12' },
    { role: 'reload' },    
    { role: 'forceReload' },
  ],
}

// Build consolidated menu template
if (process.platform === 'darwin') {
  menuTemplate.push(appMenu);
} else {
  menuTemplate.push(fileMenu);
}
menuTemplate.push(editMenu, windowMenu);

if (isDevMode) {
  menuTemplate.push(devMenu);
}

// Build the menu from the consolidated template
const menu = Menu.buildFromTemplate(menuTemplate);

// And set it for the application
Menu.setApplicationMenu(menu);

async function createWindow () {
  // For mac
  if(app.dock) {
    app.dock.setIcon(iconPath);
  }
  // Define our main window size
  mainWindow = new BrowserWindow({
    icon: iconPath,
    height: 920,
    width: 1600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'node_modules', '@capacitor', 'electron', 'dist', 'electron-bridge.js')
    }
  });

  configCapacitor(mainWindow);

  if (isDevMode) {
    // Set our above template to the Menu Object if we are in development mode, dont want users having the devtools.
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
    // If we are developers we might as well open the devtools by default.
    mainWindow.webContents.openDevTools();
  }


  if (useSplashScreen) {
    splashScreen = new CapacitorSplashScreen(mainWindow, {
      imageFileName: 'splash.png',
      windowHeight: 800,
      windowWidth: 600,
      loadingText: 'Starting Pinpoint...',
      backgroundColor: '#cc0099',
      textPercentageFromTop: 85
      // customHtml: 'AnyHTML you want'
    });
    splashScreen.init();
  } else {
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    mainWindow.webContents.on('dom-ready', () => {
      mainWindow.show();
    });
  }

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some Electron APIs can only be used after this event occurs.
app.on('ready', startup);

function startup() {
  createWindow();
  buildTrayMenu();
}

function buildTrayMenu() {
  const trayIcon = process.platform === 'win32' ? 'icon.ico' : 'tray-icon.png';
  tray = new Tray(path.join(__dirname, 'images', trayIcon));
  tray.on('double-click', () => mainWindow.show());
  tray.setPressedImage(path.join(__dirname, 'images','tray-icon-pressed.png'));
  tray.setToolTip(app.getName());
  tray.setContextMenu(Menu.buildFromTemplate([
    {role: 'about'},
    {type: 'separator'},
    {role: 'quit'}
  ]));
}

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// Define any IPC or other custom functionality below here
