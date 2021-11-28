//start a custom-made "async" function to wait for the user to select a folder
var fileSelected ;
function applyRegex() {
  if(folderSelected != undefined) {
    var fileSelectedRegex ;
          if(fileSelected.includes("\\")) {
      var antislashregex = /\\/g;
      fileSelectedRegex = fileSelected.replace(antislashregex, "/");
  } 
  console.log(fileSelectedRegex);
}
}


//open a folder's dialog
function openFileSelection() {
  newFileSelected = undefined;
  fileSelected  = undefined;
  showFileSelectionDialog(appConfig.projectsFolder, (selectedFile) => {
    fileSelected = selectedFile ;
    applyRegex();
  });
}
