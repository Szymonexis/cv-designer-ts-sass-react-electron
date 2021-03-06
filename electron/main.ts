import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as isDev from "electron-is-dev";
import installExtension, {
	REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";

let win: BrowserWindow | null = null;

function createWindow() {
	const { fork } = require('child_process')
	fork(`${__dirname}/server.js`)

	win = new BrowserWindow({
		width: 900,
		height: 600,
		minWidth: 900,
		minHeight: 600,
		webPreferences: {
			nodeIntegration: true,
		},
		frame: false,
		titleBarStyle: 'hidden',
		titleBarOverlay: {
			color: '#000000',
			symbolColor: '#023e8a'
		},
		icon: __dirname + "/src/resources/logo/logo-transparent.png"
	});

	if (isDev) {
		win.loadURL("http://localhost:3000/index.html");
	} else {
		// 'build/index.html'
		win.loadURL(`file://${__dirname}/../index.html`);
	}

	win.on("closed", () => (win = null));

	// Hot Reloading
	if (isDev) {
		// 'node_modules/.bin/electronPath'
		require("electron-reload")(__dirname, {
			electron: path.join(
				__dirname,
				"..",
				"..",
				"node_modules",
				".bin",
				"electron"
			),
			forceHardReset: true,
			hardResetMethod: "exit",
		});
	}

	// DevTools
	installExtension(REACT_DEVELOPER_TOOLS)
		.then((name) => console.log(`Added Extension:  ${name}`))
		.catch((err) => console.log("An error occurred: ", err));

	if (isDev) {
		win.webContents.openDevTools();
	}
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (win === null) {
		createWindow();
	}
});
