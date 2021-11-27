/**
 * (c) 2021 Oxey405 (Alexis) <Oxey405@gmail.com>
 * SOFTWARE WITH NO WARRANTY INCLUDED
 */


const YASUIDIR = os.homedir() + "/.yasui" ;
var configFilePath = YASUIDIR + "/config.json";
var folderproject = os.homedir() + "/Documents/";
// for (let i = 0; i < folderproject.length; i++) {
    if(folderproject.includes("\\")) {
        var antislashregex = /\\/g;
        folderproject = folderproject.replace(antislashregex, "/");

    } 
//}
const DEFAULTCONFIGURATION = `{"projectsFolder":"${folderproject}"}`;
var appConfig ;
//making directories if they are not existing
if(!fs.existsSync(YASUIDIR)) {
    fs.mkdir(YASUIDIR, (err) => {
        if(err) {
            dialog.showErrorBox("Fatal error !", "A fatal error occured ! Application can't create the necessary directory.\r\n ERROR CODE : CL-1 Informations : \r\n" + err)
            remote.app.quit();
        } else {
            console.log("created directory !");
            console.log("creating default config file because it does not exists");
            fs.writeFile(configFilePath, DEFAULTCONFIGURATION, function (err) {
                if(err) {
                    dialog.showErrorBox("Fatal error !", "A fatal error occured ! Application can't write the config file.\r\nERROR CODE : CL-2 Informations : \r\n" + err)
                    remote.app.quit();
                }
            });
        }
    });
}
function getConfig() {
    console.log("Trying to get config file");
    fs.readFile(configFilePath, 'utf-8', function(err, data) {
        if(err) {
            // dialog.showErrorBox("Fatal error !", "A fatal error occured ! Application can't read the config file.\r\nERROR CODE : CL-3 Informations : \r\n" + err)
            // remote.app.quit();
            console.log("creating default config file because it does not exists");
            fs.writeFile(configFilePath, DEFAULTCONFIGURATION, function (err) {
                if(err) {
                    dialog.showErrorBox("Fatal error !", "A fatal error occured ! Application can't write the config file.\r\nERROR CODE : CL-2 Informations : \r\n" + err)
                    remote.app.quit();
                }
            });
        } else {
            console.log("Configuration file loaded !");
            appConfig = JSON.parse(data);
        }
    });
}