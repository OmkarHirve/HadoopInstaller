const remote = require('electron').remote;
const ipcM = require('electron').ipcMain;
const ipcR = require('electron').ipcRenderer;

document.getElementById('SqoopButton').addEventListener('click',function(){
    remote.getCurrentWindow().loadURL('Sqoopinstallation.html');
});