import "./colors.scss";
import "./styles.scss";
import "./theme.js";
var sass = require("sass");

const rangeSlider = document.getElementById("color-picker");
// rangeSlider.addEventListener("change", handleUpdate);
rangeSlider.addEventListener("mousemove", handleUpdate);

// const hello = document.getElementById("hello");
function handleUpdate() {
  sass.render({ file: "styles.scss" });
  // rangeSlider.dataset.value = this.value;
  // hello.style.setProperty("--color-hue", this.value);
  // console.log(hello.style.getPropertyValue("--color-hue"));
}
