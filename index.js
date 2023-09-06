const { app, BrowserWindow, globalShortcut } = require("electron");

const createWindow = () => {
  globalShortcut.register("Control+Space", () => {
    if (mainWindow.isVisible() && mainWindow.isFocused()) mainWindow.hide();
    else {
      mainWindow.show();
    }
  });

  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 900,
    titleBarStyle: "hidden",
    trafficLightPosition: { x: 20, y: 22 },
    minWidth: 430,
    minHeight: 700,
    icon: __dirname + "/build/icon.icns",
  });

  mainWindow.loadURL("http://chat.openai.com");

  const applyStyles = () => {
    mainWindow.webContents.insertCSS(css);
  };

  mainWindow.webContents.on("did-finish-load", applyStyles);
  mainWindow.webContents.on("did-navigate-in-page", applyStyles);
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  globalShortcut.unregisterAll();
  if (process.platform !== "darwin") app.quit();
});

const css = `
  .mb-1.flex.flex-row.gap-2 {
    margin-left: 75px !important;
  }
  
  header.sticky.top-0.z-\\[9\\].w-full.bg-white.dark\\:bg-gray-800 {
    -webkit-app-region: drag;
    position: sticky;
    top: 0;
    height: 0px !important;
  }

  .relative.z-20.flex.min-h-\\[60px\\].flex-wrap.items-center.justify-between.gap-3.border-b.border-black\\/10.bg-white.p-2.text-gray-500.dark\\:border-gray-900\\/50.dark\\:bg-gray-800.dark\\:text-gray-300 {
    -webkit-app-region: drag !important;
  }
  
  .w-full.p-1.text-center.md\\:w-auto.md\\:text-justify {
    -webkit-app-region: no-drag;
  }

  .flex.flex-shrink.flex-row {
    -webkit-app-region: no-drag;
  }
`;
