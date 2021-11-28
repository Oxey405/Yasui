var folderSelectionResultHtmlElement ;
var folderSelected ;
//start a custom-made "async" function to wait for the user to select a folder
function applyRegex() {
      if(folderSelected != undefined) {
        var folderSelectedRegex ;
              if(folderSelected.includes("\\")) {
          var antislashregex = /\\/g;
          folderSelectedRegex = folderSelected.replace(antislashregex, "/");
      } 
      document.getElementById(folderSelectionResultHtmlElement).value = folderSelectedRegex;
      setDefaultFolderPath(folderSelectedRegex);
      }
  }



//open a folder's dialog
function openFolder() {
  showFolderSelectionDialog(appConfig.projectsFolder, (folderPath) => {
    folderSelected = folderPath ;
    applyRegex();
  });
}
