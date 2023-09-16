const { app, BrowserWindow, globalShortcut } = require("electron");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 900,
    titleBarStyle: "hidden",
    trafficLightPosition: { x: 20, y: 22 },
    minWidth: 430,
    minHeight: 700,
    icon: __dirname + "/build/icon.icns",
    // vibrancy: "sidebar",
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
  /* shrink new chat button to acommodate traffic light */
  .mb-1.flex.flex-row.gap-2 {
    margin-left: 75px !important;
  }

  /* headerbar draggable*/
  .relative.z-20.flex.min-h-\\[60px\\].flex-wrap.items-center.justify-between.gap-3.border-b.border-black\\/10.bg-white.p-2.text-gray-500.dark\\:border-gray-900\\/50.dark\\:bg-gray-800.dark\\:text-gray-300 {
    -webkit-app-region: drag !important;
    height: 0px !important;
  }

  /* share icon non draggable */
  .flex.flex-shrink.flex-row {
    -webkit-app-region: no-drag;
  }

  /* top icons */
  .dark .dark\\:border-white\\/20 {
    border: none !important;
    border-color: transparent !important;
  }
}
`;