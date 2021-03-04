const electron = require("electron");
const url = require("url");
const path = require("path");
const { dirname } = require("path");
const client = require('discord-rich-presence')('816971132263596032');

const { app , BrowserWindow, Menu , ipcMain}  = electron;

let mainWindow, newWindow;

app.on('ready', () => {

    client.updatePresence({
        state: 'Main Menu',
        details: '🐍',
        largeImageKey: 'logo',
        smallImageKey: 'logo',
        instance: true,
      });

    mainWindow = new BrowserWindow({
        frame: false,
        webPreferences: {
            contextIsolation: true,
            enableRemoteModule: false, 
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.setResizable(false)

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname , "mainWindow.html"),
            protocol: "file",
            slashes: true
        })
    );

    const MainMenu = Menu.buildFromTemplate(MainMenuTemplate)
    Menu.setApplicationMenu(MainMenu)

    ipcMain.on("ist:quit", (err, data) => {
        app.quit(); 
        newWindow = null;
    })

    ipcMain.on("ist:checklist", (err, data) => {
        if(newWindow == null){
            CreateWindow(data)
            client.updatePresence({
                state: `Using ${data.toUpperCase()} Checklist`,
                details: '🐍',
                largeImageKey: 'logo',
                smallImageKey: 'logo',
                instance: true,
            });
        }
    })

    ipcMain.on("checklist:quit", (err, data) => {
        newWindow.close();
        newWindow = null;
        client.updatePresence({
            state: 'Main Menu',
            details: '🐍',
            largeImageKey: 'logo',
            smallImageKey: 'logo',
            instance: true,
          });
    })

    

});

function CreateWindow(data){
    newWindow = new BrowserWindow({
        frame: false,
        width: 475,
        height: 580,
        webPreferences: {
            contextIsolation: true,
            enableRemoteModule: false, 
            preload: path.join(__dirname, 'preload.js')
        }
    });

    newWindow.setResizable(false)

    newWindow.loadURL(
        url.format({
            pathname: path.join(__dirname , "assets/checklist"+data+".html"),
            protocol: "file",
            slashes: true
        })
    );

    newWindow.on("close", () => {
        newWindow = null;
    })
}


const MainMenuTemplate = [
    {
        label: "Dosya",
        submenu : [
            {
                label : "Çıkış",
                role : "quit"
            }
        ]
    }
]

if(process.platform == "darwim"){
    MainMenuTemplate.unshift({
        label : app.getName(),
        role: "Istanbul Downloader"
    })
}

if(process.env.NODE_ENV != 'production'){
    MainMenuTemplate.push({
        label: "Dev Tools",
        submenu: [
            {
                label: "Dev Menu",
                click(item,focusedWindow){
                    focusedWindow.toggleDevTools()
                }
            },
            {
                label: "Reload the Page",
                role: "reload"
            }
        ]
    })
}