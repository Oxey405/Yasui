/**
 * (c) 2021 Oxey405 (Alexis) <Oxey405@gmail.com>
 * SOFTWARE WITH NO WARRANTY INCLUDED
 */


/**
 * Open a window to select a folder
 * @param {String} [defaultdir]
 * @param {Function} callback
 */
function showFolderSelectionDialog(defaultdir, callback) {
  newFolderSelected = undefined;
  try {
    if (defaultdir == null || defaultdir == undefined) {
      defaultdir == os.homedir() + "/Documents";
    }
  } catch (error) {
    console.error(
      'Cannot get the "Documents" folder ! Have you forgot to import the "SystemRelated/modulesManager.js" script in the header ?'
    );
  }

  try {
    dialog
      .showOpenDialog(BrowserWindow, {
        title: "Choose a project folder",
        defaultPath: defaultdir,
        properties: ["openDirectory"],
      })
      .then((result) => {
        if (!result.canceled) {
          callback(result.filePaths[0]);
        }
      });
  } catch (error) {
    console.error(
      'Cannot show the folder selection dialog ! have you forgot to import the "SystemRelated/modulesManager.js" script in the header ?'
    );
  }
}
/**
 * 
 * @param {String} defaultdir default directory
 * @param {Function} callback
 */
function showFileSelectionDialog(defaultdir, callback) {
    newileSelected = undefined ;
    

    try {
        if(defaultdir == null || defaultdir == undefined) {
            defaultdir == os.homedir() + "/Documents";
        }
    } catch (error) {
        console.error("Cannot get the \"Documents\" folder ! Have you forgot to import the \"SystemRelated/modulesManager.js\" script in the header ?");
    }
   
 try {
   dialog
     .showOpenDialog(BrowserWindow, {
       title: "Choose a project folder",
       defaultPath: defaultdir,
       properties: ["openFile"],
       filters: [
         { name: "YasUI Project file", extensions: ["json"] },
       ],
     })
     .then((result) => {
       if (!result.canceled) {
         callback(result.filePaths[0]);
        
       }
     });
 } catch (error) {
   console.error(
     'Cannot show the file selection dialog ! have you forgot to import the "SystemRelated/modulesManager.js" script in the header ?'
   );
 }
 
}