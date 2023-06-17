const isDEV = (process.env.node_env === 'development') ? true : false;
const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');

console.log('You are running in:|', process.env.node_env, '|isDev', isDEV)

// MAIN WINDOW FUNCTION
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Main Menu",
        width: isDEV ? 1000 : 500,
        height: 800,
    });

    //if in dev .env open dev tools
    if (isDEV) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));

}

// ABOUT WINDOW FUNCTION
function createAboutWindow() {
    const aboutWindow = new BrowserWindow({
        title: "About",
        width: isDEV ? 1000 : 500,
        height: 300,
    });

    //if in dev .env open dev tools
    if (isDEV) {
        aboutWindow.webContents.openDevTools();
    }

    aboutWindow.loadFile(path.join(__dirname, './renderer/about.html'));
}

// APP LAUNCH
app.whenReady().then(() => {
    createMainWindow();

    // SETUP APP MENU
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);

    // OPEN MAIN WINDOW
    app.on('active', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});


// MENU STRUCTURE
cont = menu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                click: () => app.quit(),
                accelerator: 'CmdOrCtrl+Q'
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'About Demo',
                click: () => createAboutWindow(),
                accelerator: 'CmdOrCtrl+Q'
            }
        ]
    }
]

// APP QUIT
app.on('window-all-closed', () => {
    if (process.platfrom !== 'darwin') {
        app.quit();
    }
})