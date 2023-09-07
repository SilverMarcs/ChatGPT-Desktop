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
    vibrancy: "sidebar",
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
    border: none
  }
  
  header.sticky.top-0.z-\\[9\\].w-full.bg-white.dark\\:bg-gray-800 {
    -webkit-app-region: drag;
    height: 0px !important;
  }

  .relative.z-20.flex.min-h-\\[60px\\].flex-wrap.items-center.justify-between.gap-3.border-b.border-black\\/10.bg-white.p-2.text-gray-500.dark\\:border-gray-900\\/50.dark\\:bg-gray-800.dark\\:text-gray-300 {
    -webkit-app-region: drag !important;
    background-color: #363838 !important;
    border-bottom: 1px solid black !important;
  }
  
  .w-full.p-1.text-center.md\\:w-auto.md\\:text-justify {
    -webkit-app-region: no-drag;
  }

  .flex.flex-shrink.flex-row {
    -webkit-app-region: no-drag;
  }

  .flex.p-3.items-center.gap-3.transition-colors.duration-200.text-gray-600.dark\\:text-gray-200.cursor-pointer.text-sm.rounded-md.bg-white.dark\\:bg-gray-800.hover\\:bg-gray-50.dark\\:hover\\:bg-gray-700.h-11 {
    background-color: #363838 !important;
  }

  body {
    background: none !important;
    background-color: transparent;
  }

  .dark.flex-shrink-0.overflow-x-hidden.bg-gray-900 {
    background-color: transparent;
    background-image: none;
    border-right: 1px solid black !important;
  }

  .flex.py-3.px-3.items-center.gap-3.relative.rounded-md.cursor-pointer.break-all.bg-gray-800.pr-14.hover\\:bg-gray-800.group {
    background-color: #4b4f5280 !important;
  }
  
  .absolute.inset-y-0.right-0.w-8.z-10.bg-gradient-to-l.from-gray-800 {
    background-image: none !important;
  }

  .flex.py-3.px-3.items-center.gap-3.relative.rounded-md.cursor-pointer.break-all.bg-gray-900.group {
    background-color: transparent;
    background-image: none;
  }
  
  .absolute.inset-y-0.right-0.w-8.z-10.bg-gradient-to-l.from-gray-900.group-hover\\:from-\\[\\#2A2B32\\] {
    background-image: none !important;
  }

  .h-9.pb-2.pt-3.px-3.text-xs.text-gray-500.font-medium.text-ellipsis.overflow-hidden.break-all.bg-gray-900 {
    background-color: transparent !important;
    background-image: none !important;
  }

  .react-scroll-to-bottom--css-msbxd-79elbk.h-full.dark\\:bg-gray-800 {
    background-color: #212222 !important;
  }

  .group.w-full.text-token-text-primary.border-b.border-black\\\/10.dark\\:border-gray-900\\\/50.dark\\:bg-gray-800 {
    background-color: #202121 !important;
  }

  .group.w-full.text-token-text-primary.border-b.border-black\\/10.dark\\:border-gray-900\\/50.bg-gray-50.dark\\:bg-\\[\\#444654\\] {
    background-color: #262727 !important;
  }

  .flex.px-3.min-h-\\[44px\\].py-1.items-center.gap-3.transition-colors.duration-200.text-white.cursor-pointer.text-sm.rounded-md.border.border-white\\/20.hover\\:bg-gray-500\\/10.h-11.flex-grow.overflow-hidden {
    border: none !important;
  }

  .flex.px-3.min-h-\\[44px\\].py-1.gap-3.transition-colors.duration-200.text-white.cursor-pointer.text-sm.rounded-md.border.border-white\\/20.hover\\:bg-gray-500\\/10.h-11.w-11.flex-shrink-0.items-center.justify-center {
    border: none !important;
  }

`;
