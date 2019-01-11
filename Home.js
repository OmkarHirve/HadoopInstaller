/*jshint esversion: 6 */
const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

var mainWindow;

app.on('ready',function(){
    mainWindow = new BrowserWindow(
        {
            title:true,
            height:1000,
            width:1500,
            resizable:true,
            icon:path.join(__dirname,'html/images/hadoop.png')
        });     //created new window when app is ready.
    
        mainWindow.loadURL(url.format({pathname: path.join(__dirname,'html/HomePage.html'),
        protocol:'file',
        slashes: true

    }));
    
});

 
