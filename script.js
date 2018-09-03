var stl_viewer = new StlViewer(document.getElementById("stl-container"));
var volumeButton = document.getElementById("volume-button");
var areaButton = document.getElementById("area-button");

function loadFile(file) {
  stl_viewer.clean();
  stl_viewer.add_model(
    {
      local_file: file
    });
}

function calculateVolume() {
  var volume = JSON.stringify(stl_viewer.get_model_info(1).volume);
  document.getElementById("volume-output").innerHTML = volume;
}

function calculateArea() {
  var area = JSON.stringify(stl_viewer.get_model_info(1).area);
  document.getElementById("area-output").innerHTML = area;
}

volumeButton.addEventListener("click", calculateVolume);
areaButton.addEventListener("click", calculateArea);