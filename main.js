const isDEV = process.env.NODE_ENV !== 'production';
const path = require('path');
const { app, BrowserWindow } = require('electron');

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

app.whenReady().then(() => {
    createMainWindow();

    app.on('active', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platfrom !== 'darwin') {
        app.quit();
    }
})