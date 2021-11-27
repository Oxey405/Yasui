/**
 * (c) 2021 Oxey405 (Alexis) <Oxey405@gmail.com>
 * SOFTWARE WITH NO WARRANTY INCLUDED
 */

// This is where you "officially" load all modules into the page...

const os = require("os");
const fs = require("fs");
const remote  = require('@electron/remote');
const { config } = require("process");
const BrowserWindow = remote.BrowserWindow.getFocusedWindow();
const dialog = remote.dialog ;