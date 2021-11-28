var projectFile ;
function applyRegex() {
    if(projectFile != undefined) {
      var projectFileRegex ;
            if(projectFile.includes("\\")) {
        var antislashregex = /\\/g;
        projectFileRegex = projectFile.replace(antislashregex, "/");
    } 
    console.log("loading " + projectFileRegex);
  }
  }
/**
 * Loads a project
 */
function loadProject() {
  newFileSelected = undefined;
  fileSelected  = undefined;
  showFileSelectionDialog(appConfig.projectsFolder, (selectedFile) => {
    projectFile = selectedFile ;
    applyRegex();
  });
}