import Sass from "./sass.js";

import theme from "../scss/theme.scss";
import colors from "../scss/colors.scss";
import hue from "../scss/hue.scss";
import styles from "../scss/styles.scss";

var sass = new Sass(__webpack_require__.p + "bundle.worker.js");
sass.writeFile("colors.scss", colors);
sass.writeFile("theme.scss", theme);
sass.writeFile("hue.scss", hue);

const style = document.getElementsByTagName("STYLE")[1];
console.log(style);
style.id = "style";
style.type = "text/css";

const rangeSlider = document.getElementById("color-slider");

rangeSlider.onchange = function () {
  var hue = "$hue: " + (this.value % 360) + ";";
  sass.writeFile("hue.scss", hue);
  sass.compileFile("colors.scss", function callback(result) {
    style.innerHTML = result.text;
  });
};
