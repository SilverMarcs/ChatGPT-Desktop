const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 900,
    titleBarStyle: "hidden",
    trafficLightPosition: { x: 20, y: 22 },
    minWidth: 430,
    minHeight: 700,
    icon: __dirname + "/build/icon.icns",
    vibrancy: "sidebar"
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
  if (process.platform !== "darwin") app.quit();
});

const css = `
  /* shrink new chat button to acommodate traffic light */
  .mb-1.flex.flex-row.gap-2 {
    margin-left: 75px !important;
  }

  /* sticky and draggable headerbar */
  header {
    transform: translateY(0%) !important;
    -webkit-app-region: drag !important;
    background-color: #3b3d4a !important;
  }

  /* share icon non draggable */
  .flex.flex-shrink.flex-row {
    -webkit-app-region: no-drag;
  }

  /* top left icons */
  .dark .dark\\:border-white\\/20 {
    border: none !important;
    border-color: transparent !important;
  }
}
`;