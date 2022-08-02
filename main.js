const { app, BrowserWindow,Menu,Tray } = require('electron')

let window;
let window2;

const createWindow = (window, options)=>{
    window = new BrowserWindow(options)
    window.loadFile(options.url);
}
app.whenReady().then(()=>{
    opt1 = {
        url: 'index.html',
        width: 800,
        height: 600,
        title: "Test Electron",
        backgroundColor: '#aaa',
        webPreferences:{
            devTools:false //ctrl+shift+i
        },
        // alwaysOnTop: true//mais focado na tela(prioridade de janela)
    }
    opt2 = {
        url: 'popup.html',
        width: 400,
        height: 400,
        title: "Test Electron",
        backgroundColor: '#ff0',
        webPreferences:{
            devTools:false //ctrl+shift+i
        },
        alwaysOnTop: true//mais focado na tela(prioridade de janela)
    }
    createWindow(window,opt1)
    createWindow(window2,opt2)

    let tray = new Tray('./icon.png');
    let menuContext = Menu.buildFromTemplate([
        {label:"item 1", type:"checkbox"},
        {type:"separator"},
        {label:"item 2", type:"normal"},
    ])
    tray.setToolTip('Electron Tray')
    tray.setContextMenu(menuContext)

})
