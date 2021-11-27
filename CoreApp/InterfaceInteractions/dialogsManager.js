/**
 * (c) 2021 Oxey405 (Alexis) <Oxey405@gmail.com>
 * SOFTWARE WITH NO WARRANTY INCLUDED
 */


/**
 * Open a window to select a folder
 * @param {String} [defaultdir]
 */
function showFolderSelectionDialog(defaultdir) {
    newFolderSelected = undefined ;
    if(defaultdir == null || defaultdir == undefined) {
        defaultdir == os.homedir() + "/Documents";
    }
 
    dialog.showOpenDialog(BrowserWindow, {title: 'Choose a project folder', defaultPath: defaultdir, properties:["openDirectory"]})
    .then(result => {
        if(!result.canceled) {
                console.log("selected");
                newFolderSelected = result.filePaths[0];
        }
    });
}