'use strict';

//引入electron
const electron = require('electron');
//app控制整个Electron的声明周期
const app = electron.app;
//创建一个本地的窗口
const BrowserWindow = electron.BrowserWindow;
//保持一个全局的窗口对象，可以不显示，如果没有这个对象，窗口点击关闭的时候，js对象会被gc干掉
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    //加载静态资源
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on("closed", function () {
        mainWindow = null
    })
}

//生命周期的函数定义
//这里好好看api http://electron.atom.io/docs/api/app/
app.on("ready", createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});