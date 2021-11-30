
var projectFile ;
function applyRegex() {
    if(projectFile != undefined) {
      var projectFileRegex ;
            if(projectFile.includes("\\")) {
        var antislashregex = /\\/g;
        projectFileRegex = projectFile.replace(antislashregex, "/");
    } 
    console.log("loading " + projectFileRegex);
    window.localStorage.setItem("projectPath", projectFileRegex);
    window.location = "./editor.html" ;
  }
  }
/**
 * Loads a project file then transfers it to the "editor.html" page.
 */
function showLoadProject() {
  newFileSelected = undefined;
  fileSelected  = undefined;
  showFileSelectionDialog(appConfig.projectsFolder, (selectedFile) => {
    projectFile = selectedFile ;
    applyRegex();
  });
}
var project ;
/**
 * Loads the project file in the editor.
 * @param {String} projectFilePath 
 */
function loadProjectFile(projectFilePath) {

  fs.readFile(projectFilePath, 'utf8', function(err, data){
      
    // Display the file content
    console.log(JSON.parse(data));
    project = JSON.parse(data);
    console.log(project.propreties);
    loadProject();
});
}

function loadProject() {
  var titleElement = document.getElementById("projectTitle");
  titleElement.innerHTML = project.propreties.name ;
}