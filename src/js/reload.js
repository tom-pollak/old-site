// import Worker from "./js/sass.worker.js";
import Sass from "./sass.js";

var sass = new Sass("./src/js/sass.worker.js");
console.log(sass);

sass.preloadFiles(
  "../sass/",
  "",
  ["styles.scss", "colors.scss", "hue.scss"],
  function callback() {}
);

const rangeSlider = document.getElementById("color-picker");
// rangeSlider.addEventListener("mousemove", handleUpdate);
rangeSlider.addEventListener("change", handleUpdate);

function handleUpdate() {
  var scss = "$hue: " + this.value + ";";
  // sass.readFile("colors.scss", function callback(content) {
  //   scss += content;
  // });
  // console.log(scss);
  // sass.readFile("styles.scss", function callback(content) {
  //   console.log(content);
  //   scss += content;
  // });

  sass.writeFile("hue.scss", scss);
  sass.readFile("hue.scss", function callback(content) {
    console.log(content);
  });
  sass.readFile("styles.scss", function callback(content) {
    console.log(content);
  });
  sass.compileFile("styles.scss", function callback(result) {
    console.log(result.text);
    sass.writeFile("styles.scss", result.text);
  });
}
