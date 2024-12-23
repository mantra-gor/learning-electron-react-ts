import { app, BrowserWindow } from "electron";
import path from "path";
import { ipcHandle, isDev } from "./util.js";
import { getStaticData, pollResources } from "./resourceManager.js";
import { getPreloadPath, getUIPath } from "./pathResolver.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(getUIPath()));
  }

  pollResources(mainWindow);

  handleGetStaticData(() => {
    return getStaticData();
  });
});

function handleGetStaticData(callback: () => StaticData) {
  ipcHandle("getStaticData", callback);
}
