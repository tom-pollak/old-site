import Sass from "./sass.js";

import format from "../scss/theme.scss";
import colors from "../scss/colors.scss";
import hue from "../scss/hue.scss";

var sass = new Sass(__webpack_require__.p + "bundle.worker.js");
sass.writeFile("colors.scss", colors);
sass.writeFile("theme.scss", format);
sass.writeFile("hue.scss", hue);

const style = document.getElementsByTagName('STYLE')[1];
console.log(style);
style.id = "style";
style.type = "text/css";
sass.compileFile("colors.scss", function callback(result) {
  style.innerHTML = result.text;
});
// document.getElementsByTagName("head")[0].appendChild(style);

const rangeSlider = document.getElementById("color-slider");
rangeSlider.addEventListener("mousemove", handleUpdate);
rangeSlider.addEventListener("change", handleUpdate);

function handleUpdate() {
  var hue = "$hue: " + this.value + ";";
  sass.writeFile("hue.scss", hue);
  sass.compileFile("colors.scss", function callback(result) {
    style.innerHTML = result.text;
  });
}
