import "./sass.worker.js";
import Sass from "./sass.js";

import styles from "!!raw-loader!../sass/styles.scss";
import colors from "!!raw-loader!../sass/colors.scss";
console.log(styles);

var sass = new Sass(__webpack_require__.p + "bundle.worker.js");
sass.writeFile("colors.scss", colors);
sass.writeFile("styles.scss", styles);

const rangeSlider = document.getElementById("color-picker");
rangeSlider.addEventListener("mousemove", handleUpdate);
rangeSlider.addEventListener("change", handleUpdate);

function handleUpdate() {
  var scss = "$hue: " + this.value + ";";
  sass.writeFile("hue.scss", scss);
  sass.compileFile("styles.scss", function callback(result) {
    var style = document.getElementById("style");
    if (style == null) {
      var style = document.createElement("style");
      style.id = "style";
      style.type = "text/css";
      style.innerHTML = result.text;
      document.getElementsByTagName("head")[0].appendChild(style);
    } else {
      style.innerHTML = result.text;
    }
  });
}
