const { app, BrowserWindow } = require('electron');
const { shell } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        minWidth: 250,
        minHeight: 100,
        width: 980,
        height: 580,
        webPreferences: {
          nodeIntegration: true
        },
        title: "Password Generator",
        autoHideMenuBar: true,
    });

    win.loadFile("src/index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });
});



app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});


