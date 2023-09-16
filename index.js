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
    mainWindow.webContents.insertCSS(css1);
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

const css1 = `
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

const css = `
  body {
    background: none !important;
    background-color: transparent;
  }

  .mb-1.flex.flex-row.gap-2 {
    margin-left: 75px !important;
  }
  
  .relative.z-20.flex.min-h-\\[60px\\].flex-wrap.items-center.justify-between.gap-3.border-b.border-black\\/10.bg-white.p-2.text-gray-500.dark\\:border-gray-900\\/50.dark\\:bg-gray-800.dark\\:text-gray-300 {
    -webkit-app-region: drag !important;
    height: 0px !important;
    border-bottom: 1px solid black !important;
  }
  
  .bg-gradient-to-l {
    background-color: transparent !important;
    background-image: none !important;
    background: none !important;
  }
  
  .w-full.p-1.text-center.md\\:w-auto.md\\:text-justify {
    -webkit-app-region: no-drag;
  }

  .flex.flex-shrink.flex-row {
    -webkit-app-region: no-drag;
  }

  .h-9.pb-2.pt-3.px-3.text-xs.text-gray-500.font-medium.text-ellipsis.overflow-hidden.break-all.bg-gray-50.dark\\:bg-gray-900 {
    background-color: transparent !important;
    background-image: none !important;
  }

  .dark.flex-shrink-0.overflow-x-hidden.bg-gray-900 {
    background-color: transparent !important;
    background-image: none !important;
    border-right: 1px solid black !important;
  }

  .flex.py-3.px-3.items-center.gap-3.relative.rounded-md.hover\\:bg-gray-100.dark\\:hover\\:bg-\\[\\#2A2B32\\].cursor-pointer.break-all.bg-gray-50.hover\\:pr-4.dark\\:bg-gray-900.group {
    background-color: transparent !important;
    background-image: none !important;
  }  

  /* top icons */
  .dark .dark\\:border-white\\/20 {
    border: none !important;
    border-color: transparent !important;
  }
}
`;

// const css = `
//   .mb-1.flex.flex-row.gap-2 {
//     margin-left: 75px !important;
//     border: none
//   }
  
//   header.sticky.top-0.z-\\[9\\].w-full.bg-white.dark\\:bg-gray-800 {
//     -webkit-app-region: drag;
//     height: 0px !important;
//   }

//   .relative.z-20.flex.min-h-\\[60px\\].flex-wrap.items-center.justify-between.gap-3.border-b.border-black\\/10.bg-white.p-2.text-gray-500.dark\\:border-gray-900\\/50.dark\\:bg-gray-800.dark\\:text-gray-300 {
//     -webkit-app-region: drag !important;
//     height: 0px !important;
//     background-color: #363838 !important;
//     border-bottom: 1px solid black !important;
//   }
  
//   .w-full.p-1.text-center.md\\:w-auto.md\\:text-justify {
//     -webkit-app-region: no-drag;
//   }

//   .flex.flex-shrink.flex-row {
//     -webkit-app-region: no-drag;
//   }

//   .flex.p-3.items-center.gap-3.transition-colors.duration-200.text-gray-600.dark\\:text-gray-200.cursor-pointer.text-sm.rounded-md.bg-white.dark\\:bg-gray-800.hover\\:bg-gray-50.dark\\:hover\\:bg-gray-700.h-11 {
//     background-color: #363838 !important;
//   }

//   body {
//     background: none !important;
//     background-color: transparent;
//   }

//   .dark.flex-shrink-0.overflow-x-hidden.bg-gray-900 {
//     background-color: transparent;
//     background-image: none;
//     border-right: 1px solid black !important;
//   }

  // .flex.py-3.px-3.items-center.gap-3.relative.rounded-md.cursor-pointer.break-all.bg-gray-800.pr-14.hover\\:bg-gray-800.group {
  //   background-color: #4b4f5280 !important;
  // }
  
  // .absolute.inset-y-0.right-0.w-8.z-10.bg-gradient-to-l.from-gray-800 {
  //   background-image: none !important;
  // }

//   .flex.py-3.px-3.items-center.gap-3.relative.rounded-md.cursor-pointer.break-all.bg-gray-900.group {
//     background-color: transparent; !important;
//     background-image: none; !important;
//   }

  // .flex.py-3.px-3.items-center.gap-3.relative.rounded-md.cursor-pointer.break-all.bg-gray-900.group:hover {
  //   background-color: #4b4f5240 !important; 
  // }
  
  // .absolute.inset-y-0.right-0.w-8.z-10.bg-gradient-to-l.from-gray-900.group-hover\\:from-\\[\\#2A2B32\\] {
  //   background-image: none !important;
  // }

//   .h-9.pb-2.pt-3.px-3.text-xs.text-gray-500.font-medium.text-ellipsis.overflow-hidden.break-all.bg-gray-900 {
//     background-color: transparent !important;
//     background-image: none !important;
//   }

//   .react-scroll-to-bottom--css-msbxd-79elbk.h-full.dark\\:bg-gray-800 {
//     background-color: #212222 !important;
//   }

//   .group.w-full.text-token-text-primary.border-b.border-black\\\/10.dark\\:border-gray-900\\\/50.dark\\:bg-gray-800 {
//     background-color: #202121 !important;
//   }

//   .group.w-full.text-token-text-primary.border-b.border-black\\/10.dark\\:border-gray-900\\/50.bg-gray-50.dark\\:bg-\\[\\#444654\\] {
//     background-color: #262727 !important;
//     border-bottom: 1px solid #131313 !important;
//     border-top: 1px solid #131313 !important;
//   }

  // .flex.px-3.min-h-\\[44px\\].py-1.items-center.gap-3.transition-colors.duration-200.text-white.cursor-pointer.text-sm.rounded-md.border.border-white\\/20.hover\\:bg-gray-500\\/10.h-11.flex-grow.overflow-hidden {
  //   border: none !important;
  // }

  // .flex.px-3.min-h-\\[44px\\].py-1.gap-3.transition-colors.duration-200.text-white.cursor-pointer.text-sm.rounded-md.border.border-white\\/20.hover\\:bg-gray-500\\/10.h-11.w-11.flex-shrink-0.items-center.justify-center {
  //   border: none !important;
  // }


//   .btn.relative.btn-neutral.whitespace-nowrap.-z-0.border-0.md\\:border {
//     background-color: #2c2d2d; !important;
//     border: 1px solid black !important;
//   }

//   .flex.flex-col.text-sm.dark\\:bg-gray-800.h-full {
//     background-color: #202121 !important;
//   }

//   .flex.flex-col.w-full.py-\\[10px\\].flex-grow.md\\:py-4.md\\:pl-4.relative.border.border-black\\/10.bg-white.dark\\:border-gray-900\\/50.dark\\:text-white.dark\\:bg-gray-700.rounded-xl.shadow-xs.dark\\:shadow-xs {
//     background-color: #2c2d2d !important;
//     border: 1px solid #111111 !important;
//   }

//   .h-32.md\\:h-48.flex-shrink-0 {
//     background-color: transparent !important;
//     background-image: linear-gradient(to top, #222222, transparent) !important;
//   }

//   .flex.items-center.relative.text-gray-200.bg-gray-800.px-4.py-2.text-xs.font-sans.justify-between.rounded-t-md {
//     background-color: #1e1f1f !important;
//   }

  // .flex.w-full.items-center.gap-3.rounded-md.px-3.py-3.text-sm.transition-colors.duration-200.hover\\:bg-gray-800.group-ui-open\\:bg-gray-800:hover {
  //   background-color: #4b4f5260 !important;
  // }

//   .relative.flex.rounded-xl.bg-gray-100.p-1.text-gray-900.dark\:bg-gray-900 {
//     border: 1px solid #2f3031 !important;
// }

//   .group\/button.relative.flex.w-full.items-center.justify-center.gap-1.rounded-lg.border.py-3.outline-none.transition-opacity.duration-100.sm\:w-auto.sm\:min-w-\[148px\].md\:gap-2.md\:py-2\.5.border-black\/10.bg-white.text-gray-900.shadow-\[0_1px_7px_0px_rgba\(0,0,0,0.06\)\].hover\:!opacity-100.dark\:border-\[#4E4F60\].dark\:bg-gray-700.dark\:text-gray-100 {
//     background-color: #2f3031 !important;
// }

//   .btn.relative.btn-neutral.group.w-full.whitespace-nowrap.rounded-xl.text-left.text-gray-700.shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)].dark\:text-gray-300.md\:whitespace-normal {
//       background-color: #262727; !important;
//   }

//   .h-32.md\\:h-48.flex-shrink-0 {
//     background-color: #202121 !important;
//   }

//   ::-webkit-scrollbar {
//     width: 0rem; !important;
//   }
//   .absolute.bottom-0.left-0.w-full.border-t.md\:border-t-0.dark\:border-white\\/20.md\:border-transparent.md\:dark\:border-transparent.md\:bg-vert-light-gradient.bg-white.dark\:bg-gray-800.md\:!bg-transparent.dark\:md\:bg-vert-dark-gradient.pt-2.md\:pl-2.md\:w-[calc(100%-.5rem)] {
//     background-image: linear-gradient(180deg,rgba(54,55,55,0),#353535 58.85%); !important;
//   }

//   ::-webkit-input-placeholder { /* WebKit browsers */
//     color:    #555;
//   }

// }

// `;