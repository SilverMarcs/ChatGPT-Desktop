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
  if (process.platform !== "darwin") app.quit();
});

const css = `
.pb-0\.5\.last\:pb-0 {
  padding-left: 4rem !important;
}

.group\.flex\.h-10\.items-center\.gap-2\.rounded-lg\.px-2\.font-medium\.hover\:bg-token-surface-primary {
  padding-left: 4rem !important;
}

.flex\.h-full\.w-full\.flex-col\.p-2\.gizmo\:px-3\.gizmo\:pb-3\.5\.gizmo\:pt-0 {
  background-color: transparent !important;
  backround-image: none !important;
 } 

 /* sidebar top area */
 .sticky.left-0.right-0.top-0.z-20.bg-black.pt-3\\.5 {
  padding-top: 55px !important;
}

/* headerbar */
.sticky.top-0.mb-1\\.5.flex.items-center.justify-between.z-10.h-14.bg-white\\/95.p-2.font-semibold.dark\\:bg-gray-800\\/90 {
  -webkit-app-region: drag !important;
  background-color: #2d2e3a !important;
  border-bottom: 1px solid #2a2b3d !important;
}

/* headerbar gpt chooser */
.flex.items-center.gap-2 {
  -webkit-app-region: no-drag !important;
}

/* headerbar share btn */
.btn.relative.btn-neutral.btn-small.flex.h-9.w-9.items-center.justify-center.whitespace-nowrap.rounded-lg.border.border-token-border-medium.focus\\:ring-0 {
  -webkit-app-region: no-drag !important;
  background-color: #2d2e3a !important;
}

 

`;

// const css3 = `
//   /* shrink new chat button to acommodate traffic light */
//   .mb-1.flex.flex-row.gap-2 {
//     margin-left: 75px !important;
//   }

//   /* sticky and draggable headerbar */
//   header {
//     transform: translateY(0%) !important;
//     -webkit-app-region: drag !important;
//     background-color: red !important;
//   }

//   /* header bg color */
//   .relative.z-20.flex.min-h-\\[60px\\].flex-wrap.items-center.justify-between.gap-3.border-b.border-black\\/10.bg-white.p-2.text-gray-500.dark\\:border-gray-900\\/50.dark\\:bg-gray-800.dark\\:text-gray-300 {
//     background-color: #3B3D4A !important;
//   }

//   /* share icon bg color */
//   .flex.p-3.items-center.gap-3.transition-colors.duration-200.text-gray-600.dark\\:text-gray-200.cursor-pointer.text-sm.rounded-md.bg-white.dark\\:bg-gray-800.hover\\:bg-gray-50.dark\\:hover\\:bg-gray-700.h-11 {
//     background-color: #3B3D4A !important;
//   }

//   /* share icon non draggable */
//   .flex.flex-shrink.flex-row {
//     -webkit-app-region: no-drag;
//   }

//   /* top left icons */
//   .dark .dark\\:border-white\\/20 {
//     border: none !important;
//     border-color: transparent !important;
//   }
// `;

// const css1 = `
//   /* shrink new chat button to acommodate traffic light */
//   .mb-1.flex.flex-row.gap-2 {
//     margin-left: 75px !important;
//   }

//   /* sticky and draggable headerbar */
//   header {
//     transform: translateY(0%) !important;
//     -webkit-app-region: drag !important;
//   }

//   /* share icon non draggable */
//   .flex.flex-shrink.flex-row {
//     -webkit-app-region: no-drag;
//   }

//   /* top left icons */
//   .dark .dark\\:border-white\\/20 {
//     border: none !important;
//     border-color: transparent !important;
//   }

//   /* almost global bg color */
//   .flex.flex-col.text-sm.dark\\:bg-gray-800.h-full {
//     background-color: #1b1b1c !important;
//   }

//   /* user msg bg color */
//   .group.w-full.text-token-text-primary.border-b.border-black\\/10.dark\\:border-gray-900\\/50.dark\\:bg-gray-800 {
//     background-color: #2d2d2e !important;
//     border-bottom: 1px solid #111111 !important;
//   }

//   /* gpt msg bg color */
//   .group.w-full.text-token-text-primary.border-b.border-black\\/10.dark\\:border-gray-900\\/50.bg-gray-50.dark\\:bg-\\[\\#444654\\] {
//     background-color: #222223 !important;
//     border-bottom: 1px solid #111111 !important;
//   }

//   /* very bottom area */
//   .flex.flex-col.text-sm.dark\\:bg-gray-800 {
//     background-color: #303031 !important;
//   }

//   /* header bg color */
//   .relative.z-20.flex.min-h-\\[60px\\].flex-wrap.items-center.justify-between.gap-3.border-b.border-black\\/10.bg-white.p-2.text-gray-500.dark\\:border-gray-900\\/50.dark\\:bg-gray-800.dark\\:text-gray-300 {
//     background-color: #373738 !important;
//     border-bottom: 1px solid #111111 !important;
//   }

//   /* share icon bg color */
//   .flex.p-3.items-center.gap-3.transition-colors.duration-200.text-gray-600.dark\\:text-gray-200.cursor-pointer.text-sm.rounded-md.bg-white.dark\\:bg-gray-800.hover\\:bg-gray-50.dark\\:hover\\:bg-gray-700.h-11 {
//     background-color: #373738 !important;
//   }

//   /* clipbaord buttons */
//   .flex.ml-auto.gap-2.rounded-md.p-1.hover\\:bg-gray-100.hover\\:text-gray-700.dark\\:text-gray-400.dark\\:hover\\:bg-gray-700.dark\\:hover\\:text-gray-200.disabled\\:dark\\:hover\\:text-gray-400 {
//     color: #bbb !important;
//   }

//   /* like unlike buttons */
//   .p-1.rounded-md.hover\\:bg-gray-100.hover\\:text-gray-700.dark\\:text-gray-400.dark\\:hover\\:bg-gray-700.dark\\:hover\\:text-gray-200.disabled\\:dark\\:hover\\:text-gray-400 {
//     color: #bbb !important;
//   }

//   /* code block header */
//   .flex.items-center.relative.text-gray-200.bg-gray-800.px-4.py-2.text-xs.font-sans.justify-between.rounded-t-md {
//     background-color: #303031 !important;
//     border: 1px solid #1e1e1e !important;
//   }
// }
// `;

// const css2 = `

//   /* doesnt work for rchanging chat gradient */
//   .absolute.bottom-0.left-0.w-full.border-t.md\\:border-t-0.dark\\:border-white\\/20.md\\:border-transparent.md\\:dark\\:border-transparent.md\\:bg-vert-light-gradient.bg-white.dark\\:bg-gray-800.md\\:!bg-transparent.dark\\:md\\:bg-vert-dark-gradient.pt-2.md\\:pl-2.md\\:w-\\[calc\\(100%-.5rem\\)\\] {
//     background-image: linear-gradient(180deg, rgba(128,128,128,0), #808080 58.85%) !important;
//   }

//   /* sidebar */
//   .flex-shrink-0.overflow-x-hidden.dark.bg-gray-900 {
//     background-color: transparent !important;
//     border-right: 1px solid #111111 !important;
//   }

//   /* this will select bottom area plus also some area around left sidebar text */
//   .flex-1.overflow-hidden {
//     background-color: red !important;
//   }

//   /* this will affect bottom area and sidebar color. try for transparency */
//   .flex.h-full {
//     background-color: red !important;
//   }

//   /* changes bg befpre loading chat. not useful */
//   .flex.h-full.max-w-full.flex-1.flex-col {
//     background-color: red !important;
//   }

//   /* bottom area color but not useful  is used jsut for that */
//   .h-32.md\\:h-48.flex-shrink-0 {
//     background-color: red !important;
//   }

// `;
