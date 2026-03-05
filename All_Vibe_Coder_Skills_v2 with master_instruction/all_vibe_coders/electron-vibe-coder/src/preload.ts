import { contextBridge, ipcRenderer } from 'electron';

// Only expose specific, typed methods — never the full ipcRenderer
contextBridge.exposeInMainWorld('api', {
  greet: (name: string): Promise<string> => ipcRenderer.invoke('app:greet', name),
});
