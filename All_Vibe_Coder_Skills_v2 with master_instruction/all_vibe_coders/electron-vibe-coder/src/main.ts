import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,   // ALWAYS true
      nodeIntegration: false,   // ALWAYS false
    },
  });

  win.loadFile('index.html');
}

// Example IPC handler — add real handlers in dedicated modules
ipcMain.handle('app:greet', (_event, name: string) => {
  return `Hello, ${name}! Copilot SKILL.md is active.`;
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
