/**
 * (c) 2021 Oxey405 (Alexis) <Oxey405@gmail.com>
 * SOFTWARE WITH NO WARRANTY INCLUDED
 */


var projectPath;
var projectsFolder;

/**
 * 
 * @returns {JSON}
 */
function getDefaultFolderPath() {
    return appConfig.projectsFolder;
}
/**
 * sets the default project folder path
 * @param {String} newFolderPath
 */
function setDefaultFolderPath(newFolderPath) {
 
    appConfig.projectsFolder = newFolderPath ;
    fs.writeFile(configFilePath, JSON.stringify(appConfig), function (err) {
        console.log("updated config file");
        if(err) {
            dialog.showErrorBox("Error (non-critical)", "A fatal error occured ! Application can't write the config file.\r\nERROR CODE : PM-1 Informations : \r\n" + err);
        }
    });
}