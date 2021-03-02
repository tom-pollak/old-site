import "./sass.worker.js";
import Sass from "./sass.js";

var sass = new Sass(__webpack_require__.p + "bundle.worker.js");
sass.preloadFiles(
  "../src/sass/",
  "",
  ["styles.scss", "colors.scss", "hue.scss"],
  function callback() {}
);

const rangeSlider = document.getElementById("color-picker");
// rangeSlider.addEventListener("mousemove", handleUpdate);
rangeSlider.addEventListener("change", handleUpdate);

function handleUpdate() {
  var scss = "$hue: " + this.value + ";";
  sass.writeFile("hue.scss", scss);
  sass.compileFile("styles.scss", function callback(result) {
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = result.text;
    document.getElementsByTagName("head")[0].appendChild(style);
  });
}
