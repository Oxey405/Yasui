 /**
 * (c) 2021 Oxey405 (Alexis) <Oxey405@gmail.com>
 * SOFTWARE WITH NO WARRANTY INCLUDED
 */
 //Variables definitions
 var newFolderSelected;
 var checkSelectedFolder;
 var newFileSelected;
 var checkSelectedFile;
 var hasConfigWaiterExectued = false ;
 //getting the configuration
 if(!isConfigLoaded) {
   getConfig();

 }
  //waits for the config to be loaded

 var newFolderSelected ;
 var checkSelectedFolder;

function onConfigLoad() {
  if(isConfigLoaded && !hasConfigWaiterExectued) {
    console.log(getDefaultFolderPath());
  document.getElementById(folderSelectionResultHtmlElement).value = appConfig.projectsFolder;
  hasConfigWaiterExectued = true ;
 }   
}
 

